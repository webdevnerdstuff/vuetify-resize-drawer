<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="slots">
			<h2 :class="classes.h2">
				<a href="#slots" :class="classes.headerA">#</a>
				Slots
			</h2>

			<v-row>
				<v-col cols="12">
					<v-card>
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
												:class="classes.appLink"
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
				name: 'handle',
				desc: 'A slot for the resize handle.',
			},
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
				sortable: false,
				width: '273px',
			},
			{
				text: 'Description',
				value: 'desc',
				sortable: false,
			},
		],
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss"></style>
