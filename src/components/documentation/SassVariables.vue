<template>
	<v-row>
		<v-col
			id="sass-variables"
			class="mb-5"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#sass-variables"
				>#</a>
				SASS Variables
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify's
					<a
						:href="`${links.vuetify2}/api/v-navigation-drawer/#sass`"
						target="_blank"
					>SASS Variables</a>
					are supported.
				</v-col>
			</v-row>

			<v-row>
				<v-col cols="12">
					<v-card>
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

									<td class="accent--text">{{ item.default }}</td>
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
	name: 'SassVariables',
	props: {
		classes: {
			type: Object,
			required: true,
		},
		links: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		headers: [
			{
				align: 'left',
				sortable: false,
				text: 'Name',
				value: 'name',
				width: '30%',
			},
			{
				align: 'left',
				sortable: false,
				text: 'Default',
				value: 'default',
				width: '15%',
			},
			{
				align: 'start',
				sortable: false,
				text: 'Description',
				value: 'desc',
			},
		],
		items: [
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
