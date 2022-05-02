<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<!--  -->
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

			<v-toolbar-title>Application</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<!--  -->
		</v-main>

		<!-- <ResizeDrawer name="foobar" :options="drawerOptions" /> -->
	</v-app>
</template>

<script>
// import Nav from '@components/Nav.vue';
// import ResizeDrawer from '@components/ResizeDrawer.vue';
// import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
	name: 'UnicornLog',
	props: {},
	components: {
		// Nav,
		// ResizeDrawer,
		// VueCodeHighlight,
	},
	data: () => ({
		drawerOptions: {
			absolute: false,
			busName: '',
			app: false,
			bottom: false,
			fixed: true,
			handle: {
				background: {
					dark: '#555',
					light: '#ccc',
				},
				/*
				 * Positions of the resize handle
				 ? @value: 'top' 		- top of the drawer
				 ? @value: 'center' - center along border of the drawer
				 ? @value: 'border' - border of the drawer
				 ? @value: 'left' 	- border of the drawer
				 ? @value: 'right' 	- border of the drawer
				*/
				position: 'center',
			},
			icon: '',
			iconColor: '',
			open: false,
			overlayColor: '',
			overlayOpacity: '',
			paddingTop: '48px',
			position: 'right',
			overflow: true,
			resizable: true,
			saveWidth: true,
			showCloseIcon: true,
			src: '',
			storageName: '',
			tag: 'nav',
			temporary: true,
			title: '',
			width: '50%',
			widthDefault: '50%',
		},
		copy: {
			tbd: 'TBD',
		},
		options: {
			tbd: 'TBD',
		},
	}),
	mounted() {

	},
	methods: {

	},
};
</script>

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';
@import 'vue-code-highlight/themes/window.css';

html {
	scroll-padding-top: 70px;
}

h1 {
	font-weight: bold;
	font-size: 3em;
}

h2 {
}

.table {
	tbody {
		td {
			pre {
				background-color: #fafafa !important;
				border-radius: 5px;
				padding: 1rem;
				tab-size: 2;
			}
		}
	}
}

.option-type {
	color: hsl(282, 68%, 38%) !important;
	font-weight: 500;
}

.boolean-style {
	color: hsl(240, 100%, 50%) !important;
	font-weight: 500;
}
</style>
