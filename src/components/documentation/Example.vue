<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="example">
			<h2 :class="classes.h2">
				<a href="#example" :class="classes.headerA">#</a>
				Example
			</h2>

			<v-tabs v-model="tab" centered>
				<v-tab v-for="item in items" :key="item.tab">
					{{ item.tab }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab" class="pt-5">
				<v-tab-item v-for="item in items" :key="item.tab">
					<v-row>
						<v-col cols="10" offset="1">
							<template v-if="item.tab === 'Template'">
								<vue-code-highlight language="html">
									<pre>
&lt;template>
	&lt;v-app id="home">
		&lt;v-resize-drawer
			name="ResizeDrawer"
			fixed
			:color="drawerOptions.color"
			:options="drawerOptions"
			:right="drawerOptions.right"
			:value="drawer"
			@close="drawerClose"
			@handle:click="handleClick"
			@handle:dblclick="handleDoubleClick"
			@handle:drag="handleDrag"
			@handle:mousedown="handleMousedown"
			@handle:mouseup="handleMouseup"
			@input="drawerInput"
			@transitionend="drawerTransitionend"
		>
			&lt;template #handle>
				&lt;v-icon>mdi-arrow-right-circle&lt;/v-icon>
			&lt;/template>

			&lt;template #prepend>
				&lt;header>
					Prepend Slot
				&lt;/header>
			&lt;/template>

			&lt;template #append>
				&lt;v-footer>Footer Slot&lt;/v-footer>
			&lt;/template>
		&lt;/v-resize-drawer>
	&lt;/v-app>
&lt;/template></pre
									>
								</vue-code-highlight>
							</template>
							<template v-else>
								<vue-code-highlight language="js">
									<pre>
&lt;script>
	import VResizeDrawer from 'vuetify-resize-drawer';

	export default {
		name: 'App',
		components: {
			VResizeDrawer,
		},
		data: () => ({
			drawer: true,
			drawerOptions: {
				handlePosition: 'center',
				overlayColor: '#f00',
				overlayOpacity: '100%',
				right: false,
				saveWidth: true,
				storageName: 'vuetify-resize-drawer',
				width: '256px',
			},
		}),
		methods: {
			drawerClose(val) {
				// Do something...
			},
			drawerInput(val) {
				// Do something...
			},
			drawerTransitionend(evt) {
				// Do something...
			},
			handleClick(evt) {
				// Do something...
			},
			handleDoubleClick(evt) {
				// Do something...
			},
			handleDrag(evt) {
				// Do something...
			},
			handleMousedown(evt) {
				// Do something...
			},
			handleMouseup(evt) {
				// Do something...
			},
		},
	};
&lt;/script></pre
									>
								</vue-code-highlight>
							</template>
							<br />
						</v-col>
					</v-row>
				</v-tab-item>
			</v-tabs-items>
		</v-col>
	</v-row>
</template>

<script>
import { component as VueCodeHighlight } from 'vue-code-highlight';

export default {
	name: 'Example',
	components: {
		VueCodeHighlight,
	},
	props: {
		classes: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		tab: null,
		items: [
			{ tab: 'Template', content: 'Tab 1 Content' },
			{ tab: 'Script', content: 'Tab 2 Content' },
		],
	}),
	methods: {
	},
	mounted() { },
};
</script>
