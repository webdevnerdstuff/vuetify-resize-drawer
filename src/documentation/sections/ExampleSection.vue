<template>
	<v-row>
		<v-col
			id="example"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#example"
				>#</a>
				Example
			</h2>
		</v-col>

		<v-col cols="12">
			<CodeBlock
				:code="codeTemplate"
				:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
				lang="html"
				:prismjs="codeBlockSettings.plugin === 'prismjs'"
				:theme="codeBlockSettings.theme"
			>
			</CodeBlock>
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

const codeTemplate = `<template>
  <v-app>
    <VResizeDrawer
      v-model="drawer"
      max-width="50%"
      min-width="256px"
      :saveWidth="true"
      width="256px"
      @close="drawerClose"
      @handle:click="handleClick"
      @handle:dblclick="handleDoubleClick"
      @handle:drag="handleDrag"
      @handle:mousedown="handleMousedown"
      @handle:mouseup="handleMouseup"
      @input="drawerInput"
      @transitionend="drawerTransitionend"
    >
    <\/VResizeDrawer>
  <\/v-app>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(true);

function drawerClose(val) {
  // do something awesome...
}

function drawerInput(val) {
  // do something awesome...
}

function drawerTransitionend(evt) {
  // do something awesome...
}

function handleClick(evt) {
  // do something awesome...
}

function handleDoubleClick(evt) {
  // do something awesome...
}

function handleDrag(evt) {
  // do something awesome...
}

function handleMousedown(evt) {
  // do something awesome...
}

function handleMouseup(evt) {
  // do something awesome...
}
<\/script>`;

</script>
