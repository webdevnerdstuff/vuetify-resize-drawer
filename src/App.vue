<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<v-app-bar
			app
			class="top-app-bar"
			color="primary"
			dark
			dense
			fixed
			clipped-left
			clipped-right
		>
			<v-app-bar-nav-icon
				class="nav-drawer-btn mr-2"
				height="32"
				width="32"
				@click.stop="drawer = !drawer"
			>
				<v-icon>mdi-menu</v-icon>
			</v-app-bar-nav-icon>

			<div class="site-title">Vuetify Resize Drawer</div>

			<v-spacer></v-spacer>

			<v-btn :href="links.github" class="mr-2" icon small>
				<v-icon>mdi-github</v-icon>
			</v-btn>

			<v-btn :href="links.npm" class="mr-2" icon small target="_blank">
				<v-icon>mdi-npm</v-icon>
			</v-btn>

			<v-btn class="mr-1" icon small @click="toggleDark">
				<v-icon v-if="!dark">mdi-weather-sunny</v-icon>
				<v-icon v-else>mdi-weather-night</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			clipped
			fixed
			:right="!drawerOptions.right"
			:color="drawerOptions.color"
			:mini-variant="drawerOptions.miniVariant"
			:expand-on-hover="drawerOptions.expandOnHover"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">Default Drawer</v-list-item-title>
					<v-list-item-subtitle>Stuck With You</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<Menu :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<v-resize-drawer
			v-model="drawer"
			name="ResizeDrawer"
			clipped
			fixed
			:mini-variant="drawerOptions.miniVariant"
			:expand-on-hover="drawerOptions.expandOnHover"
			:color="drawerOptions.color"
			:dark="drawerOptions.dark"
			:handlePosition="drawerOptions.handlePosition"
			:light="drawerOptions.light"
			:options="drawerOptions"
			:resizable="drawerOptions.resizable"
			:right="drawerOptions.right"
			:saveWidth="drawerOptions.saveWidth"
			:storageName="drawerOptions.storageName"
			@close="drawerClose"
			@handle:click="handleClick"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="handleMousedown"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			<header>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title class="text-h6">
							Resize Drawer
						</v-list-item-title>
						<v-list-item-subtitle>
							I'm as free as a bird now
						</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>

				<v-divider></v-divider>
			</header>

			<Menu :drawerOptions="drawerOptions" />
		</v-resize-drawer>

		<!-- ====================================================== Main Container -->
		<v-main
			:class="[
				{
					'drawer-open': drawer,
				},
			]"
			:style="mainStyles"
		>
			<Documentation :drawerOptions="drawerOptions" />
		</v-main>
	</v-app>
</template>

<script>
import Vue from 'vue';
import Documentation from './components/Documentation.vue';
import Menu from './components/Menu.vue';
import VResizeDrawer from './components/VResizeDrawer.vue';

const EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
	$bus: {
		get() {
			return EventBus;
		},
	},
});

export default {
	name: 'App',
	components: {
		Documentation,
		Menu,
		VResizeDrawer,
	},
	computed: {
		mainStyles() {
			let styles = '';

			if (this.$vuetify.breakpoint.mobile) {
				styles += 'padding-left: 0 !important;';
				styles += 'padding-right: 0 !important;';
			}

			return styles;
		},
	},
	data: () => ({
		dark: false,
		drawer: true,
		drawerOptions: {
			width: '256px',
			// Should be good / Updated //
			color: undefined,
			light: false,
			// Updated //
			dark: false,
			handlePosition: 'center',
			miniVariant: true,
			expandOnHover: true,
			overlayColor: '#f00',
			overlayOpacity: '100%',
			resizable: true,
			right: false,
			saveWidth: true,
			storageName: 'vuetify-resize-drawer',
		},
		drawerOffset: '256px',
		links: {
			github: 'https://github.com/webdevnerdstuff/vuetify-resize-drawer',
			npm: 'https://www.npmjs.com/package/vuetify-resize-drawer',
		},
		unicornLog: {
			styles: [
				'background: black',
				'color: magenta',
				'padding: 5px',
			],
			prefix: '[App.vue]',
		},
		mainContainerEl: null,
	}),
	created() {
		this.$bus.$on('updateOptions', (options) => {
			this.$unicornLog({
				text: 'updateOptions',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				objects: options,
			});

			this.drawerOptions = options;
		});
	},
	mounted() {
		this.getLocalStorage();
		this.getDarkLocalStorage();
	},
	methods: {
		toggleDark() {
			this.dark = !this.dark;
			this.$vuetify.theme.dark = this.dark;
			this.setDarkLocalStorage(this.dark);
		},

		drawerClose(val) {
			this.$unicornLog({
				text: `drawerClose: ${val}`,
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
			});

			this.drawer = false;
		},
		drawerInput(val) {
			this.$unicornLog({
				text: `drawerInput: ${val}`,
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
			});

			if (val) {
				this.getLocalStorage();
				return false;
			}

			this.drawerOffset = 0;
			return false;
		},
		drawerTransitionend(evt) {
			this.$unicornLog({
				text: 'drawerTransitionend',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				object: evt,
			});
		},
		handleClick(evt) {
			this.$unicornLog({
				text: 'handleClick',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				object: evt,
			});
		},
		handleDoubleClick(evt) {
			this.$unicornLog({
				text: 'handleDoubleClick',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				object: evt,
			});

			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleMousedown(evt) {
			this.$unicornLog({
				text: 'handleMousedown',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				object: evt,
			});
		},
		handleMouseup(evt) {
			this.$unicornLog({
				text: 'handleMouseup',
				styles: this.unicornLog.styles,
				logPrefix: this.unicornLog.prefix,
				object: evt,
			});

			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleDrag(evt) {
			this.updateDrawerOffset(evt.offsetWidth);
		},
		getLocalStorage() {
			this.updateDrawerOffset(localStorage.getItem(this.drawerOptions.storageName) || this.drawerOffset);
		},
		getDarkLocalStorage() {
			const isDark = localStorage.getItem('vuetify-resize-drawer-dark');

			this.dark = isDark === 'true';
			this.$vuetify.theme.dark = this.dark;
		},
		setDarkLocalStorage(val) {
			localStorage.setItem('vuetify-resize-drawer-dark', val);
		},
		updateDrawerOffset(val) {
			this.drawerOffset = val;
		},
	},
};
</script>

<style lang="scss">
@import 'prism-themes/themes/prism-night-owl.css';
@import 'vue-code-highlight/themes/window.css';

html {
	scroll-behavior: smooth;
	scroll-padding-top: 70px;
}

.top-app-bar {
	z-index: 99 !important;

	.nav-drawer-btn {
		margin-left: -4px !important;

		.nav-drawer-icon {
			height: 18px;
			width: 18px;
		}
	}

	.site-title {
		font-family: 'Roboto', sans-serif !important;
	}
}

.v-heading {
	position: relative;

	> a {
		bottom: 0;
		display: inline-block;
		left: 0;
		margin: 0 -0.7em;
		position: absolute;
		right: 0;
		top: 0;

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

.drawer-open {
	&.mini {
		margin-left: 56px !important;
	}
}
</style>
