<template>
	<!-- ====================================================== App Bar -->
	<AppBar
		is-playground
		@changed-theme="updateTheme"
		@updated-drawer="toggleDrawer"
	/>

	<!-- ====================================================== Navigation Drawer -->
	<VResizeDrawer
		v-model="drawer"
		v-bind="drawerOptions"
		@close="drawerClose"
		@drawer:mouseenter="drawerMouseenter"
		@drawer:mouseleave="drawerMouseleave"
		@handle:click="handleClick"
		@handle:dblclick="handleDoubleClick"
		@handle:drag="handleDrag"
		@handle:mousedown="handleMousedown"
		@handle:mouseup="handleMouseup"
	>
		<!-- <template #handle>
      <v-icon size="x-small">mdi mdi-cog</v-icon>
    </template> -->

		<v-list>
			<v-list-item>
				<v-list-item-title class="text-h6">Resize Drawer</v-list-item-title>
			</v-list-item>
		</v-list>

		<v-divider></v-divider>

		<!-- <MenuComponent /> -->
	</VResizeDrawer>

	<!-- ====================================================== Grid Drawer -->
	<VResizeDrawer
		v-bind="gridDrawerOptions"
		:model-value="gridDrawer"
		:save-width="false"
		style="z-index: 9999;"
		:theme="drawerOptions.theme"
		:width="gridDrawerWidth"
		@close="gridDrawerClose"
		@handle:dblclick="gridHandleDoubleClick"
		@handle:drag="gridHandleDrag"
	>

		<v-container
			class="grid-drawer-width position-fixed bg-surface elevation-5"
			fluid
		>
			<v-row>
				<v-col
					class="text-center "
					cols="12"
				>
					{{ computedWidth }}
				</v-col>
			</v-row>
		</v-container>

		<v-container class="bg-surface-variant pt-16">
			<v-row no-gutters>
				<v-col
					v-for="n in 12"
					:key="n"
					class="v-col-xs-12"
					lg="3"
					md="4"
					sm="6"
				>
					<v-sheet class="pa-2 ma-2">
						<div class="d-none d-md-none d-sm-none d-xs-none d-lg-flex">.v-col-lg-3</div>
						<div class="d-none d-lg-none d-sm-none d-xs-none d-md-flex">.v-col-md-4</div>
						<div class="d-none d-xs-none d-md-none d-sm-flex">.v-col-sm-6</div>
						<div class="d-none d-xs-flex">.v-col-xs-12</div>
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>

	</VResizeDrawer>
</template>


<script setup lang=ts>
import { onMounted, provide, ref } from 'vue';
import AppBar from '@/documentation/layout/AppBar.vue';


defineProps({
	gridDrawer: {
		default: false,
		type: Boolean,
	},
});

const drawerOptions = ref({
	absolute: true,
	color: '',
	drawerImage: undefined,
	elevation: 0,
	expandOnHover: true,
	fixed: true,
	floating: true,
	handleBorderWidth: 8,
	handleColor: 'primary',
	// handleIcon: 'mdi:mdi-arrow-right-bold-box',
	handleIconSize: 'x-small',
	handlePosition: 'center' as const,
	height: undefined,
	image: undefined,
	location: 'left' as const,
	maxHeight: '50%',
	maxWidth: '50%',
	minHeight: '256px',
	minWidth: '256px',
	rail: false,
	railWidth: 56,
	resizable: true,
	saveHeight: true,
	saveWidth: false,
	snapBack: true,
	sticky: false,
	storageName: 'vuetify-resize-drawer-playground-amount',
	storageType: 'local' as const,
	tag: 'nav',
	temporary: false,
	theme: 'dark',
	touchless: false,
	width: undefined,
});

const drawer = ref(true);
const drawerOffset = ref('256px');


function drawerClose() {
	drawer.value = false;
}

function drawerMouseenter(evt) {
	eventTriggered('drawerMouseenter', evt);
}

function drawerMouseleave(evt) {
	eventTriggered('drawerMouseleave', evt);
}

function handleClick(evt) {
	eventTriggered('handleClick', evt);
}

function handleDoubleClick(evt) {
	eventTriggered('handleDoubleClick', evt);

	updateDrawerOffset(evt.resizedWidth);
}

function handleDrag(evt) {
	updateDrawerOffset(evt.resizedWidth);
}

function handleMousedown(evt) {
	eventTriggered('handleMousedown', evt);
}

function handleMouseup(evt) {
	eventTriggered('handleMouseup', evt);

	updateDrawerOffset(evt.resizedWidth);
}

function toggleDrawer() {
	drawer.value = !drawer.value;
}

// Grid Drawer //
const gridDrawerOptions = ref({
	absolute: true,
	color: '',
	elevation: 0,
	handleIconSize: 'x-small',
	handlePosition: 'center' as const,
	location: 'right' as const,
	maxWidth: '90%',
	minWidth: '256px',
	permanent: false,
	resizable: true,
	saveHeight: true,
	saveWidth: false,
	scrim: false,
	temporary: true,
	widthSnapBack: true,
});


// ? Leave these functions ? //
const emit = defineEmits(['gridDrawerClosed', 'updated']);

onMounted(() => {
	getLocalStorage();
});

provide('drawerOptions', drawerOptions);

const gridDrawerWidth = ref('256px');
const computedWidth = ref(gridDrawerWidth.value);


function getLocalStorage() {
	const width = localStorage.getItem(drawerOptions.value.storageName) || drawerOffset.value;
	updateDrawerOffset(width);
}

function eventTriggered(eventName, eventValue = null) {
	return { eventName, eventValue };
}

function updateDrawerOffset(val) {
	drawerOffset.value = val;

	emit('updated', {
		drawerOffset: drawerOffset.value,
		drawerOptions: drawerOptions.value,
	});
}

function updateTheme(val) {
	drawerOptions.value.theme = val;
}

// Grid Drawer //
function gridDrawerClose() {
	emit('gridDrawerClosed');
}

function gridHandleDrag(evt) {
	computedWidth.value = evt.width;
}

function gridHandleDoubleClick(evt) {
	computedWidth.value = evt.width;
}
</script>

<style lang="scss">
.grid-drawer-width {
	z-index: 9999;
}
</style>
