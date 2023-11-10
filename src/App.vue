<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<AppBar
			@changed-theme="updateCodeBlockTheme"
			@updated-drawer="toggleDrawer"
		/>

		<!-- ====================================================== Grid Drawer -->
		<VResizeDrawer
			v-model="gridDrawer"
			:absolute="gridDrawerOptions.absolute"
			:color="gridDrawerOptions.color"
			:elevation="gridDrawerOptions.elevation"
			:location="gridDrawerOptions.location"
			:max-width="gridDrawerOptions.maxWidth"
			:min-width="gridDrawerOptions.minWidth"
			:save-width="gridDrawerOptions.saveWidth"
			:scrim="false"
			style="z-index: 9999;"
			:temporary="gridDrawerOptions.temporary"
			:theme="drawerOptions.theme"
			:width="gridDrawerWidth"
			:width-snap-back="gridDrawerOptions.widthSnapBack"
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

						<div class="float-right">
							<v-btn
								icon
								size="x-small"
								@click="gridDrawer = false"
							><v-icon icon="mdi:mdi-close"></v-icon></v-btn>
						</div>
					</v-col>
				</v-row>
			</v-container>

			<v-container class="bg-surface-variant pt-16">
				<v-row
					class="pt-5"
					no-gutters
				>
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

		<!-- ====================================================== Navigation Drawer -->
		<VResizeDrawer
			v-model="drawer"
			:absolute="drawerOptions.absolute"
			:color="drawerOptions.color"
			:dark="drawerOptions.dark"
			:elevation="drawerOptions.elevation"
			:expand-on-hover="drawerOptions.expandOnHover"
			:floating="drawerOptions.floating"
			:handle-border-width="drawerOptions.handleBorderWidth"
			:handle-color="drawerOptions.handleColor"
			:handle-position="drawerOptions.handlePosition"
			:image="drawerOptions.image"
			:location="drawerOptions.location === 'left' ? 'left' : 'right'"
			max-width="50%"
			min-width="256"
			:rail="drawerOptions.rail"
			:rail-width="drawerOptions.railWidth"
			:resizable="drawerOptions.resizable"
			:save-width="drawerOptions.saveWidth"
			:sticky="drawerOptions.sticky"
			:storage-name="drawerOptions.storageName"
			:storage-type="drawerOptions.storageType"
			:tag="drawerOptions.tag"
			:temporary="drawerOptions.temporary"
			:theme="drawerOptions.theme"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
			@close="drawerClose"
			@handle:click="handleClick"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="handleMousedown"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
		>
			<!-- <template #handle>
				<v-icon>mdi mdi-cog</v-icon>
			</template> -->

			<v-list>
				<v-list-item>
					<v-list-item-title class="text-h6"> Resize Drawer </v-list-item-title>
					<v-list-item-subtitle>I'm as free as a bird now</v-list-item-subtitle>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<MenuComponent :drawerOptions="drawerOptions" />
		</VResizeDrawer>

		<v-navigation-drawer
			v-model="drawer"
			:absolute="drawerOptions.absolute"
			:color="drawerOptions.color"
			:elevation="drawerOptions.elevation"
			:expand-on-hover="drawerOptions.expandOnHover"
			:floating="drawerOptions.floating"
			:image="drawerOptions.image"
			:location="drawerOptions.location === 'left' ? 'right' : 'left'"
			:rail="drawerOptions.rail"
			:rail-width="drawerOptions.railWidth"
			:sticky="drawerOptions.sticky"
			:tag="drawerOptions.tag"
			:theme="drawerOptions.theme"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
		>
			<v-list>
				<v-list-item>
					<v-list-item-title class="text-h6">
						Navigation Drawer
					</v-list-item-title>
					<v-list-item-subtitle>Stuck With You</v-list-item-subtitle>
				</v-list-item>
			</v-list>

			<v-divider></v-divider>

			<MenuComponent :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<!-- ====================================================== Main Container -->
		<v-main
			class="main-container pb-10"
			:class="[{ 'drawer-open': drawer }]"
			:style="mainStyles"
		>
			<v-container class="px-10">
				<DocsPage
					:codeBlockOptions="codeBlockSettings"
					@toggleGridDrawer="gridDrawer = !gridDrawer"
					@updateOptions="updateOptions($event)"
				/>
			</v-container>
		</v-main>

	</v-app>
</template>

<script setup>
import { onMounted, computed, provide, ref } from 'vue';
import { useDisplay } from 'vuetify';
import AppBar from './documentation/layout/AppBar.vue';
import MenuComponent from './documentation/components/MenuComponent.vue';
import DocsPage from './documentation/DocsPage.vue';
import { useCoreStore } from './stores/index';
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';


onMounted(() => {
	getLocalStorage();
});

const { smAndUp } = useDisplay();

const isSmAndUp = computed(() => smAndUp.value);
const store = useCoreStore();
const drawer = ref(isSmAndUp.value);
const drawerOffset = ref('256px');
const drawerOptions = ref({
	absolute: false,
	color: '',
	dark: true,
	elevation: 10,
	expandOnHover: true,
	floating: false,
	handleBorderWidth: 8,
	handleColor: 'primary',
	handlePosition: 'center',
	location: 'left',
	rail: false,
	railWidth: 56,
	resizable: true,
	saveWidth: true,
	sticky: false,
	storageName: 'v-resize-drawer-width',
	storageType: 'local',
	tag: 'nav',
	temporary: false,
	theme: 'dark',
	touchless: false,
	width: undefined,
});
const gridDrawer = ref(false);
const gridDrawerOptions = ref({
	absolute: false,
	color: '',
	elevation: 0,
	location: 'right',
	maxWidth: '100%',
	minWidth: '256px',
	saveWidth: false,
	temporary: true,
	widthSnapBack: true,
});
const gridDrawerWidth = ref('256px');
const computedWidth = ref(gridDrawerWidth.value);

const codeBlockPlugin = 'prismjs';
const codeBlockLightTheme = 'tomorrow';
const codeBlockDarkTheme = 'tomorrow';

const codeBlockSettings = ref({
	plugin: codeBlockPlugin,
	theme: codeBlockDarkTheme,
});

function updateCodeBlockTheme(val) {
	codeBlockSettings.value.theme = codeBlockLightTheme;

	if (val === 'dark') {
		codeBlockSettings.value.theme = codeBlockDarkTheme;
	}

	drawerOptions.value.theme = val;
	drawerOptions.value.dark = val === 'dark';
}

provide('drawerOptions', drawerOptions);
provide('links', store.links);

const mainStyles = computed(() => {
	const { mobile } = useDisplay();
	let styles = '';
	let paddingValue = drawerOffset.value;

	if (mobile.value || !drawer.value) {
		paddingValue = '0';
	}

	styles += `padding-${drawerOptions.value.location}: ${paddingValue} !important;`;

	return styles;
});

function drawerClose(val) {
	eventTriggered('drawerClose', val);

	drawer.value = false;
}

function drawerInput(val) {
	eventTriggered('drawerInput', val);

	if (val) {
		getLocalStorage();
		return false;
	}

	drawerOffset.value = 0;
	return false;
}

function eventTriggered(eventName, eventValue = null) {
	return { eventName, eventValue };
}

function getLocalStorage() {
	updateDrawerOffset(localStorage.getItem(drawerOptions.value.storageName) || drawerOffset.value);
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

function updateDrawerOffset(val) {
	drawerOffset.value = val;
}

function updateOptions(options) {
	drawerOptions.value = options;
}

function gridHandleDrag(evt) {
	computedWidth.value = evt.width;
}

function gridHandleDoubleClick(evt) {
	computedWidth.value = evt.width;
}
</script>

<style lang="scss">
html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}
}

.v-heading {
	position: relative;

	> a {
		color: rgb(var(--v-theme-primary));
		display: inline-block;
		inset: 0;
		margin: 0 -0.7em;
		position: absolute;

		&:not(:hover):not(:focus) {
			opacity: 0;
		}
	}
}

.name-item:not(:hover):not(:focus) span {
	opacity: 0;
}

.v-divider {
	margin: 0;
}
</style>
