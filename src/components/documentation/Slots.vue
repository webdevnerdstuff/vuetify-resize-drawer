<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="slots">
			<h2 :class="classes.h2">Slots</h2>

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
											:id="`slots-${item.name}`"
											class="name-item text-mono ml-n2"
											><span class="primary--text">#</span
											><a
												:href="`#slots-${item.name}`"
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
	name: 'Slots',
	props: {
		classes: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		items: [
			{
				name: 'prepend',
				desc: 'A slot at the top of the drawer',
			},
			{
				name: 'default',
				desc: 'The default Vue slot.',
			},
			{
				name: 'append',
				desc: 'A slot at the bottom of the drawer',
			},
		],
		headers: [
			{
				text: 'Name',
				value: 'name',
				align: 'start',
				filterable: true,
				sortable: false,
				width: '273px',
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
