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

			<VCodeBlock
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
			</VCodeBlock>

			<VCodeBlock
				code="pnpm i && pnpm play"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="plain"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Next run the following command to setup the Playground:
				</template>
			</VCodeBlock>
		</v-col>

		<v-col cols="12">
			This will create a file for you to adjust and play with.
			<br />
			<code class="ic">/src/playground/PlaygroundPage.vue</code>
		</v-col>

		<v-col cols="12">
			<v-alert color="primary">
				Alternatively you can test out the component on StackBlitz
				<v-btn
					class="ms-1 me-1"
					:href="links.demo"
					target="_blank"
					variant="outlined"
				>Drawer Example</v-btn>

				<v-btn
					class="ms-1"
					:href="links.demoGrid"
					target="_blank"
					variant="outlined"
				>Grid System
					Example</v-btn>
			</v-alert>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { useCoreStore } from '@/stores/index';


const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;
const links = inject<Docs.Links>('links')!;
const store = useCoreStore();
</script>
