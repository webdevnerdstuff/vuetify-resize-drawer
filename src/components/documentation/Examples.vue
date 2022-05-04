<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="examples">
			<h2 :class="classes.h2">
				<a href="#examples" :class="classes.headerA">#</a>
				Examples
			</h2>

			<v-row>
				<v-col cols="12"> TBD </v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'Examples',
	props: {
		classes: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss"></style>
