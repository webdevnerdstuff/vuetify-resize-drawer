<template>
	<v-row class="text-center">
		<v-col cols="12">
			<v-img
				class="my-3"
				contain
				height="200"
				src="../assets/vuetify-logo.svg"
			/>
		</v-col>

		<v-col class="mb-4">
			<h1 class="v-heading text-h3 text-sm-h3 mb-4">
				Vuetify 3 Resize Drawer
			</h1>
			<v-chip
				color="primary"
				size="small"
				variant="outlined"
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
					<CodeBlock
						code="pnpm add @wdns/vuetify-resize-drawer"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						lang="plain"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
						<template #label>
							Using <a
								:href="links.pnpm"
								target="_blank"
							>pnpm</a>:
						</template>
					</CodeBlock>
				</v-col>
				<v-col cols="12">
					<CodeBlock
						code="npm i @wdns/vuetify-resize-drawer"
						highlightjs
						lang="plain"
					>
						<template #label>Using npm:</template>
					</CodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>

	<!-- Description -->
	<DescriptionSection
		:classes="classes"
		:drawerOptions="drawerOptions"
		:links="links"
	/>

	<!-- Usage -->
	<UsageSection :codeBlockOptions="codeBlockOptions" />

	<!-- Props -->
	<PropsSection @updateOptions="updatedOptions" />

	<!-- Grid -->
	<GridSection @toggle-grid-drawer="toggleGridDrawer" />

	<!-- Events -->
	<EventsSection :codeBlockOptions="codeBlockOptions" />

	<!-- Slots -->
	<SlotsSection />

	<!-- SASS Variables -->
	<SassVariablesSection />

	<!-- Example -->
	<ExampleSection :codeBlockOptions="codeBlockOptions" />

	<!-- Playground -->
	<PlaygroundSection :codeBlockOptions="codeBlockOptions" />

	<!-- Dependencies -->
	<DependenciesSection />

	<!-- License -->
	<LicenseSection />

	<!-- Legal -->
	<LegalSection />
</template>

<script setup>
import { computed, inject, provide, reactive, ref } from 'vue';
import packageInfo from '../../package.json';
import {
	DependenciesSection,
	DescriptionSection,
	EventsSection,
	ExampleSection,
	GridSection,
	LegalSection,
	LicenseSection,
	PlaygroundSection,
	PropsSection,
	SassVariablesSection,
	SlotsSection,
	UsageSection,
} from '@/documentation/sections';

const emit = defineEmits([
	'toggleGridDrawer',
	'updateOptions',
]);

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const links = inject('links');
const classes = reactive({
	appLink: 'app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold',
	h2: 'text-primary v-heading text-h4 text-sm-h4 mb-2',
	h3: 'text-blue-darken-2 v-heading text-h5 text-sm-h5 mb-0',
	headerA: 'text-decoration-none text-right text-md-left d-none d-sm-flex',
});
const componentVersion = ref(packageInfo.version);

const drawerOptions = inject('drawerOptions');
provide('classes', classes);


function updatedOptions(event) {
	emit('updateOptions', event);
}

function toggleGridDrawer() {
	emit('toggleGridDrawer');
}
</script>

<style lang="scss">
:deep(code) {
	&.ic {
		background-color: rgba(255, 255, 255, 0.1) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}

code {
	&.ic {
		background-color: rgba(255, 255, 255, 0.1) !important;
		border-radius: 3px;
		font-size: 85%;
		font-weight: normal;
		padding: 0.2em 0.4em;
	}
}

.v-theme--light {
	code {
		&.ic {
			background-color: rgba(0, 0, 0, 0.1) !important;
		}
	}
}
</style>
