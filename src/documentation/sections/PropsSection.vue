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

		<v-col cols="12">
			<PropsTable
				:headers="propsStore.propsHeaders"
				:items="propsStore.componentProps"
				section-id="additional-props"
				section-title="Additional props"
			/>
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

		<v-col cols="12">
			<PropsTable
				:headers="propsStore.propsNotSupportedHeaders"
				:items="propsStore.propsNotSupported"
				section-id="props-not-supported"
				section-title="Props with partial and/or no support"
			/>
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

<script setup lang="ts">
import PropsTable from '@/documentation/components/PropsTable.vue';
// import { useCoreStore } from '@/stores/index';
import { usePropsStore } from '@/stores/props';


// const codeBlockSettings = inject<Docs.CodeBlockSettings>('codeBlockSettings')!;
const classes = inject<Docs.GlobalClasses>('classes')!;
// const store = useCoreStore();
const propsStore = usePropsStore();


const emit = defineEmits(['updateOptions']);

const links = inject<Docs.Links>('links')!;
const drawerOptions = inject<Docs.DrawerOptions>('drawerOptions')!;

const handleColor = ref('');

let defaultOptions = {};
const dialog = ref(false);
const options = ref(drawerOptions);


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
	defaultOptions = JSON.parse(JSON.stringify(drawerOptions));
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
