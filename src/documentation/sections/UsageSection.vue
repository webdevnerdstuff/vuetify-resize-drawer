<template>
	<v-row>
		<v-col
			id="usage"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#usage"
				>#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<CodeBlock
						:code="usageExample"
						:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
						lang="javascript"
						:prismjs="codeBlockSettings.plugin === 'prismjs'"
						:theme="codeBlockSettings.theme"
					>
					</CodeBlock>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup>
import { computed, inject } from 'vue';


const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const classes = inject('classes');

const usageExample = `import { createApp } from 'vue';
import App from './App.vue';
import VResizeDrawer from '@wdns/vuetify-resize-drawer';

const app = createApp(App);

app.component('VResizeDrawer', VResizeDrawer);

app.mount('#app');`;
</script>
