<template>
	<v-app id="home">
		<!-- ====================================================== App Bar -->
		<v-app-bar app class="top-app-bar" color="primary" dark dense fixed>
			<v-app-bar-nav-icon
				app
				class="nav-drawer-btn mr-2"
				height="32"
				width="32"
				@click.stop="
					drawerOptions.open = !drawerOptions.open;
					drawer = !drawer;
				"
				clipped-left
				clipped-right
			>
				<v-icon>mdi-menu</v-icon>
			</v-app-bar-nav-icon>

			<div class="site-title">Vuetify Resize Drawer</div>

			<v-spacer></v-spacer>
		</v-app-bar>

		<!-- ====================================================== Navigation Drawer -->
		<v-navigation-drawer
			clipped
			v-model="drawer"
			right
			fixed
			:style="`padding-top: ${drawerOptions.paddingTop}`"
		>
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="text-h6">Default Drawer</v-list-item-title>
					<v-list-item-subtitle>
						Stuck in the middle with you
					</v-list-item-subtitle>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<Menu />
		</v-navigation-drawer>

		<!-- @update="logEvent($event, 'update')" -->
		<ResizeDrawer
			name="ResizeDrawer"
			clipped
			:options="drawerOptions"
			@close="drawerClose"
			@handle:click="logEvent($event, 'handle:click')"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="logEvent($event, 'handle:mousedown')"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			<template #handle>
				<div>&raquo;</div>
			</template>

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

			<Menu />

			<template #append>
				<v-footer fixed color="primary" dark> Footer Prop </v-footer>
			</template>
		</ResizeDrawer>

		<!-- ====================================================== Main Container -->
		<v-main
			:class="[
				{
					'drawer-open': drawer || drawerOptions.open,
				},
			]"
			:style="mainStyles"
		>
			<Documentation :drawerOptions="drawerOptions" />
		</v-main>
	</v-app>
</template>

<script>
import Documentation from './components/Documentation.vue';
import Menu from './components/Menu.vue';
import ResizeDrawer from './components/ResizeDrawer.vue';

export default {
	name: 'App',
	components: {
		Documentation,
		Menu,
		ResizeDrawer,
	},
	computed: {
		mainStyles() {
			const options = this.drawerOptions;
			let styles = '';

			styles += `padding-left: ${this.drawerOffset} !important;`;
			styles += `padding-right: ${options.open ? '256px' : '0'} !important;`;

			return styles;
		},
	},
	data: () => ({
		drawer: true,
		drawerOptions: {
			absolute: false,
			bottom: true,
			fixed: true,
			handle: {
				background: {
					dark: '#555',
					light: '#ccc',
				},
				position: 'center',
			},
			icon: '',
			iconColor: '',
			open: true,
			overlayColor: '',
			overlayOpacity: '',
			paddingTop: '48px',
			position: 'left',
			temporary: false,
			src: '',
			storageName: 'resize-drawer',
			tag: 'nav',
			title: '',
			width: '256px',
			widthDefault: '256px',
			// mini: true,
		},
		drawerOffset: '256px',
	}),
	created() {

	},
	mounted() {
		this.getLocalStorage();
	},
	methods: {
		getLocalStorage(name = this.drawerOptions.storageName) {
			this.drawerOffset = localStorage.getItem(`vrd-${name}`) || this.drawerOffset;
		},
		logEvent(el, name) {
			console.log('----------------------------------- logEvent', { name, el });
		},
		drawerClose(val) {
			console.log('----------------------------------- drawerClose', { val });
			this.drawerOptions.open = false;
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
			this.drawerOffset = evt.offsetWidth;
		},
		handleMouseup(evt) {
			console.log('----------------------------------- handleMouseup', { evt });
			this.drawerOffset = evt.offsetWidth;
		},
		handleDrag(evt) {
			this.drawerOffset = evt.offsetWidth;
		},
	},
};
</script>

<style lang="scss" scoped>
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

.v-divider {
	margin: 0;
}

.drawer-open {
	&.mini {
		margin-left: 56px !important;
	}
}
</style>
