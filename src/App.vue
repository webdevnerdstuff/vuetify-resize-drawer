<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<v-app-bar
			app
			class="top-app-bar"
			clipped-left
			clipped-right
			color="primary"
			dark
			dense
			fixed
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

			<v-btn
				class="mr-2"
				:href="links.repo"
				icon
				small
				target="_blank"
			>
				<v-icon>mdi-github</v-icon>
			</v-btn>

			<v-btn
				class="mr-2"
				:href="links.npm"
				icon
				small
				target="_blank"
			>
				<v-icon>mdi-npm</v-icon>
			</v-btn>

			<v-btn
				class="mr-1"
				icon
				small
				@click="toggleDark"
			>
				<v-icon v-if="!dark">mdi-weather-sunny</v-icon>
				<v-icon v-else>mdi-weather-night</v-icon>
			</v-btn>
		</v-app-bar>

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			:color="drawerOptions.color"
			:expand-on-hover="drawerOptions.expandOnHover"
			fixed
			:mini-variant="drawerOptions.miniVariant"
			:mini-variant-width="drawerOptions.miniVariantWidth"
			:right="!drawerOptions.right"
			:stateless="drawerOptions.stateless"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">
						Navigation Drawer
					</v-list-item-title>
					<v-list-item-subtitle>Stuck With You</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<Menu :drawerOptions="drawerOptions" />
		</v-navigation-drawer>

		<VResizeDrawer
			v-model="drawer"
			app
			clipped
			:color="drawerOptions.color"
			:dark="drawerOptions.dark"
			:expand-on-hover="drawerOptions.expandOnHover"
			fixed
			:handle-color="drawerOptions.handleColor"
			:handle-position="drawerOptions.handlePosition"
			:light="drawerOptions.light"
			max-width="50%"
			min-width="256"
			:mini-variant="drawerOptions.miniVariant"
			:mini-variant-width="drawerOptions.miniVariantWidth"
			:overflow="drawerOptions.overflow"
			:resizable="drawerOptions.resizable"
			:right="drawerOptions.right"
			:save-width="drawerOptions.saveWidth"
			:stateless="drawerOptions.stateless"
			:storage-name="drawerOptions.storageName"
			:touchless="drawerOptions.touchless"
			:width="drawerOptions.width"
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

			<v-card
				class="overflow-content d-flex justify-center align-center"
				color="primary"
				dark
				elevation="10"
				min-width="300"
				width="300"
			>
				<v-card-title>Overflow Content</v-card-title>
			</v-card>
		</VResizeDrawer>

		<!-- ====================================================== Main Container -->
		<v-main
			:class="[
				{
					'drawer-open': drawer,
				},
			]"
			:style="mainStyles"
		>
			<Documentation
				:drawerOptions="drawerOptions"
				:links="links"
			/>
		</v-main>
	</v-app>
</template>

<script>
import Vue from 'vue';
import UnicornLog from 'vue-unicorn-log';
import Documentation from './components/Documentation.vue';
import Menu from './components/Menu.vue';

Vue.use(UnicornLog, { disabled: true });

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
		drawerOffset: '256px',
		drawerOptions: {
			color: undefined,
			dark: false,
			expandOnHover: false,
			handleColor: 'primary',
			handlePosition: 'center',
			light: false,
			miniVariant: false,
			miniVariantWidth: 56,
			overflow: false,
			resizable: true,
			right: false,
			saveWidth: true,
			stateless: false,
			storageName: 'v-resize-drawer-width',
			touchless: false,
			width: undefined,
		},
		links: {
			github: 'https://github.com/webdevnerdstuff',
			npm: 'https://www.npmjs.com/package/vuetify-resize-drawer',
			pnpm: 'https://pnpm.io/',
			repo: 'https://github.com/webdevnerdstuff/vuetify-resize-drawer',
			vue2: 'https://v2.vuejs.org',
			vuetify2: 'https://v2.vuetifyjs.com/en',
		},
		mainContainerEl: null,
		unicornLog: {
			prefix: '[App.vue]',
			styles: [
				'background: black',
				'color: magenta',
				'padding: 5px',
			],
		},
	}),
	created() {
		this.$bus.$on('updateOptions', (options) => {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				objects: options,
				styles: this.unicornLog.styles,
				text: 'updateOptions',
			});

			this.drawerOptions = options;
		});
	},
	mounted() {
		this.getLocalStorage();
		this.getDarkLocalStorage();
	},
	methods: {
		drawerClose(val) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				styles: this.unicornLog.styles,
				text: `drawerClose: ${val}`,
			});

			this.drawer = false;
		},
		drawerInput(val) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				styles: this.unicornLog.styles,
				text: `drawerInput: ${val}`,
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
				logPrefix: this.unicornLog.prefix,
				object: evt,
				styles: this.unicornLog.styles,
				text: 'drawerTransitionend',
			});
		},
		getDarkLocalStorage() {
			const isDark = localStorage.getItem('vuetify-resize-drawer-dark');

			this.dark = isDark === 'true';
			this.$vuetify.theme.dark = this.dark;
		},
		getLocalStorage() {
			this.updateDrawerOffset(localStorage.getItem(this.drawerOptions.storageName) || this.drawerOffset);
		},
		handleClick(evt) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				object: evt,
				styles: this.unicornLog.styles,
				text: 'handleClick',
			});
		},
		handleDoubleClick(evt) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				object: evt,
				styles: this.unicornLog.styles,
				text: 'handleDoubleClick',
			});

			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleDrag(evt) {
			this.updateDrawerOffset(evt.offsetWidth);
		},
		handleMousedown(evt) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				object: evt,
				styles: this.unicornLog.styles,
				text: 'handleMousedown',
			});
		},
		handleMouseup(evt) {
			this.$unicornLog({
				logPrefix: this.unicornLog.prefix,
				object: evt,
				styles: this.unicornLog.styles,
				text: 'handleMouseup',
			});

			this.updateDrawerOffset(evt.offsetWidth);
		},
		setDarkLocalStorage(val) {
			localStorage.setItem('vuetify-resize-drawer-dark', val);
		},
		toggleDark() {
			this.dark = !this.dark;
			this.$vuetify.theme.dark = this.dark;
			this.setDarkLocalStorage(this.dark);
		},
		updateDrawerOffset(val) {
			this.drawerOffset = val;
		},
	},
};
</script>

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';

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

code {
	&.language-bash,
	&.language-html,
	&.language-javascript,
	&.language-js {
		background-color: transparent !important;
	}
}

.overflow-content {
	right: -315px;
	position: fixed;
	top: 5px;
}

.v-navigation-drawer--right {
	.overflow-content {
		left: -315px;
		right: initial;
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
