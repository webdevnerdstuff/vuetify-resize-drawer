<template>
	<v-container class="px-10">
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					src="images/vuetify-logo-light-atom.svg"
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
						<vue-code-highlight language="bash">
							<pre>npm i vuetify-resize-drawer</pre>
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

		<!-- SASS Variables -->
		<SassVariables :classes="classes" />

		<!-- Example -->
		<Example :classes="classes" />

		<!-- Dependencies -->
		<Dependencies :classes="classes" :links="links" />

		<!-- License -->
		<License :classes="classes" />

		<!-- Legal -->
		<Legal :classes="classes" />
	</v-container>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';
import Dependencies from '@components/documentation/Dependencies.vue';
import Description from '@components/documentation/Description.vue';
import Events from '@components/documentation/Events.vue';
import Example from '@components/documentation/Example.vue';
import Legal from '@components/documentation/Legal.vue';
import License from '@components/documentation/License.vue';
import Props from '@components/documentation/Props.vue';
import SassVariables from '@components/documentation/SassVariables.vue';
import Slots from '@components/documentation/Slots.vue';
import Usage from '@components/documentation/Usage.vue';

export default {
	name: 'Documentation',
	components: {
		Dependencies,
		Description,
		Events,
		Example,
		Legal,
		License,
		Props,
		SassVariables,
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
			appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
		},
	}),
};
</script>
