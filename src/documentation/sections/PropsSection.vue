<template>
	<v-row>
		<v-col
			id="props"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#props"
				>#</a>
				Props
			</h2>
		</v-col>


		<v-col cols="12">
			Vuetify Resize Drawer uses Vuetify's
			<a
				:href="`${links.vuetify}/api/v-navigation-drawer/`"
				target="_blank"
			>Navigation Drawer</a>
			behind the scenes. Most props that work for the
			<code class="ic">v-navigation-drawer</code> are supported. For a list of those
			props, you can find them
			<a
				:href="`${links.vuetify}/api/v-navigation-drawer/#props`"
				target="_blank"
			>here</a>.
		</v-col>

		<v-col
			id="additional-props"
			cols="12"
		>
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					href="#additional-props"
				>#</a>
				Additional props
			</h3>
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-card-title>
					<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						hide-details
						label="Search"
						single-line
						variant="underlined"
					></v-text-field>
				</v-card-title>

				<v-data-table
					:headers="propsSupported.headers"
					hide-default-footer
					:items="propsSupported.items"
					items-per-page="25"
					:search="search"
				>
					<template #[`item.name`]="{ item }">
						<td>
							<span
								:id="`props-${item.name}`"
								class="name-item text-mono ml-n2"
							>
								<span class="text-primary">#</span>
								<a
									class="text-primary"
									:class="classes.appLink"
									:href="`#props-${item.name}`"
								>{{ item.name }}</a>
							</span>
						</td>
					</template>

					<template #[`item.type`]="{ item }">
						<td class="text-success">
							{{ item.type }}
						</td>
					</template>

					<template #[`item.default`]="{ item }">
						<td
							class="text-accent"
							v-html="item.default"
						></td>
					</template>

					<template #[`item.desc`]="{ item }">
						<td v-html="item.desc"></td>
					</template>
				</v-data-table>
			</v-card>
		</v-col>

		<v-col>
			<v-btn
				class="float-right"
				color="primary"
				@click="dialog = !dialog"
			>
				Try out some of the props
			</v-btn>
		</v-col>

		<v-col
			id="props-not-supported"
			cols="12"
		>
			<h3 :class="classes.h3">
				<a
					:class="classes.headerA"
					href="#props-not-supported"
				>#</a>
				Props with partial and/or no support
			</h3>
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-data-table
					:headers="propsNotSupported.headers"
					hide-default-footer
					:items="propsNotSupported.items"
					:search="search"
				>
					<template #[`item.name`]="{ item }">
						<td>
							<span
								:id="`props-${item.name}`"
								class="name-item text-mono ml-n2"
							>
								<span class="text-primary">#</span>
								<a
									class="text-primary"
									:class="classes.appLink"
									:href="`#props-${item.name}`"
								>{{ item.name }}</a>
							</span>
						</td>
					</template>

					<template #[`item.status`]="{ item }">
						<td
							:class="{
								'text-warning': item.status === 'pending',
								'text-error': item.status === 'debugging',
								'text-secondary':
									item.status !== 'debugging' &&
									item.status !== 'pending',
							}"
							v-html="item.status"
						></td>
					</template>

					<template #[`item.notes`]="{ item }">
						<td v-html="item.notes"></td>
					</template>
				</v-data-table>
			</v-card>
		</v-col>

	</v-row>

	<v-dialog
		v-model="dialog"
		width="500px"
	>
		<v-card>
			<v-toolbar
				color="primary"
				density="compact"
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
							class="switch-label"
							color="primary"
							density="comfortable"
							:false-value="false"
							:value="true"
						>
							<template #label>
								<span>
									resizable:
									<span class="boolean-color text-primary">
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
							v-model="options.location"
							class="switch-label"
							color="primary"
							density="comfortable"
							false-value="left"
							value="right"
						>
							<template #label>
								<span>
									location:
									<span class="boolean-color text-primary">
										{{ options.location }}
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
						<v-select
							v-model="options.handleColor"
							density="comfortable"
							:items="selectOptions.handleColor"
							label="handleColor"
							variant="outlined"
						></v-select>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-select
							v-model="options.handlePosition"
							density="comfortable"
							:items="selectOptions.handlePosition"
							label="handlePosition"
							variant="outlined"
						></v-select>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-text-field
							v-model="options.handleBorderWidth"
							density="comfortable"
							label="handleBorderWidth"
							type="number"
							variant="outlined"
						>
						</v-text-field>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.theme"
							class="switch-label"
							color="primary"
							density="comfortable"
							false-value="light"
							value="dark"
						>
							<template #label>
								<span>
									theme:
									<span class="boolean-color text-primary">
										{{ options.theme }}
									</span>
								</span>
							</template>
						</v-switch>
					</v-col>

					<v-col cols="12">
						<p><strong>Local Storage Options</strong></p>
						<p class="mb-0">
							Values can be viewed in the browser DevTools Application tab under
							Local Storage
						</p>
					</v-col>

					<v-col
						cols="12"
						md="6"
						sm="12"
					>
						<v-switch
							v-model="options.saveWidth"
							class="switch-label"
							color="primary"
							density="comfortable"
						>
							<template #label>
								<span>
									saveWidth:
									<span class="boolean-color text-primary">
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
							density="comfortable"
							label="storageName"
							variant="outlined"
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
				> Close </v-btn>
				<v-btn
					color="primary"
					text
					@click="resetOptions"
				> Reset </v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup>
const emit = defineEmits(['updateOptions']);


const links = inject('links');
const classes = inject('classes');
const drawerOptions = inject('drawerOptions');
const handleColor = ref('');

let defaultOptions = {};
const dialog = ref(false);
const options = ref(drawerOptions.value);


const propsSupported = reactive({
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: true,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'type',
			sortable: false,
			title: 'Type',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'default',
			sortable: false,
			title: 'Default',
		},
		{
			align: 'start',
			filterable: false,
			key: 'desc',
			sortable: false,
			title: 'Description',
		},
	],
	items: [
		{
			default: '8',
			desc: 'Specifies the width of the handle if the handle position <code class="ic">border</code> is selected.',
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
			desc: 'Sets the height and width of the icon. Default unit is px. Can also use the following predefined sizes: <code class="ic">x-small</code>, <code class="ic">small</code>, <code class="ic">default</code>, <code class="ic">large</code>, and <code class="ic">x-large</code>',
			name: 'handle-icon-size',
			type: 'string',
		},
		{
			default: 'center',
			desc: 'Specifies the position of the handle. Valid values are <code class="ic">border</code>, <code class="ic">center</code>, <code class="ic">top</code>, <code class="ic">bottom</code>. If <code class="ic">location</code> prop is set to <code class="ic">top</code> or <code class="ic">bottom</code>, the handle position <code class="ic">top</code> and <code class="ic">bottom</code> are not allowed.',
			name: 'handle-position',
			type: "'bottom' | 'border' | 'center' | 'top'",
		},
		{
			default: 'start',
			desc: 'Places the navigation drawer position on the the screen.',
			name: 'location',
			type: "'bottom' | 'end' | 'start' | 'left' | 'right' | 'top' | undefined",
		},
		{
			default: '100%',
			desc: 'The maximum height of the navigation drawer. Accepts: number, px, or %',
			name: 'max-height',
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
			desc: 'The minimum height of the navigation drawer. Accepts: number, px, or %',
			name: 'min-height',
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
			default: 'true',
			desc: 'Determines if the width or height of the navigation drawer should snap back if the <code class="ic">min-width</code>, <code class="ic">max-width</code>, <code class="ic">min-height</code> or <code class="ic">max-height</code> prop values pass their respective thresholds. (previously <code class="ic">width-snap-back</code>. Backwards compatible)',
			name: 'snap-back',
			type: 'boolean',
		},
		{
			default: 'v-resize-drawer-width',
			desc: 'Determines the name of the local/session storage item. The value is appended with the <code class="ic">location</code> prop value.',
			name: 'storage-name',
			type: 'string',
		},
		{
			default: 'local',
			desc: 'Determines the type of storage to use when the <code class="ic">save-width</code> is <code class="ic">true</code>. Valid values are <code class="ic">local</code> and <code class="ic">session</code>',
			name: 'storage-type',
			type: "'local' | 'session'",
		},
		{
			default: 'false',
			desc: 'Hides the resize handle on mobile devices. <br /><span class="text-danger">*</span> The <code class="ic">touchless</code> prop does not function the same as the <code class="ic">v-navigation-drawer</code> prop which is not supported',
			name: 'touchless',
			type: 'boolean',
		},
	],
});
const propsNotSupported = reactive({
	headers: [
		{
			align: 'start',
			filterable: true,
			key: 'name',
			sortable: false,
			title: 'Name',
			width: '15%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'status',
			sortable: false,
			title: 'Status',
			width: '10%',
		},
		{
			align: 'start',
			filterable: false,
			key: 'notes',
			sortable: false,
			title: 'Notes',
		},
	],
	items: [
		{
			name: 'disable-route-watcher',
			notes: 'An environment that uses routes is needed to test',
			status: '',
		},
		{
			name: 'expand-on-hover',
			notes: 'The <code class="ic">expand-on-hover</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
		{
			name: 'rail',
			notes: 'The <code class="ic">rail</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
		{
			name: 'rail-width',
			notes: 'The <code class="ic">rail-width</code> prop for use with the <code class="ic">rail</code> prop will work, but the resizable functionality is disabled',
			status: 'partial support',
		},
	],
});
const search = ref('');
const selectOptions = {
	handleColor: [
		{ title: 'Default', value: 'default' },
		{ title: 'Primary', value: 'primary' },
		{ title: 'Secondary', value: 'secondary' },
		{ title: 'Success', value: 'success' },
		{ title: 'Warning', value: 'warning' },
		{ title: 'Error', value: 'error' },
		{ title: 'Info', value: 'info' },
	],
	handlePosition: ['border', 'center', 'top', 'bottom'],
};

onMounted(() => {
	defaultOptions = JSON.parse(JSON.stringify(drawerOptions.value));
	handleColor.value = defaultOptions.handleColor;
});

function resetOptions() {
	options.value = JSON.parse(JSON.stringify(defaultOptions));

	emit('updateOptions', options.value);
}
</script>

<style lang="scss" scoped>
.type {
	color: #690;

	&__ {
		&default {
			color: #905;
		}
	}
}

:deep(code) {
	background-color: rgb(255 255 255 / 10%) !important;
	border-radius: 3px;
	font-size: 85%;
	font-weight: normal;
	padding: 0.2em 0.4em;
}

.v-theme--light {
	:deep(code) {
		background-color: rgb(0 0 0 / 5%) !important;
	}
}

:deep(.v-input__details) {
	max-height: 10px;
	min-height: 10px;
}

.switch-label {
	:deep(.v-label) {
		opacity: 1 !important;

		.boolean-color {
			font-weight: 500;
		}
	}
}
</style>
