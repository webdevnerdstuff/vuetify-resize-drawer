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
				<h2 class="v-heading text-h4 text-sm-h4 mb-3">Installation</h2>

				<v-row>
					<v-col cols="12">
						<vue-code-highlight language="js">
							<vue-code-highlight language="shell">
								<pre>
npm i vuetify-resize-drawer
						</pre
								>
							</vue-code-highlight>
						</vue-code-highlight>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- TBD -->
		<v-row>
			<v-col class="mb-5" cols="12" id="section-a">
				<h2 class="v-heading text-h4 text-sm-h4 mb-3">Section A</h2>

				<v-row>
					<v-col cols="12"> Stuff </v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- Props -->
		<Props />

		<!-- Events -->
		<Events />

		<!-- Slots -->
		<Slots />

		<!-- Dependencies -->
		<v-row>
			<v-col class="mb-5" cols="12" id="dependencies">
				<h2 class="v-heading text-h4 text-sm-h4 mb-3">Dependencies</h2>

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
				<h2 class="v-heading text-h4 text-sm-h4 mb-3">Change Log</h2>

				<v-row>
					<v-col cols="12"> Stuff </v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- License -->
		<v-row>
			<v-col class="mb-5" cols="12" id="license">
				<h2 class="v-heading text-h4 text-sm-h4 mb-3">License</h2>

				<v-row>
					<v-col cols="12"> Stuff </v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import Events from '@components/documentation/Events.vue';
import Props from '@components/documentation/Props.vue';
import Slots from '@components/documentation/Slots.vue';

export default {
	name: 'Documentation',
	components: {
		Events,
		Props,
		Slots,
		VueCodeHighlight,
	},
	props: {
		drawerOptions: {
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
	}),
	created() {

	},
};
</script>

<style lang="scss">
@import 'vue-code-highlight/themes/prism-tomorrow.css';
@import 'vue-code-highlight/themes/window.css';
</style>
