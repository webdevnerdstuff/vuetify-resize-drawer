<template>
	<v-navigation-drawer
		v-bind="bindingSettings"
		ref="resizeDrawer"
		:class="drawerClasses"
		:location="settings.location"
		:model-value="modelValue"
		:name="settings.name"
		:style="drawerStyles"
		:tag="settings.tag"
		:theme="theTheme"
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
				v-else-if="handlePosition !== 'border'"
				class="v-resize-drawer--handle-icon"
				:class="handleIconClasses"
				:icon="theHandleIcon"
				:size="handleIconSize"
				:style="handleIconStyles"
			></v-icon>
		</div>

		<!-- ============================== Slots  -->
		<!-- Prepend Slot -->
		<template v-if="slots.prepend">
			<slot name="prepend"></slot>
		</template>

		<!-- Default Slot -->
		<slot name="default"></slot>

		<!-- Append Slot -->
		<template v-if="slots.append">
			<slot name="append"></slot>
		</template>
	</v-navigation-drawer>
</template>

<script setup lang="ts">
import {
	EmitEventNames,
	Props,
} from '@/plugin/types';
import { IconOptions, useDisplay, useTheme } from 'vuetify';
import { VNavigationDrawer } from 'vuetify/components';
import { AllProps } from '@utils/props';
import {
	useGetStorage,
	useSetStorage,
} from '@composables/storage';
import {
	useDrawerClasses,
	useHandleIconClasses,
	useHandleContainerClasses,
} from '@composables/classes';
import {
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles,
} from '@composables/styles';
import {
	useConvertToNumber,
	useConvertToUnit,
} from '@composables/helpers';
import { useGetIcon } from '@composables/icons';
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


// -------------------------------------------------- Props //
const props = withDefaults(defineProps<Props>(), { ...AllProps });

const injectedOptions = inject(globalOptions, {});
const settings = ref({ ...props, ...injectedOptions });

watchEffect(() => {
	settings.value = { ...props, ...injectedOptions };
});

const { handleIconSize, handlePosition } = toRefs(settings.value);

const bindingSettings = computed(() => settings.value);

const iconOptions = inject<IconOptions>(Symbol.for('vuetify:icons'));
const defaultWidth = ref<Props['width']>(256);
const handleEvents: { mouseUp: boolean, mouseDown: boolean; } = {
	mouseDown: false,
	mouseUp: true,
};
const isMouseover = ref<boolean>(false);
const isMouseDown = ref<boolean>(false);
const resizeDrawer = ref<VNavigationDrawer>();
const resizedWidth = ref<string | number | undefined>(256);
const slots = useSlots();
const theme = useTheme();
const display = useDisplay();


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
	if (settings.value.location !== 'start' && settings.value.location !== 'end' && settings.value.location !== 'left' && settings.value.location !== 'right') {
		throw new Error("[VResizeDrawer]: 'top' and 'bottom' locations are not supported.");
	}

	// Disable resize if rail is set //
	if (settings.value.rail) {
		resizedWidth.value = settings.value.railWidth || undefined;
		return;
	}

	const storageWidth = useGetStorage(settings.value.storageType, settings.value.storageName);
	const width = useConvertToUnit({ value: settings.value.width });
	resizedWidth.value = width as string;
	defaultWidth.value = resizedWidth.value as string;

	if (settings.value.saveWidth && storageWidth && !settings.value.rail) {
		resizedWidth.value = useGetStorage(settings.value.storageType, settings.value.storageName) as string;
	}

	resizedWidth.value = useConvertToNumber(resizedWidth.value as string);

	useSetStorage({
		action: 'update',
		rail: settings.value.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: settings.value.saveWidth,
		storageName: settings.value.storageName,
		storageType: settings.value.storageType,
	});
}


// -------------------------------------------------- Model Watcher //
watch(() => props.modelValue, (val) => {
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
	maxWidth: computedMaxWidth.value,
	minWidth: computedMinWidth.value,
	rail: settings.value.rail,
	railWidth: settings.value.railWidth,
	resizedWidth,
	widthSnapBack: settings.value.widthSnapBack,
}));

const drawerWidth = computed<string | number | undefined>(() => {
	if (settings.value.rail) {
		return undefined;
	}

	const width = useConvertToUnit({ value: resizedWidth.value as string }) as string;

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
	position: settings.value.handlePosition,
	theme,
}));

const showHandle = computed(() => {
	if (settings.value.touchless && display.mobile.value) {
		return false;
	}

	if (!settings.value.resizable || settings.value.rail) {
		return false;
	}

	return true;
});


// -------------------------------------------------- Handle Icon //
const handleIconStyles = computed(() => useHandleIconStyles({
	color: props.handleColor,
	theme,
}));

const handleIconClasses = computed(() => useHandleIconClasses({
	drawerLocation: settings.value.location,
	handlePosition: settings.value.handlePosition,
	iconOptions,
	isUserIcon: typeof settings.value.handleIcon !== 'undefined' && settings.value.handleIcon !== null,
}));

const theHandleIcon = computed(() => {
	const icon = useGetIcon({
		icon: settings.value.handleIcon,
		iconOptions,
		name: settings.value.handlePosition,
	});

	return icon;
});


// -------------------------------------------------- Drawer Events //
function drawerMouseenter(): void {
	isMouseover.value = true;
	emit('drawer:mouseenter', isMouseover.value);
}

function drawerMouseleave(): void {
	isMouseover.value = false;
	emit('drawer:mouseleave', isMouseover.value);
}


function drawerResizeEvent(e: MouseEvent | TouchEvent, width: number): void {
	let widthValue = width;

	if (settings.value.location === 'right' || settings.value.location === 'end') {
		widthValue = document.body.scrollWidth - widthValue;
	}

	resizedWidth.value = useConvertToUnit({ value: widthValue }) || undefined;

	document.body.style.cursor = 'grabbing';

	emitEvent('handle:touchmove', e);
	emitEvent('handle:drag', e);
}

function drawerTouchResize(e: TouchEvent): void {
	const width = e.touches[0]?.clientX ?? 0;

	drawerResizeEvent(e, width);
}

function mouseResize(e: MouseEvent): void {
	const width = e.clientX;

	drawerResizeEvent(e, width);
}

// Computed Width's and Min/Mac Check //
const computedMaxWidth = computed(() => {
	if (settings.value.maxWidth === '100%') {
		return window.innerWidth;
	}

	if (String(settings.value.maxWidth).includes('%')) {
		const percent = parseInt(String(settings.value.maxWidth).replace('%', ''));

		return (window.innerWidth * percent) / 100;
	}

	return settings.value.maxWidth;
});

const computedMinWidth = computed(() => {
	if (settings.value.minWidth === '100%') {
		return window.innerWidth;
	}

	if (String(settings.value.minWidth).includes('%')) {
		const percent = parseInt(String(settings.value.minWidth).replace('%', ''));

		return (window.innerWidth * percent) / 100;
	}

	return settings.value.minWidth;
});

function checkMaxMinWidth<T>(width: T): T {
	let widthValue = width as string | number;

	// Make sure the value is not exceeding min/max boundaries //
	if (parseInt(widthValue as string) >= parseInt(computedMaxWidth.value as string)) {
		widthValue = parseInt(computedMaxWidth.value as string);
	}

	if (parseInt(widthValue as string) <= parseInt(computedMinWidth.value as string)) {
		widthValue = parseInt(computedMinWidth.value as string);
	}

	if (typeof widthValue === 'number') {
		widthValue = Math.round(widthValue as number);
	}

	let returnWidth = useConvertToNumber(widthValue as string | number) as T;
	const maxWidth = useConvertToNumber(computedMaxWidth.value) as T;
	const minWidth = useConvertToNumber(computedMinWidth.value) as T;

	if (returnWidth >= maxWidth) {
		returnWidth = maxWidth as T;
	}

	if (minWidth >= returnWidth) {
		returnWidth = minWidth as T;
	}

	return returnWidth as T;
}

// -------------------------------------------------- Handle Events //

// ------------------------- Click & DoubleClick //
function handleClick(e: Event): void {
	emitEvent('handle:click', e);
}

function handleDoubleClick(e: Event): void {
	resizedWidth.value = useConvertToNumber(defaultWidth.value as string);

	useSetStorage({
		rail: settings.value.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: settings.value.saveWidth,
		storageName: settings.value.storageName,
		storageType: settings.value.storageType,
	});

	emitEvent('handle:dblclick', e);
}

// ------------------------- MouseDown & Touchstart //
function handleStart(e: MouseEvent | TouchEvent, eventOffsetX: number): void {
	e.preventDefault();
	e.stopPropagation();

	const eventType = e.type;
	let offsetX = 25;

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
	handleStart(e, e.offsetX);
}

function handleTouchstart(e: TouchEvent): void {
	const clientX = e.touches[0]?.radiusX ?? 0;

	handleStart(e, clientX);
}

// ------------------------- MouseUp & Touchend //
function handleEnd(e: MouseEvent | TouchEvent): void {
	e.preventDefault();
	e.stopPropagation();

	const eventType = e.type;
	const drawer = resizeDrawer.value;

	isMouseDown.value = false;
	handleEvents.mouseDown = false;
	resizedWidth.value = drawer?.width ?? defaultWidth.value;

	document.body.style.cursor = '';

	const widthVal = resizedWidth.value as string;

	if (String(widthVal).includes('-')) {
		resizedWidth.value = computedMinWidth.value;
	}

	resizedWidth.value = checkMaxMinWidth(resizedWidth.value);
	resizedWidth.value = useConvertToUnit({ value: resizedWidth.value as string }) || undefined;
	resizedWidth.value = useConvertToNumber(resizedWidth.value as string);

	useSetStorage({
		rail: settings.value.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: settings.value.saveWidth,
		storageName: settings.value.storageName,
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


// -------------------------------------------------- Theme //
const theTheme = computed(() => {
	if (settings.value.theme) {
		return settings.value.theme;
	}

	return theme.global.current.value?.dark === true ? 'dark' : 'light';
});


// -------------------------------------------------- Misc Events //
function emitEvent(name: EmitEventNames, e: Event | MouseEvent): void {
	const widthInt = parseInt(checkMaxMinWidth(resizedWidth.value as string)) ?? 0 as number;

	const drawerData = {
		e,
		eventName: name,
		offsetWidth: `${window.innerWidth - widthInt}px`,
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
@use './styles/main.scss';
</style>

