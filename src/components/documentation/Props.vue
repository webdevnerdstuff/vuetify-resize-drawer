<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="props">
			<h2 class="v-heading text-h4 text-sm-h4 mb-3">Props</h2>

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
	name: 'Props',
	props: {},
	data: () => ({
		items: [
			{
				name: 'tbd',
				desc: 'tbd',
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
