<template>
	<v-row>
		<v-col
			id="playground"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#playground"
				>#</a>
				Developer Playground
			</h2>

			<p class="mb-4">
				In order to gain a comprehensive understanding of utilizing this component, we recommend utilizing the
				developer Playground. The Playground serves as a complete exemplification of how to effectively employ this
				component, equipped with most of the available properties. It serves as a comprehensive model that can serve as
				an ideal launching pad for your own project. You have the flexibility to customize the settings and observe
				their direct impact on the table.
			</p>

			<h3 class="mb-2 text-secondary">Setup the Playground</h3>

			<CodeBlock
				class="mb-6"
				code="git clone git@github.com:webdevnerdstuff/vuetify-resize-drawer.git"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					First clone the <a
						:href="store.links.github"
						target="blank"
					>repository:</a>
				</template>
			</CodeBlock>

			<CodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Next run the following command to setup the Playground:
				</template>
			</CodeBlock>
		</v-col>

		<v-col cols="12">
			This will create a file for you to adjust and play with.
			<br />
			<code class="ic">/src/playground/PlaygroundPage.vue</code>
		</v-col>

		<v-col cols="12">
			<v-alert color="primary">
				Alternatively you can test out the component on the Vuetify Playground
				<v-btn
					class="ms-1 me-1"
					:href="links.vuetifyPlayground"
					target="blank"
					variant="outlined"
				>Drawer Example</v-btn>

				<v-btn
					class="ms-1"
					:href="links.vuetifyPlaygroundGrid"
					target="blank"
					variant="outlined"
				>Grid System Example</v-btn>
			</v-alert>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});


const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');
const links = inject('links');
const store = useCoreStore();
</script>
