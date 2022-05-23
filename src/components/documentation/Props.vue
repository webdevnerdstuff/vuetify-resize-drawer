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
						:href="`${links.vuetify2}/api/v-navigation-drawer/`"
						target="_blank"
						>Navigation Drawer</a
					>
					behind the scenes. Most props that work for the
					<code>v-navigation-drawer</code> are supported. For a list of those
					props, you can find them
					<a
						:href="`${links.vuetify2}/api/v-navigation-drawer/#props`"
						target="_blank"
						>here</a
					>.
				</v-col>
			</v-row>

			<v-row id="additional-props">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a href="#additional-props" :class="classes.headerA">#</a>
						Additional props
					</h3>
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
												:class="classes.appLink"
												>{{ item.name }}</a
											></span
										>
									</td>

									<td v-html="item.type" class="success--text"></td>
									<td class="accent--text" v-html="item.default"></td>
									<td v-html="item.desc"></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<v-dialog v-model="dialog" width="500" hide-overlay>
						<template v-slot:activator="{ on, attrs }">
							<v-btn color="primary" dark v-bind="attrs" v-on="on">
								Try out some of the props
							</v-btn>
						</template>

						<v-card>
							<v-toolbar color="primary" dark dense>
								<v-toolbar-title>Try out props</v-toolbar-title>
							</v-toolbar>

							<v-card-text class="py-2">
								<v-row>
									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.resizable">
											<template #label>
												<span>
													resizable:
													<span class="boolean-color primary--text">
														{{ options.resizable }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.right">
											<template #label>
												<span>
													right:
													<span class="boolean-color primary--text">
														{{ options.right }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<!-- For testing only -->
									<!-- <v-col cols="12" sm="12" md="6">
										<v-switch
											:label="`mini-variant: ${options.miniVariant}`"
											dense
											inset
											v-model="options.miniVariant"
										></v-switch>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch
											:label="`expand-on-hover: ${options.expandOnHover}`"
											dense
											inset
											v-model="options.expandOnHover"
										></v-switch>
									</v-col> -->

									<v-col cols="12" sm="12" md="6">
										<v-select
											label="handlePosition"
											v-model="options.handlePosition"
											:items="selectOptions.handlePosition"
										></v-select>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.overflow">
											<template #label>
												<span>
													overflow:
													<span class="boolean-color primary--text">
														{{ options.overflow }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.dark">
											<template #label>
												<span>
													dark:
													<span class="boolean-color primary--text">
														{{ options.dark || 'undefined' }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.light">
											<template #label>
												<span>
													light:
													<span class="boolean-color primary--text">
														{{ options.light || 'undefined' }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<v-col cols="12">
										<p><strong>Local Storage Options</strong></p>
										<p class="mb-0">
											Values can be viewed in the browser DevTools Application
											tab under Local Storage
										</p>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-switch dense inset v-model="options.saveWidth">
											<template #label>
												<span>
													saveWidth:
													<span class="boolean-color primary--text">
														{{ options.saveWidth }}
													</span>
												</span>
											</template>
										</v-switch>
									</v-col>

									<v-col cols="12" sm="12" md="6">
										<v-text-field
											label="storageName"
											v-model="options.storageName"
										>
										</v-text-field>
									</v-col>
								</v-row>
							</v-card-text>

							<v-divider></v-divider>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="default" text @click="dialog = false">
									Close
								</v-btn>
								<v-btn color="primary" text @click="resetOptions">
									Reset
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-dialog>
				</v-col>
			</v-row>

			<v-row id="props-not-supported">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a href="#props-not-supported" :class="classes.headerA">#</a>
						Props with partial and/or no support
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
												:class="classes.appLink"
												>{{ item.name }}</a
											></span
										>
									</td>
									<td
										:class="{
											'warning--text': item.status === 'pending',
											'error--text': item.status === 'debugging',
											'secondary--text':
												item.status !== 'debugging' &&
												item.status !== 'pending',
										}"
										v-html="item.status"
									></td>
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
		links: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		defaultOptions: {},
		dialog: false,
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
					name: 'handle-color',
					type: 'object',
					default: "<pre><code>{ dark: '#555', light: '#ccc' }</code></pre>",
					desc: 'Determines the background color of the handle for dark and light modes. Used when the <code>handlePosition</code> is set to <strong>top</strong>. Alternatively you can use CSS styles to adjust the colors.',
				},
				{
					name: 'handle-position',
					type: 'string',
					default: 'center',
					desc: 'Specifies the position or the handle. Valid values are <strong>border</strong>, <strong>center</strong>, <strong>top</strong>, <strong>top-icon</strong>.',
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
					name: 'save-width',
					type: 'boolean',
					default: 'true',
					desc: 'Determines if the width of the component is saved in local storage.',
				},
				{
					name: 'storage-name',
					type: 'string',
					default: 'v-resize-drawer-width',
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
					name: 'disable-route-watcher',
					status: 'pending',
					notes: 'An environment that uses routes is needed to test.',
				},
				{
					name: 'expand-on-hover',
					status: 'partial support',
					notes: 'The <code>expand-on-hover</code> prop will work, but the resizable functionality is disabled.',
				},
				{
					name: 'mini-variant',
					status: 'partial support',
					notes: 'The <code>mini-variant</code> prop will work, but the resizable functionality is disabled.',
				},
				{
					name: 'mini-variant-width',
					status: 'partial support',
					notes: 'The <code>mini-variant-width</code> prop for use with the <code>mini-variant</code> prop will work, but the resizable functionality is disabled.',
				},
				{
					name: 'mobile-breakpoint',
					status: 'pending',
					notes: 'Needs a successful  pass/fail test to figure out if this works.',
				},
				{
					name: 'touchless',
					status: 'debugging',
					notes: 'Drawer does not function like it should with <code>touchless</code> enabled.',
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
			this.$bus.$emit('updateOptions', options);
		},
	},
	methods: {
		resetOptions() {
			this.options = { ...this.defaultOptions };
			this.$bus.$emit('updateOptions', this.options);
		},
	},
	mounted() {
		this.options = { ...this.options, ...this.drawerOptions };
		this.defaultOptions = { ...this.options };
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

.boolean-color {
	font-weight: 500;
}
</style>
