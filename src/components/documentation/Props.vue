<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="props">
			<h2 :class="classes.h2">
				<a href="#props" :class="classes.headerA">#</a>
				Props
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify Resize Drawer uses Vuetify's
					<a
						href="https://vuetifyjs.com/en/api/v-navigation-drawer/"
						target="_blank"
						>Navigation Drawer</a
					>
					behind the scenes. Most props that work for the Vuetify Navigation
					Drawer are supported. For a list of those props, you can find them
					<a
						href="https://vuetifyjs.com/en/api/v-navigation-drawer/#props"
						target="_blank"
						>here</a
					>.
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					Additional props that are supported (or have different defaults) by
					Vuetify Resize Drawer:
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-card-title>
							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								label="Search"
								single-line
								hide-details
							></v-text-field>
						</v-card-title>

						<v-data-table
							:headers="propsSupported.headers"
							:items="propsSupported.items"
							:search="search"
							hide-default-footer
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`props-${item.name}`"
											class="name-item text-mono ml-n2"
											><span class="primary--text">#</span
											><a
												:href="`#props-${item.name}`"
												class="
													app-link
													text-decoration-none
													primary--text
													font-weight-medium
													d-inline-block
													font-weight-bold
												"
												>{{ item.name }}</a
											></span
										>
									</td>

									<td v-html="item.type" class="success--text"></td>
									<td>
										<div
											v-if="
												item.name === 'handlePosition' || item.name === 'color'
											"
										>
											<v-select
												:items="selectOptions[item.name]"
												v-model="options[item.name]"
											></v-select>
										</div>
										<v-switch
											v-else-if="item.type === 'boolean'"
											v-model="options[item.name]"
											:label="`${options[item.name]}`"
											dense
										></v-switch>

										<v-text-field
											v-else-if="
												item.type === 'string' || item.altType === 'number'
											"
											v-model="options[item.name]"
											:type="item.altType ? 'number' : 'text'"
										>
										</v-text-field>
									</td>
									<td class="accent--text" v-html="item.default"></td>
									<td v-html="item.desc"></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>

			<v-row id="props-not-supported">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a href="#props-not-supported" :class="classes.headerA">#</a>
						Props not supported
					</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="propsNotSupported.headers"
							:items="propsNotSupported.items"
							:search="search"
							hide-default-footer
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`props-${item.name}`"
											class="name-item text-mono ml-n2"
											><span class="primary--text">#</span
											><a
												:href="`#props-${item.name}`"
												class="
													app-link
													text-decoration-none
													primary--text
													font-weight-medium
													d-inline-block
													font-weight-bold
												"
												>{{ item.name }}</a
											></span
										>
									</td>
									<td class="secondary--text" v-html="item.status"></td>
									<td v-html="item.notes"></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'Props',
	props: {
		classes: {
			type: Object,
			required: true,
		},
		drawerOptions: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		options: {},
		propsSupported: {
			headers: [
				{
					text: 'Name',
					value: 'name',
					align: 'left',
					filterable: true,
					sortable: false,
					width: '15%',
				},
				{
					text: 'Type',
					value: 'type',
					align: 'left',
					filterable: false,
					sortable: false,
					width: '10%',
				},
				{
					text: 'Try',
					value: 'try',
					align: 'left',
					filterable: false,
					sortable: false,
				},
				{
					text: 'Default',
					value: 'default',
					align: 'left',
					filterable: false,
					sortable: false,
				},
				{
					text: 'Description',
					value: 'desc',
					align: 'start',
					filterable: false,
					sortable: false,
				},
			],
			items: [
				{
					name: 'color',
					type: 'string',
					default: 'undefined',
					desc: '<p>Applies specified color to the control - it can be the name of material color (for example <code>success</code> or <code>purple</code>) or css color (<code>#033</code> or <code>rgba(255, 0, 0, 0.5)</code>). You can find a list of built-in classes on the <a href="https://vuetifyjs.com/en/styles/colors/#material-colors" target="_blank">colors page</a>.</p>',
				},
				{
					name: 'handle.color',
					type: 'object',
					default: "<pre><code>{ dark: '#555', light: '#ccc' }</code></pre>",
					desc: 'Determines the color of the handle for dark and light modes.',
				},
				{
					name: 'handlePosition',
					type: 'string',
					default: 'center',
					desc: 'Specifies the position or the handle. Valid values are <strong>border</strong>, <strong>center</strong>, <strong>top</strong>, <strong>top-icon</strong>.',
				},
				{
					name: 'paddingTop',
					type: 'number <span class="operators--text">|</span> string',
					altType: 'number',
					default: '0',
					desc: 'Applies <strong>padding-top: 0</strong> to the component.',
				},
				{
					name: 'overflow',
					type: 'boolean',
					default: 'false',
					desc: 'Applies <strong>overflow: visible</strong> to the component.',
				},
				{
					name: 'resizable',
					type: 'boolean',
					default: 'true',
					desc: 'Enables resize functionality.',
				},
				{
					name: 'right',
					type: 'boolean',
					default: 'false',
					desc: '',
				},
				{
					name: 'saveWidth',
					type: 'boolean',
					default: 'true',
					desc: 'Determines if the width of the component is saved in local storage.',
				},
				{
					name: 'showCloseIcon',
					type: 'boolean',
					default: 'false',
					desc: 'Controls whether the close icon is enabled.',
				},
				{
					name: 'storageName',
					type: 'string',
					default: 'vuetify-resize-drawer',
					desc: 'Determines the name of the local storage item.',
				},
			],
		},
		propsNotSupported: {
			headers: [
				{
					text: 'Name',
					value: 'name',
					align: 'left',
					filterable: false,
					sortable: false,
					width: '15%',
				},
				{
					text: 'Status',
					value: 'status',
					align: 'left',
					filterable: false,
					sortable: false,
				},
				{
					text: 'Notes',
					value: 'notes',
					align: 'start',
					filterable: false,
					sortable: false,
				},
			],
			items: [
				{
					name: 'app',
					status: 'buggy',
					notes: 'When resizing the drawer, other <code>app</code> elements do not responded correctly.',
				},
				{
					name: 'disable-resize-watcher',
					status: 'pending',
					notes: 'Needs a successful test to figure out if this work.',
				},
				{
					name: 'disable-route-watcher',
					status: 'pending',
					notes: 'An environment that uses routes is need to test.',
				},
				{
					name: 'expand-on-hover',
					status: 'pending',
					notes: 'Needs more development to support the <code>mini-variant</code> prop.',
				},
				{
					name: 'mini-variant',
					status: 'pending',
					notes: 'Needs more development to support the <code>mini-variant</code> prop.',
				},
				{
					name: 'mini-variant-width',
					status: 'pending',
					notes: 'Needs more development to support the <code>mini-variant</code> prop.',
				},
				{
					name: 'mobile-breakpoint',
					status: 'pending',
					notes: 'Needs a successful test to figure out if this works.',
				},
				{
					name: 'stateless',
					status: 'pending',
					notes: 'Needs a successful test to figure out if this works.',
				},
				{
					name: 'touchless',
					status: 'pending',
					notes: 'Needs a successful test to figure out if this works.',
				},
				{
					name: 'width',
					status: 'not supported',
					notes: 'The width prop is not supported as it would interfere with the functionality of resizing the drawer.',
				},
			],
		},
		search: '',
		selectOptions: {
			color: [
				{ text: 'None', value: '' },
				{ text: 'Primary', value: 'primary' },
				{ text: 'Secondary', value: 'secondary' },
				{ text: 'Accent', value: 'accent' },
				{ text: 'Error', value: 'error' },
				{ text: 'Info', value: 'info' },
				{ text: 'Success', value: 'success' },
			],
			handlePosition: [
				{ text: 'border', value: 'border' },
				{ text: 'center', value: 'center' },
				{ text: 'top', value: 'top' },
				{ text: 'top-icon', value: 'top-icon' },
			],
		},
	}),
	watch: {
		options(newVal) {
			const options = newVal;
			options.paddingTop = parseInt(newVal.paddingTop, 10);
			this.$bus.$emit('updateOptions', options);
		},
	},
	methods: {
	},
	mounted() {
		this.options = { ...this.options, ...this.drawerOptions };
	},
};
</script>

<style lang="scss">
.type {
	color: #690;

	&__ {
		&default {
			color: #905;
		}
	}
}
</style>
