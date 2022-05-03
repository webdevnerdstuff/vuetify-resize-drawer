<template>
	<v-container class="px-10">
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					src="images/vuetify-logo-dark.svg"
					class="my-3"
					contain
					height="200"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="v-heading text-h3 text-sm-h3 mb-4">Vuetify Resize Drawer</h1>
			</v-col>
		</v-row>

		<!-- Installation -->
		<v-row id="installation">
			<v-col class="mb-5" cols="12">
				<h2 :class="classes.h2">Installation</h2>

				<v-row>
					<v-col cols="12">
						<vue-code-highlight language="js">
							<vue-code-highlight language="shell">
								<pre>npm i vuetify-resize-drawer</pre>
							</vue-code-highlight>
						</vue-code-highlight>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- TBD -->
		<v-row>
			<v-col class="mb-5" cols="12" id="description">
				<h2 :class="classes.h2">Description</h2>

				<v-row>
					<v-col cols="12">
						<p>
							The <code>vuetify-resize-drawer</code> component extends the
							functionality of the
							<a
								href="https://vuetifyjs.com/en/components/navigation-drawers/"
								target="_blank"
								>v-navigation-drawer</a
							>
							so that it is resizable by the user.
						</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<v-row>
			<v-col class="mb-5" cols="12" id="Usage">
				<h2 :class="classes.h2">Usage</h2>

				<v-row>
					<v-col cols="12">
						<p>
							The <code>vuetify-resize-drawer</code> component usage is mostly
							the same as the
							<a
								href="https://vuetifyjs.com/en/components/navigation-drawers/"
								target="_blank"
								>v-navigation-drawer</a
							>. It can also be used as a component in its own right for things
							such as a settings panel or to display data.
						</p>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- Props -->
		<Props :drawerOptions="drawerOptions" :classes="classes" />

		<!-- Events -->
		<Events :classes="classes" />

		<!-- Slots -->
		<Slots :classes="classes" />

		<!-- Examples -->
		<Examples :classes="classes" />

		<!-- Dependencies -->
		<v-row>
			<v-col class="mb-5" cols="12" id="dependencies">
				<h2 :class="classes.h2">Dependencies</h2>

				<v-row>
					<v-col cols="12">
						<a :href="links.vuetify2" target="_blank">Vuetify v2</a>
						<br />
						<a :href="links.vue2" target="_blank">Vue 2</a>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- Change Log -->
		<v-row>
			<v-col class="mb-5" cols="12" id="change-log">
				<h2 :class="classes.h2">Change Log</h2>

				<v-row>
					<v-col cols="12">
						Component changes for each release are documented in the
						<a
							href="https://github.com/webdevnerdstuff/vuetify-resize-drawer/blob/master/CHANGELOG.md"
							>Change Log</a
						>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- License -->
		<v-row>
			<v-col class="mb-5" cols="12" id="license">
				<h2 :class="classes.h2">License</h2>

				<v-row>
					<v-col cols="12">
						Copyright &copy; {{ new Date().getFullYear() }} WebDevNerdStuff
						<br />
						Licensed under the
						<a
							href="https://github.com/webdevnerdstuff/vuetify-resize-drawer/blob/master/LICENSE.md"
							>MIT License</a
						>.
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import Events from '@components/documentation/Events.vue';
import Examples from '@components/documentation/Examples.vue';
import Props from '@components/documentation/Props.vue';
import Slots from '@components/documentation/Slots.vue';

export default {
	name: 'Documentation',
	components: {
		Events,
		Examples,
		Props,
		Slots,
		VueCodeHighlight,
	},
	props: {
		drawerOptions: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		drawerOffset: '256px',
		links: {
			vue2: 'https://v2.vuejs.org/',
			vuetify2: 'https://vuetifyjs.com/en/',
			github: '',
			npm: '',
		},
		classes: {
			h2: 'v-heading text-h4 text-sm-h4 mb-3',
		},
	}),
	created() {

	},
};
</script>

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';
@import 'vue-code-highlight/themes/window.css';
</style>
