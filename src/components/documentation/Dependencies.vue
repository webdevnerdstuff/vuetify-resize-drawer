<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="dependencies">
			<h2 :class="classes.h2">
				<a href="#dependencies" :class="classes.headerA">#</a>
				Dependencies
			</h2>

			<v-row>
				<v-col cols="12">
					<a :href="links.vuetify2" target="_blank">Vuetify v2</a>
					<br />
					<a :href="links.vue2" target="_blank">Vue 2</a>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'Dependencies',
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
	data: () => ({}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss"></style>
