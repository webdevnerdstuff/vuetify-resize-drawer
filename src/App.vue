<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<v-app-bar app class="top-app-bar" color="primary" dark dense fixed>
			<v-app-bar-nav-icon
				app
				class="nav-drawer-btn mr-2"
				clipped-left
				clipped-right
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
			right
			:color="drawerOptions.color"
			:style="`padding-top: ${drawerOptions.paddingTop}px`"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">Default Drawer</v-list-item-title>
					<v-list-item-subtitle> Stuck With You </v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<Menu :drawerOptions="drawerOptions" />

			<template #append>
				<v-footer fixed color="primary" dark> Footer Prop </v-footer>
			</template>
		</v-navigation-drawer>

		<ResizeDrawer
			name="ResizeDrawer"
			clipped
			fixed
			:options="drawerOptions"
			:color="drawerOptions.color"
			:right="drawerOptions.right"
			:value="drawer"
			@close="drawerClose"
			@handle:click="logEvent($event, 'handle:click')"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="logEvent($event, 'handle:mousedown')"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			<template #prepend>
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
			</template>

			<Menu :drawerOptions="drawerOptions" />

			<template #append>
				<v-footer fixed color="primary" dark> Footer Prop </v-footer>
			</template>
		</ResizeDrawer>

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
import ResizeDrawer from './components/ResizeDrawer.vue';

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
		ResizeDrawer,
	},
	computed: {
		mainStyles() {
			let styles = '';
			let paddingLeftVal = this.drawerOffset;
			let paddingRightVal = this.drawer ? '256px' : '0';

			if (this.$vuetify.breakpoint.mobile) {
				paddingLeftVal = 0;
				paddingRightVal = 0;
			}

			styles += `padding-left: ${paddingLeftVal} !important;`;
			styles += `padding-right: ${paddingRightVal} !important;`;

			return styles;
		},
	},
	data: () => ({
		dark: false,
		drawer: true,
		drawerOptions: {
			color: undefined,
			handle: {
				background: {
					dark: '#555',
					light: '#ccc',
				},
			},
			handlePosition: 'center',
			overlayColor: '#f00',
			overlayOpacity: '100%',
			paddingTop: 48,
			right: false,
			saveWidth: true,
			storageName: 'vuetify-resize-drawer',
			width: '256px',
			widthDefault: '256px',
			// Used for examples //
			showCloseIcon: false,
			resizable: true,
		},
		drawerOffset: '256px',
		links: {
			github: 'https://github.com/webdevnerdstuff/vuetify-resize-drawer',
			npm: 'https://www.npmjs.com/package/vuetify-resize-drawer',
		},
		mainContainerEl: null,
	}),
	created() {
		this.$bus.$on('updateOptions', (options) => {
			console.log({ options });
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

		logEvent(el, name) {
			console.log('----------------------------------- logEvent', { name, el });
		},
		drawerClose(val) {
			console.log('----------------------------------- drawerClose', { val });
			this.drawer = false;
		},
		drawerInput(val) {
			console.log('----------------------------------- drawerInput', { val });

			if (val) {
				this.getLocalStorage();
				return false;
			}

			this.drawerOffset = 0;
			return false;
		},
		drawerTransitionend(evt) {
			console.log('----------------------------------- drawerTransitionend', { evt });
		},
		handleDoubleClick(evt) {
			console.log('----------------------------------- handleDoubleClick', { evt });
			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleMouseup(evt) {
			console.log('----------------------------------- handleMouseup', { evt });
			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleDrag(evt) {
			this.updateDrawerOffset(evt.offsetWidth);
		},
		getLocalStorage(name = this.drawerOptions.storageName) {
			this.updateDrawerOffset(localStorage.getItem(`vrd-${name}`) || this.drawerOffset);
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
