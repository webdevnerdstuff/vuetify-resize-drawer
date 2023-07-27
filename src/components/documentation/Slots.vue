<template>
	<v-row>
		<v-col
			id="slots"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>

			<v-row>
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
											:id="`slots-${item.name}`"
											class="name-item text-mono ml-n2"
										><span class="primary--text">#</span><a
												:class="classes.appLink"
												:href="`#slots-${item.name}`"
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
	name: 'Slots',
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
				sortable: false,
				text: 'Name',
				value: 'name',
				width: '273px',
			},
			{
				sortable: false,
				text: 'Description',
				value: 'desc',
			},
		],
		items: [
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
		],
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss">
</style>
