<template>
	<v-row>
		<v-col
			id="events"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#events"
				>#</a>
				Events
			</h2>

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
							:headers="headers"
							hide-default-footer
							:items="items"
							:search="search"
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`events-${item.name}`"
											class="name-item text-mono ml-n2"
										><span class="primary--text">#</span><a
												:class="classes.appLink"
												:href="`#events-${item.name}`"
											>{{ item.name }}</a></span>
									</td>

									<td>{{ item.desc }}</td>
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
	name: 'Events',
	props: {
		classes: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		headers: [
			{
				align: 'start',
				filterable: true,
				sortable: false,
				text: 'Name',
				value: 'name',
			},
			{
				filterable: false,
				sortable: false,
				text: 'Description',
				value: 'desc',
			},
		],
		items: [
			// Drawer Events //
			{
				desc: 'Emits event object when transition is complete.',
				name: 'transitionend',
			},
			{
				desc: 'The updated bound model',
				name: 'input',
			},
			{
				desc: 'Emits event object when the drawer is closed.',
				name: 'close',
			},

			// Handle Events //
			{
				desc: 'Emits event object when handle is clicked.',
				name: 'handle:click',
			},
			{
				desc: 'Emits event object when handle is double clicked.',
				name: 'handle:dblclick',
			},
			{
				desc: 'Emits event object when handle is dragged.',
				name: 'handle:drag',
			},
			{
				desc: 'Emits event object when mouse down on handle.',
				name: 'handle:mousedown',
			},
			{
				desc: 'Emits event object when mouse up on handle.',
				name: 'handle:mouseup',
			},
		],
		search: '',
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss">
</style>
