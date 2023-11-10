<template>
	<v-row>
		<v-col
			id="sass-variables"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#sass-variables"
				>#</a>
				SASS Variables
			</h2>
		</v-col>

		<v-col cols="12">
			Vuetify's
			<a
				:href="`${links.vuetify}/api/v-navigation-drawer/#sass`"
				target="_blank"
			>SASS Variables</a>
			are supported.
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-data-table
					:headers="headers"
					hide-default-footer
					:items="items"
					:search="search"
					variant="underlined"
				>
					<template #item="{ item }">
						<tr>
							<td>
								<span
									:id="`events-${item.name}`"
									class="name-item text-mono ml-n2"
								>
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										:href="`#events-${item.name}`"
									>
										{{ item.name }}
									</a>
								</span>
							</td>

							<td class="text-accent">{{ item.default }}</td>
							<td>{{ item.desc }}</td>
						</tr>
					</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject, ref } from 'vue';

const classes = inject('classes');
const links = inject('links');

const headers = [
	{
		align: 'start',
		filterable: true,
		key: 'name',
		sortable: false,
		title: 'Name',
		width: '40%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'default',
		sortable: false,
		title: 'Default',
		width: '15%',
	},
	{
		align: 'start',
		filterable: false,
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];
const items = [
	{
		default: '1px !default;',
		desc: '',
		name: '$navigation-drawer-border-width',
	},
	{
		default: '16 !default;',
		desc: '',
		name: '$navigation-drawer-mobile-temporary-elevation',
	},
];
const search = ref('');
</script>
