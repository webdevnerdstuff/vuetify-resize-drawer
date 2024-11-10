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
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				:code="usageGlobalPlugin"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
				<template #label>
					Global Plugin Registration
					<br>
					<i>Global options have a higher precedence and will override local props</i>
				</template>
			</VCodeBlock>
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				:code="usageGlobalComponent"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Global Component Registration"
				lang="javascript"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>

		<v-col cols="12">
			<VCodeBlock
				:code="usageIndividual"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				label="Local Registration"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			/>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;

const usageGlobalPlugin = `import { createApp } from 'vue';
import App from './App.vue';
import { createVResizeDrawer } from '@wdns/vuetify-resize-drawer';

const app = createApp(App);

app.use(createVResizeDrawer({
  // options
}));

app.mount('#app');`;

const usageGlobalComponent = `import { createApp } from 'vue';
import App from './App.vue';
import { VResizeDrawer } from  '@wdns/vuetify-resize-drawer';

const app = createApp(App);

app.component('VResizeDrawer', VResizeDrawer);

app.mount('#app');`;

const usageIndividual = `<template>
  <VResizeDrawer
    v-model="open"
  />
</template>

\<script setup\>
  import VResizeDrawer from  '@wdns/vuetify-resize-drawer';

  const open = ref(true);
\</script\>`;
</script>
