<template>
	<v-row>
		<v-col
			id="props"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify Resize Drawer uses Vuetify's
					<a
						:href="`${links.vuetify2}/api/v-navigation-drawer/`"
						target="_blank"
					>Navigation Drawer</a>
					behind the scenes. Most props that work for the
					<code>v-navigation-drawer</code> are supported. For a list of those
					props, you can find them
					<a
						:href="`${links.vuetify2}/api/v-navigation-drawer/#props`"
						target="_blank"
					>here</a>.
				</v-col>
			</v-row>

			<v-row id="additional-props">
				<v-col cols="12">
					<h3 :class="classes.h3">
						<a
							:class="classes.headerA"
							href="#additional-props"
						>#</a>
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
								hide-details
								label="Search"
								single-line
							></v-text-field>
						</v-card-title>

						<v-data-table
							:headers="propsSupported.headers"
							hide-default-footer
							:items="propsSupported.items"
							:items-per-page="-1"
							:search="search"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`props-${item.name}`"
											class="name-item text-mono ml-n2"
										><span class="primary--text">#</span><a
												:class="classes.appLink"
												:href="`#props-${item.name}`"
											>{{ item.name }}</a></span>
									</td>

									<td
										class="success--text"
										v-html="item.type"
									></td>
									<td
										class="accent--text"
										v-html="item.default"
									></td>
									<td v-html="item.desc"></td>
								</tr>
							</template>
						</v-data-table>
					</v-card>
				</v-col>
			</v-row>

			<v-row>
				<v-col>
					<v-dialog
						v-model="dialog"
						hide-overlay
						width="500"
					>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								color="primary"
								dark
								v-bind="attrs"
								v-on="on"
							>
								Try out some of the props
							</v-btn>
						</template>

						<v-card>
							<v-toolbar
								color="primary"
								dark
								dense
							>
								<v-toolbar-title>Try out props</v-toolbar-title>
							</v-toolbar>

							<v-card-text class="py-2">
								<v-row>
									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-switch
											v-model="options.resizable"
											dense
											inset
										>
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

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-switch
											v-model="options.right"
											dense
											inset
										>
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

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-select
											v-model="options.handlePosition"
											:items="selectOptions.handlePosition"
											label="handlePosition"
										></v-select>
									</v-col>

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-select
											v-model="options.handleColor"
											:items="selectOptions.handleColor"
											label="handleColor"
										></v-select>
									</v-col>

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-switch
											v-model="options.dark"
											dense
											inset
										>
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

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-switch
											v-model="options.light"
											dense
											inset
										>
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

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-switch
											v-model="options.saveWidth"
											dense
											inset
										>
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

									<v-col
										cols="12"
										md="6"
										sm="12"
									>
										<v-text-field
											v-model="options.storageName"
											label="storageName"
										>
										</v-text-field>
									</v-col>
								</v-row>
							</v-card-text>

							<v-divider></v-divider>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn
									color="default"
									text
									@click="dialog = false"
								>
									Close
								</v-btn>
								<v-btn
									color="primary"
									text
									@click="resetOptions"
								>
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
						<a
							:class="classes.headerA"
							href="#props-not-supported"
						>#</a>
						Props with partial and/or no support
					</h3>
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
						<v-data-table
							:headers="propsNotSupported.headers"
							hide-default-footer
							:items="propsNotSupported.items"
							:search="search"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`props-${item.name}`"
											class="name-item text-mono ml-n2"
										><span class="primary--text">#</span><a
												:class="classes.appLink"
												:href="`#props-${item.name}`"
											>{{ item.name }}</a></span>
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
		propsNotSupported: {
			headers: [
				{
					align: 'left',
					filterable: false,
					sortable: false,
					text: 'Name',
					value: 'name',
					width: '15%',
				},
				{
					align: 'left',
					filterable: false,
					sortable: false,
					text: 'Status',
					value: 'status',
				},
				{
					align: 'start',
					filterable: false,
					sortable: false,
					text: 'Notes',
					value: 'notes',
				},
			],
			items: [
				{
					name: 'disable-route-watcher',
					notes: 'An environment that uses routes is needed to test.',
					status: '',
				},
				{
					name: 'expand-on-hover',
					notes: 'The <code>expand-on-hover</code> prop will work, but the resizable functionality is disabled.',
					status: 'partial support',
				},
				{
					name: 'mini-variant',
					notes: 'The <code>mini-variant</code> prop will work, but the resizable functionality is disabled.',
					status: 'partial support',
				},
				{
					name: 'mini-variant-width',
					notes: 'The <code>mini-variant-width</code> prop for use with the <code>mini-variant</code> prop will work, but the resizable functionality is disabled.',
					status: 'partial support',
				},
				{
					name: 'mobile-breakpoint',
					notes: 'Needs a successful  pass/fail test to figure out if this works.',
					status: '',
				},
				{
					name: 'touchless',
					notes: 'Drawer does not function like it should with <code>touchless</code> enabled.',
					status: '',
				},
			],
		},
		propsSupported: {
			headers: [
				{
					align: 'left',
					filterable: true,
					sortable: false,
					text: 'Name',
					value: 'name',
					width: '15%',
				},
				{
					align: 'left',
					filterable: false,
					sortable: false,
					text: 'Type',
					value: 'type',
					width: '10%',
				},
				{
					align: 'left',
					filterable: false,
					sortable: false,
					text: 'Default',
					value: 'default',
				},
				{
					align: 'start',
					filterable: false,
					sortable: false,
					text: 'Description',
					value: 'desc',
				},
			],
			items: [
				{
					default: '8',
					desc: 'Specifies the width of the handle if the handle position <strong>border</strong> is selected',
					name: 'handle-border-width',
					type: 'string | number',
				},
				{
					default: 'primary',
					desc: 'Determines the color of the handle',
					name: 'handle-color',
					type: 'string',
				},
				{
					default: 'undefined',
					desc: 'Determines the icon of the handle',
					name: 'handle-icon',
					type: 'string',
				},
				{
					default: 'x-small',
					desc: 'Sets the height and width of the icon. Default unit is px. Can also use the following predefined sizes: <code>x-small</code>, <code>small</code>, <code>large</code>, and <code>x-large</code>',
					name: 'handle-icon-size',
					type: 'string',
				},
				{
					default: 'center',
					desc: 'Specifies the position or the handle. Valid values are <strong>border</strong>, <strong>center</strong>, <strong>top</strong>, <strong>bottom</strong>.',
					name: 'handle-position',
					type: 'string',
				},
				{
					default: '100%',
					desc: 'The maximum width of the navigation drawer. Accepts: number, px, or %',
					name: 'max-width',
					type: 'string',
				},
				{
					default: '56',
					desc: 'The minimum width of the navigation drawer. Accepts: number, px, or %',
					name: 'min-width',
					type: 'string',
				},
				{
					default: 'true',
					desc: 'Enables resize functionality',
					name: 'resizable',
					type: 'boolean',
				},
				{
					default: 'true',
					desc: 'Determines if the width of the component is saved in local/session storage',
					name: 'save-width',
					type: 'boolean',
				},
				{
					default: 'v-resize-drawer-width',
					desc: 'Determines the name of the local storage item',
					name: 'storage-name',
					type: 'string',
				},
				{
					default: 'local',
					desc: 'Determines the type of the storage to use (local, session)',
					name: 'storage-type',
					type: 'string',
				},
				{
					default: 'true',
					desc: 'Determines if the width of he navigation drawer should snap back if the <code>min-width</code> or <code>max-width</code> prop values pass their respective thresholds',
					name: 'width-snap-back',
					type: 'boolean',
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
			handleColor: [
				{ text: 'Default', value: 'default' },
				{ text: 'Primary', value: 'primary' },
				{ text: 'Secondary', value: 'secondary' },
				{ text: 'Success', value: 'success' },
				{ text: 'Warning', value: 'warning' },
				{ text: 'Error', value: 'error' },
				{ text: 'Info', value: 'info' },
			],
			handlePosition: [
				{ text: 'border', value: 'border' },
				{ text: 'center', value: 'center' },
				{ text: 'top', value: 'top' },
				{ text: 'bottom', value: 'bottom' },
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
