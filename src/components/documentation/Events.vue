<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="events">
			<h2 :class="classes.h2">Events</h2>

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
							:headers="headers"
							:items="items"
							:search="search"
							hide-default-footer
						>
							<template #item="{ item }">
								<tr>
									<td>
										<span
											:id="`events-${item.name}`"
											class="name-item text-mono ml-n2"
											><span class="primary--text">#</span
											><a
												:href="`#events-${item.name}`"
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
		items: [
			// Drawer Events //
			{
				name: 'transitionend',
				desc: 'Emits event object when transition is complete.',
			},
			{
				name: 'input',
				desc: 'The updated bound model',
			},
			{
				name: 'close',
				desc: 'Emits event object when the drawer is closed.',
			},

			// Handle Events //
			{
				name: 'handle:click',
				desc: 'Emits event object when handle is clicked.',
			},
			{
				name: 'handle:dblclick',
				desc: 'Emits event object when handle is double clicked.',
			},
			{
				name: 'handle:drag',
				desc: 'Emits event object when handle is dragged.',
			},
			{
				name: 'handle:mousedown',
				desc: 'Emits event object when mouse down on handle.',
			},
			{
				name: 'handle:mouseup',
				desc: 'Emits event object when mouse up on handle.',
			},
		],
		headers: [
			{
				text: 'Name',
				value: 'name',
				align: 'start',
				filterable: true,
				sortable: false,
			},
			{
				text: 'Description',
				value: 'desc',
				filterable: false,
				sortable: false,
			},
		],
		search: '',
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss"></style>
