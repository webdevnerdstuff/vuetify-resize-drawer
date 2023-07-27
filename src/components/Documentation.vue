<template>
	<v-container class="px-10">
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					class="my-3"
					contain
					height="200"
					src="images/vuetify-logo-light-atom.svg"
				/>
			</v-col>

			<v-col class="mb-4">
				<h1 class="v-heading text-h3 text-sm-h3 mb-4">Vuetify Resize Drawer</h1>
				<v-chip
					color="primary"
					outlined
					small
				>
					v{{ componentVersion }}
				</v-chip>
			</v-col>
		</v-row>

		<!-- Installation -->
		<v-row id="installation">
			<v-col
				class="mb-5"
				cols="12"
			>
				<h2 :class="classes.h2">
					<a
						:class="classes.headerA"
						href="#installation"
					>#</a>
					Installation
				</h2>

				<v-row>
					<v-col cols="12">
						Using <a
							:href="links.pnpm"
							target="_blank"
						>pnpm</a>:
						<vue-code-highlight language="bash">
							<pre>pnpm add vuetify-resize-drawer</pre>
						</vue-code-highlight>
					</v-col>
					<v-col cols="12">
						Using npm:
						<vue-code-highlight language="bash">
							<pre>npm i vuetify-resize-drawer</pre>
						</vue-code-highlight>
					</v-col>
				</v-row>
			</v-col>
		</v-row>

		<!-- Description -->
		<Description
			:classes="classes"
			:drawerOptions="drawerOptions"
			:links="links"
		/>

		<!-- Usage -->
		<Usage
			:classes="classes"
			:drawerOptions="drawerOptions"
			:links="links"
		/>

		<!-- Props -->
		<Props
			:classes="classes"
			:drawerOptions="drawerOptions"
			:links="links"
		/>

		<!-- Events -->
		<Events :classes="classes" />

		<!-- Slots -->
		<Slots :classes="classes" />

		<!-- SASS Variables -->
		<SassVariables
			:classes="classes"
			:links="links"
		/>

		<!-- Example -->
		<Example :classes="classes" />

		<!-- Dependencies -->
		<Dependencies
			:classes="classes"
			:links="links"
		/>

		<!-- License -->
		<License
			:classes="classes"
			:links="links"
		/>

		<!-- Legal -->
		<Legal :classes="classes" />
	</v-container>
</template>

<script>
import Dependencies from '@documentation/Dependencies.vue';
import Description from '@documentation/Description.vue';
import Events from '@documentation/Events.vue';
import Example from '@documentation/Example.vue';
import Legal from '@documentation/Legal.vue';
import License from '@documentation/License.vue';
import Props from '@documentation/Props.vue';
import SassVariables from '@documentation/SassVariables.vue';
import Slots from '@documentation/Slots.vue';
import Usage from '@documentation/Usage.vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';
import packageInfo from '../../package.json';

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
		links: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		classes: {
			appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
			h2: 'v-heading text-h4 text-sm-h4 mb-3',
			h3: 'v-heading text-h5 text-sm-h5 mb-1',
			headerA: 'text-decoration-none text-right text-md-left',
		},
		componentVersion: packageInfo.version,
		drawerOffset: '256px',
	}),
};
</script>
