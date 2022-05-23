<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="sass-variables">
			<h2 :class="classes.h2">
				<a href="#sass-variables" :class="classes.headerA">#</a>
				SASS Variables
			</h2>

			<v-row>
				<v-col cols="12">
					Vuetify's
					<a
						:href="`${links.vuetify2}/api/v-navigation-drawer/#sass`"
						target="_blank"
						>SASS Variables</a
					>
					are supported.
				</v-col>
			</v-row>

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
											:id="`events-${item.name}`"
											class="name-item text-mono ml-n2"
											><span class="primary--text">#</span
											><a
												:href="`#events-${item.name}`"
												:class="classes.appLink"
												>{{ item.name }}</a
											></span
										>
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
		items: [
			{
				name: '$navigation-drawer-border-width',
				default: '1px !default;',
				desc: '',
			},
			{
				name: '$navigation-drawer-mobile-temporary-elevation',
				default: '16 !default;',
				desc: '',
			},
		],
		headers: [
			{
				text: 'Name',
				value: 'name',
				align: 'left',
				sortable: false,
				width: '30%',
			},
			{
				text: 'Default',
				value: 'default',
				align: 'left',
				sortable: false,
				width: '15%',
			},
			{
				text: 'Description',
				value: 'desc',
				align: 'start',
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
