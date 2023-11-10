<template>
	<v-row>
		<v-col
			id="slots"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-data-table
					:headers="headers"
					hide-default-footer
					:items="items"
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

							<td>{{ item.desc }}</td>
						</tr>
					</template>
				</v-data-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';

const classes = inject('classes');

const headers = [
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
		key: 'desc',
		sortable: false,
		title: 'Description',
	},
];
const items = [
	{
		desc: 'A slot for the resize handle.',
		name: 'handle',
	},
	{
		desc: 'A slot at the top of the drawer',
		name: 'prepend',
	},
	{
		desc: 'The default Vue slot.',
		name: 'default',
	},
	{
		desc: 'A slot at the bottom of the drawer',
		name: 'append',
	},
];
</script>

