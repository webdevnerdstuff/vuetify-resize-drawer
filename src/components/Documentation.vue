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
				<h2 :class="classes.h2">
					<a href="#installation" :class="classes.headerA">#</a>
					Installation
				</h2>

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

		<!-- Description -->
		<Description :drawerOptions="drawerOptions" :classes="classes" />

		<!-- Usage -->
		<Usage :drawerOptions="drawerOptions" :classes="classes" />

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
				<h2 :class="classes.h2">
					<a href="#dependencies" :class="classes.headerA">#</a>
					Dependencies
				</h2>

				<v-row>
					<v-col cols="12">
						<a :href="links.vuetify2" target="_blank">Vuetify v2</a>
						<br />
						<a :href="links.vue2" target="_blank">Vue 2</a>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- License -->
		<v-row>
			<v-col class="mb-5" cols="12" id="license">
				<h2 :class="classes.h2">
					<a href="#license" :class="classes.headerA">#</a>
					License
				</h2>

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
import Description from '@components/documentation/Description.vue';
import Events from '@components/documentation/Events.vue';
import Examples from '@components/documentation/Examples.vue';
import Props from '@components/documentation/Props.vue';
import Slots from '@components/documentation/Slots.vue';
import Usage from '@components/documentation/Usage.vue';

export default {
	name: 'Documentation',
	components: {
		Description,
		Events,
		Examples,
		Props,
		Slots,
		Usage,
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
			h3: 'v-heading text-h5 text-sm-h5 mb-1',
			headerA: 'text-decoration-none text-right text-md-left',
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
