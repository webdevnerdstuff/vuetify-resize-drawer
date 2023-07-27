<template>
	<v-row>
		<v-col
			id="usage"
			class="mb-5"
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
					<vue-code-highlight language="javascript">
						<pre>// main.js
import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import VResizeDrawer from 'vuetify-resize-drawer';

Vue.component('VResizeDrawer', VResizeDrawer);

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');</pre>
					</vue-code-highlight>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
	name: 'Usage',
	components: {
		VueCodeHighlight,
	},
	props: {
		classes: {
			type: Object,
			required: true,
		},
		links: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss">
</style>
