<template>
	<v-navigation-drawer
		v-bind="bindingSettings"
		ref="resizeDrawer"
		v-model="internalModelValue"
		:class="drawerClasses"
		:location="settings.location"
		:name="settings.name"
		:style="drawerStyles"
		:tag="settings.tag"

		:width="drawerWidth"
		@mouseenter="drawerMouseenter"
		@mouseleave="drawerMouseleave"
	>
		<!-- ============================== Resize handle -->
		<div
			v-if="showHandle"
			:class="handleContainerClasses"
			:style="handleContainerStyles"
			@click="handleClick"
			@dblclick="handleDoubleClick"
			@mousedown="handleMouseDown"
			@mouseup="handleMouseUp"
			@touchend="handleTouchend"
			@touchstart="handleTouchstart"
		>
			<template v-if="slots.handle">
				<div class="v-resize-drawer--handle-slot">
					<slot name="handle"></slot>
				</div>
			</template>

			<v-icon
				v-else-if="handlePositionInternal !== 'border'"
				class="v-resize-drawer--handle-icon"
				:class="handleIconClasses"
				:icon="theHandleIcon"
				:size="handleIconSizeInternal"
				:style="handleIconStyles"
			></v-icon>
		</div>

		<!-- ============================== Slots  -->
		<!-- Prepend Slot -->
		<template v-if="slots.prepend">
			<div class="v-navigation-drawer__prepend">
				<slot name="prepend"></slot>
			</div>
		</template>

		<!-- Default Slot -->
		<div class="v-navigation-drawer__content">
			<slot></slot>
		</div>

		<!-- Append Slot -->
		<template v-if="slots.append">
			<div class="v-navigation-drawer__append">
				<slot name="append"></slot>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import { IconOptions, useDisplay } from 'vuetify';
import { VNavigationDrawer } from 'vuetify/components';
import {
	EmitEventNames,
	Props,
} from '@/plugin/types';
import {
	useDrawerClasses,
	useHandleContainerClasses,
	useHandleIconClasses,
} from '@composables/classes';
import {
	useConvertToNumber,
	useConvertToUnit,
	useUnitToPx,
} from '@composables/helpers';
import { useGetIcon } from '@composables/icons';
import {
	useGetStorage,
	useSetStorage,
} from '@composables/storage';
import {
	iconSizes,
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles,
} from '@composables/styles';
import { AllProps } from '@utils/props';
import { globalOptions } from './';


// -------------------------------------------------- Emits & Slots & Injects //
const emit = defineEmits([
	'close',
	'drawer:mouseenter',
	'drawer:mouseleave',
	'handle:click',
	'handle:dblclick',
	'handle:drag',
	'handle:mousedown',
	'handle:mouseup',
	'handle:touchend',
	'handle:touchmove',
	'handle:touchstart',
	'update:modelValue',
]);


const internalModelValue = defineModel<boolean>('modelValue', { default: false });

// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });

const injectedOptions = inject(globalOptions, {});
const settings = ref({ ...props, ...injectedOptions });

watchEffect(() => {
	settings.value = { ...props, ...injectedOptions };
});

watch(() => props.width, (newVal) => {
	defaultWidth.value = newVal;
	resizedAmount.value = useConvertToUnit({ value: newVal }) || undefined;

	useSetStorage({
		rail: settings.value.rail,
		resizedAmount: resizedAmount.value,
		saveAmount: settings.value.saveHeight || settings.value.saveWidth,
		storageName: storageNameInternal.value,
		storageType: settings.value.storageType,
	});
});

const handleIconSizeInternal = toRef(settings.value, 'handleIconSize');
const handlePositionInternal = toRef(settings.value, 'handlePosition');

const bindingSettings = computed(() => settings.value);

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const defaultWidth = ref<Props['width']>(256);
const defaultHeight = ref<Props['height']>(256);
const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
	mouseDown: false,
	mouseUp: true,
};
const isMouseover = ref<boolean>(false);
const isMouseDown = ref<boolean>(false);
const locationInternal = ref<Props['location']>(settings.value.location);
const resizeDrawer = ref<VNavigationDrawer>();
const resizedAmount = ref<string | number | undefined>(256);
const slots = useSlots();
const themeInternal = useTheme();
const display = useDisplay();

const isTopOrBottom = computed<boolean>(() => locationInternal.value === 'top' || locationInternal.value === 'bottom');
const storageNameInternal = computed<string>(() => `${settings.value.storageName}-${settings.value.location}`);

// -------------------------------------------------- Life Cycle Hooks //
onBeforeMount(() => {
	if (typeof settings.value.name === 'undefined') {
		settings.value.name = String(Math.floor(Math.random() * (10000 * 10000)));
	}
});

onMounted(() => {
	init();
});

onUnmounted(() => {
	removeListeners();
});


// -------------------------------------------------- Init //
function init(): void {
	if (!isAllowedHandlePosition.value) {
		throw new Error("[VResizeDrawer]: 'bottom' location does not support 'bottom' or 'top' handle positions.");
	}

	// Disable resize if rail is set //
	if (settings.value.rail && !isTopOrBottom.value) {
		resizedAmount.value = settings.value.railWidth || undefined;
		return;
	}

	const storageAmount = useGetStorage(settings.value.storageType, storageNameInternal.value);
	const amount = useConvertToUnit({ value: isTopOrBottom.value ? settings.value.height : settings.value.width });
	resizedAmount.value = amount as string;
	defaultWidth.value = resizedAmount.value as string;

	if ((settings.value.saveHeight || settings.value.saveWidth) && storageAmount && !settings.value.rail) {
		resizedAmount.value = useGetStorage(settings.value.storageType, storageNameInternal.value) as string;
	}

	resizedAmount.value = useConvertToNumber(resizedAmount.value as string);

	useSetStorage({
		action: 'update',
		rail: settings.value.rail,
		resizedAmount: resizedAmount.value,
		saveAmount: settings.value.saveHeight || settings.value.saveWidth,
		storageName: storageNameInternal.value,
		storageType: settings.value.storageType,
	});
}


// -------------------------------------------------- Model Watcher //
watch(() => internalModelValue, (val) => {
	emit('update:modelValue', val);

	if (!val) {
		emit('close');
		return;
	}
});


// -------------------------------------------------- Drawer Classes & Styles //
const drawerClasses = computed(() => useDrawerClasses({
	absolute: settings.value.absolute,
	expandOnHover: settings.value.expandOnHover,
	floating: settings.value.floating,
	isMouseover,
	location: settings.value.location,
	rail: settings.value.rail,
	railWidth: settings.value.railWidth,
	temporary: settings.value.temporary,
}));

const drawerStyles = computed(() => useDrawerStyles({
	isMouseDown,
	location: settings.value.location,
	maxWidth: computedMaxAmount.value,
	minWidth: computedMinAmount.value,
	rail: settings.value.rail,
	railWidth: settings.value.railWidth,
	resizedAmount: resizedAmount.value,
	snapBack: settings.value.snapBack || settings.value.widthSnapBack,
}));

const drawerWidth = computed<string | number | undefined>(() => {
	if (isTopOrBottom.value) {
		return undefined;
	}

	if (settings.value.rail) {
		return undefined;
	}

	const width = useConvertToUnit({ value: resizedAmount.value as string }) as string;

	return useConvertToNumber(width);
});


// -------------------------------------------------- Handle Container //
const handleContainerClasses = computed(() => useHandleContainerClasses({
	drawerLocation: settings.value.location,
	handlePosition: settings.value.handlePosition,
}));

const handleContainerStyles = computed(() => useHandleContainerStyles({
	borderWidth: settings.value.handleBorderWidth || 1,
	handleColor: settings.value.handleColor,
	iconSize: settings.value.handleIconSize,
	iconSizeUnit: iconSizeUnit.value,
	location: settings.value.location,
	position: settings.value.handlePosition,
	theme: themeInternal,
}));

const showHandle = computed(() => {
	if (settings.value.touchless && display.mobile.value) {
		return false;
	}

	if (!settings.value.resizable || settings.value.rail) {
		return false;
	}

	if (!isAllowedHandlePosition.value) {
		return false;
	}

	return true;
});

const isAllowedHandlePosition = computed<boolean>(() => {
	if ((settings.value.location === 'bottom' || settings.value.location === 'top') && (settings.value.handlePosition === 'bottom' || settings.value.handlePosition === 'top')) {
		return false;
	}

	return true;
});


// -------------------------------------------------- Handle Icon //
const handleIconStyles = computed(() => useHandleIconStyles({
	color: props.handleColor,
	theme: themeInternal,
}));

const handleIconClasses = computed(() => useHandleIconClasses({
	drawerLocation: settings.value.location,
	handlePosition: settings.value.handlePosition,
	iconOptions,
	isUserIcon: settings.value.handleIcon != null && settings.value.handleIcon !== '',
}));

const theHandleIcon = computed(() => {
	const icon = useGetIcon({
		icon: settings.value.handleIcon,
		iconOptions,
		name: settings.value.handlePosition,
	});

	return icon;
});


const iconSizeUnit = ref(useUnitToPx(String(handleIconSizeInternal.value)));

if (Object.keys(iconSizes).some(key => key.includes(String(handleIconSizeInternal.value)))) {
	iconSizeUnit.value = useUnitToPx(iconSizes[String(handleIconSizeInternal.value)]);
}


// -------------------------------------------------- Drawer Events //
function drawerMouseenter(): void {
	isMouseover.value = true;
	emit('drawer:mouseenter', isMouseover.value);
}

function drawerMouseleave(): void {
	isMouseover.value = false;
	emit('drawer:mouseleave', isMouseover.value);
}


function calculateYOffset(x: number): number {
	const a = -0.00029;
	const b = -0.356;
	const c = 43.56;

	// Calculate y using the formula y = ax^2 + bx + c
	const y = a * x * x + b * x + c;

	return Math.ceil(y);
}


function drawerResizeEvent(e: MouseEvent | TouchEvent, amount: number): void {
	let amountValue = amount;

	if (settings.value.location === 'right' || settings.value.location === 'end') {
		amountValue = document.body.scrollWidth - amountValue + (iconSizeUnit.value / 2);
	}

	if (settings.value.location === 'left' || settings.value.location === 'start') {
		amountValue = amountValue + (iconSizeUnit.value / 2);
	}

	if (settings.value.location === 'top') {
		const offset = calculateYOffset(iconSizeUnit.value);
		amountValue = amountValue - offset;
	}

	if (settings.value.location === 'bottom') {
		amountValue = window.innerHeight - amountValue + (iconSizeUnit.value / 2);
	}

	resizedAmount.value = useConvertToUnit({ value: amountValue }) || undefined;

	document.body.style.cursor = 'grabbing';

	emitEvent('handle:touchmove', e);
	emitEvent('handle:drag', e);
}

function drawerTouchResize(e: TouchEvent): void {
	const amount = isTopOrBottom.value ? e.touches[0]?.clientY : e.touches[0]?.clientX;

	drawerResizeEvent(e, amount as number);
}

function mouseResize(e: MouseEvent): void {
	const amount = isTopOrBottom.value ? e.clientY : e.clientX;

	drawerResizeEvent(e, amount as number);
}

// Computed Height/Width and Min/Max Check //
const computedMaxAmount = computed(() => {
	const maxValue = isTopOrBottom.value ? settings.value.maxHeight : settings.value.maxWidth;

	if (isTopOrBottom.value && settings.value.maxHeight === '100%') {
		return window.innerHeight;
	}

	if (settings.value.maxHeight === '100%') {
		return window.innerWidth;
	}

	if (String(maxValue).includes('%')) {
		const percent = parseInt(String(maxValue).replace('%', ''));
		const innerAmount = isTopOrBottom.value ? window.innerHeight : window.innerWidth;

		return (innerAmount * percent) / 100;
	}

	return maxValue;
});

const computedMinAmount = computed(() => {
	const minValue = isTopOrBottom.value ? settings.value.minHeight : settings.value.minWidth;

	if (isTopOrBottom.value && settings.value.minHeight === '100%') {
		return window.innerHeight;
	}

	if (settings.value.minWidth === '100%') {
		return window.innerWidth;
	}

	if (String(minValue).includes('%')) {
		const percent = parseInt(String(minValue).replace('%', ''));
		const innerAmount = isTopOrBottom.value ? window.innerHeight : window.innerWidth;

		return (innerAmount * percent) / 100;
	}

	return minValue;
});

function checkMaxMinAmount<T>(amount: T): T {
	let amountValue = amount as string | number;

	// Make sure the value is not exceeding min/max boundaries //
	if (parseInt(amountValue as string) >= parseInt(computedMaxAmount.value as string)) {
		amountValue = parseInt(computedMaxAmount.value as string);
	}

	if (parseInt(amountValue as string) <= parseInt(computedMinAmount.value as string)) {
		amountValue = parseInt(computedMinAmount.value as string);
	}

	if (typeof amountValue === 'number') {
		amountValue = Math.round(amountValue as number);
	}

	let returnAmount = useConvertToNumber(amountValue as string | number) as T;
	const maxAmount = useConvertToNumber(computedMaxAmount.value) as T;
	const minAmount = useConvertToNumber(computedMinAmount.value) as T;

	if (returnAmount >= maxAmount) {
		returnAmount = maxAmount as T;
	}

	if (minAmount >= returnAmount) {
		returnAmount = minAmount as T;
	}

	return returnAmount as T;
}

// -------------------------------------------------- Handle Events //

// ------------------------- Click & DoubleClick //
function handleClick(e: Event): void {
	emitEvent('handle:click', e);
}

function handleDoubleClick(e: Event): void {
	resizedAmount.value = defaultWidth.value;

	if (isTopOrBottom.value) {
		resizedAmount.value = defaultHeight.value;
	}

	useSetStorage({
		rail: settings.value.rail,
		resizedAmount: resizedAmount.value,
		saveAmount: settings.value.saveHeight || settings.value.saveWidth,
		storageName: storageNameInternal.value,
		storageType: settings.value.storageType,
	});

	emitEvent('handle:dblclick', e);
}

// ------------------------- MouseDown & Touchstart //
function handleStart(e: MouseEvent | TouchEvent, eventOffsetX: number): void {
	e.preventDefault();
	e.stopPropagation();

	const eventType = e.type;
	let offsetX = iconSizeUnit.value;

	isMouseDown.value = true;

	if (settings.value.handlePosition === 'border') {
		offsetX = settings.value.handleBorderWidth as number || 1;
	}

	handleEvents.mouseUp = false;

	if (eventOffsetX < offsetX) {
		if (eventType === 'touchstart') {
			document.addEventListener('touchmove', drawerTouchResize, false);
		}
		else {
			document.addEventListener('mousemove', mouseResize, false);
		}
	}

	if (!handleEvents.mouseDown) {
		handleEvents.mouseDown = true;

		if (eventType === 'touchstart') {
			document.addEventListener('touchend', handleTouchend, false);
			emitEvent('handle:touchstart', e);
		}
		else {
			document.addEventListener('mouseup', handleMouseUp, false);
			emitEvent('handle:mousedown', e);
		}

	}
}

function handleMouseDown(e: MouseEvent): void {
	const offset = isTopOrBottom.value ? e.offsetY : e.offsetX;

	handleStart(e, offset);
}

function handleTouchstart(e: TouchEvent): void {
	let client = (isTopOrBottom.value ? e.touches[0]?.radiusY : e.touches[0]?.radiusX) ?? 0;
	client = client / 2;

	handleStart(e, client);
}

// ------------------------- MouseUp & Touchend //
function handleEnd(e: MouseEvent | TouchEvent): void {
	e.preventDefault();
	e.stopPropagation();

	const eventType = e.type;
	const drawer = resizeDrawer.value;

	isMouseDown.value = false;
	handleEvents.mouseDown = false;


	if (!isTopOrBottom.value) {
		resizedAmount.value = drawer?.width ?? defaultWidth.value;
	}

	document.body.style.cursor = '';

	const amountVal = resizedAmount.value as string;

	if (String(amountVal).includes('-')) {
		resizedAmount.value = computedMinAmount.value;
	}

	resizedAmount.value = checkMaxMinAmount(resizedAmount.value);
	resizedAmount.value = useConvertToUnit({ value: resizedAmount.value as string }) || undefined;
	resizedAmount.value = useConvertToNumber(resizedAmount.value as string);

	useSetStorage({
		rail: settings.value.rail,
		resizedAmount: resizedAmount.value,
		saveAmount: settings.value.saveHeight || settings.value.saveWidth,
		storageName: storageNameInternal.value,
		storageType: settings.value.storageType,
	});

	if (!handleEvents.mouseUp) {
		handleEvents.mouseUp = true;

		if (eventType === 'touchend') {
			document.removeEventListener('touchend', handleTouchend, false);
			document.removeEventListener('touchmove', drawerTouchResize, false);
			emitEvent('handle:touchend', e);
		}
		else {
			document.removeEventListener('mouseup', handleMouseUp, false);
			document.removeEventListener('mousemove', mouseResize, false);
			emitEvent('handle:mouseup', e);
		}
	}
}

function handleMouseUp(e: MouseEvent): void {
	handleEnd(e);
}

function handleTouchend(e: TouchEvent): void {
	handleEnd(e);
}


// -------------------------------------------------- Misc Events //
function emitEvent(name: EmitEventNames, e: Event | MouseEvent): void {
	const widthInt = parseInt(checkMaxMinAmount(resizedAmount.value as string)) ?? 0 as number;

	const drawerData = {
		e,
		eventName: name,
		offsetWidth: `${window.innerWidth - widthInt}px`,
		resizedAmount: `${widthInt}px`,
		resizedHeight: `${widthInt}px`,
		resizedWidth: `${widthInt}px`,
		width: `${widthInt}px`,
	};

	emit(name, drawerData);
}

function removeListeners(): void {
	document.removeEventListener('mouseup', handleMouseUp, false);
	document.removeEventListener('mousemove', mouseResize, false);
	document.removeEventListener('touchend', handleTouchend, false);
	document.removeEventListener('touchstart', handleTouchstart, false);
}
</script>


<style lang="scss">
@use './styles/main';
</style>
