<template>
	<v-navigation-drawer
		v-bind="bindingSettings"
		ref="resizeDrawer"
		:class="drawerClasses"
		:location="props.location"
		:model-value="modelValue"
		:name="props.name"
		:style="drawerStyles"
		:tag="props.tag"
		:theme="props.theme"
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
import { IconOptions, useDisplay, useTheme } from 'vuetify';
import { VNavigationDrawer } from 'vuetify/components';
import {
	EmitEventNames,
	Props,
} from '@/types';
import { AllProps } from './utils/props';
import {
	useGetStorage,
	useSetStorage,
} from '@/plugin/composables/storage';
import {
	useDrawerClasses,
	useHandleIconClasses,
	useHandleContainerClasses,
} from '@/plugin/composables/classes';
import {
	useDrawerStyles,
	useHandleContainerStyles,
	useHandleIconStyles,
} from '@/plugin/composables/styles';
import {
	useConvertToNumber,
	useConvertToUnit,
} from '@/plugin/composables/helpers';
import { useGetIcon } from '@/plugin/composables/icons';


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
const bindingSettings = computed(() => props);

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
onMounted(() => {
	if (props.location !== 'start' && props.location !== 'end' && props.location !== 'left' && props.location !== 'right') {
		throw new Error("VResizeDrawer: 'top' and 'bottom' locations are not supported.");
	}

	init();
});

onUnmounted(() => {
	removeListeners();
});


// -------------------------------------------------- Init //
function init(): boolean {

	// Disable resize if rail is set //
	if (props.rail) {
		resizedWidth.value = props.railWidth || undefined;
		return false;
	}

	const storageWidth = useGetStorage(props.storageType, props.storageName);
	const width = useConvertToUnit({ str: props.width });
	resizedWidth.value = width as string;
	defaultWidth.value = resizedWidth.value as string;

	if (props.saveWidth && storageWidth && !props.rail) {
		resizedWidth.value = useGetStorage(props.storageType, props.storageName) as string;
	}

	useSetStorage({
		action: 'update',
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
	});

	return false;
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
	absolute: props.absolute,
	expandOnHover: props.expandOnHover,
	floating: props.floating,
	isMouseover,
	location: props.location,
	rail: props.rail,
	railWidth: props.railWidth,
	temporary: props.temporary,
}));

const drawerStyles = computed(() => useDrawerStyles({
	isMouseDown,
	maxWidth: computedMaxWidth.value,
	minWidth: computedMinWidth.value,
	rail: props.rail,
	railWidth: props.railWidth,
	resizedWidth,
	widthSnapBack: props.widthSnapBack,
}));

const drawerWidth = computed<string | undefined>(() => {
	if (props.rail) {
		return undefined;
	}

	return useConvertToUnit({ str: resizedWidth.value as string }) as string;
});


// -------------------------------------------------- Handle Container //
const handleContainerClasses = computed(() => useHandleContainerClasses({
	drawerLocation: props.location,
	handlePosition: props.handlePosition,
}));

const handleContainerStyles = computed(() => useHandleContainerStyles({
	borderWidth: props.handleBorderWidth,
	handleColor: props.handleColor,
	iconSize: props.handleIconSize,
	position: props.handlePosition,
	theme,
}));

const showHandle = computed(() => {
	if (props.touchless && display.mobile.value) {
		return false;
	}

	if (!props.resizable || props.rail) {
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
	drawerLocation: props.location,
	handlePosition: props.handlePosition,
	iconOptions,
	isUserIcon: typeof props.handleIcon !== 'undefined' && props.handleIcon !== null,
}));

const theHandleIcon = computed(() => {
	const icon = useGetIcon({
		icon: props.handleIcon,
		iconOptions,
		position: props.handlePosition,
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

	if (props.location === 'right' || props.location === 'end') {
		widthValue = document.body.scrollWidth - widthValue;
	}

	resizedWidth.value = useConvertToUnit({ str: widthValue }) || undefined;

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
	if (props.maxWidth === '100%') {
		return window.innerWidth;
	}

	if (String(props.maxWidth).includes('%')) {
		const percent = parseInt(String(props.maxWidth).replace('%', ''));

		return (window.innerWidth * percent) / 100;
	}

	return props.maxWidth;
});

const computedMinWidth = computed(() => {
	if (props.minWidth === '100%') {
		return window.innerWidth;
	}

	if (String(props.minWidth).includes('%')) {
		const percent = parseInt(String(props.minWidth).replace('%', ''));

		return (window.innerWidth * percent) / 100;
	}

	return props.minWidth;
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
	resizedWidth.value = defaultWidth.value;

	useSetStorage({
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
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

	if (props.handlePosition === 'border') {
		offsetX = props.handleBorderWidth as number;
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

	if (widthVal.includes('-')) {
		resizedWidth.value = computedMinWidth.value;
	}

	resizedWidth.value = checkMaxMinWidth(resizedWidth.value);
	resizedWidth.value = useConvertToUnit({ str: resizedWidth.value as string }) || undefined;

	useSetStorage({
		rail: props.rail,
		resizedWidth: resizedWidth.value,
		saveWidth: props.saveWidth,
		storageName: props.storageName,
		storageType: props.storageType,
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

