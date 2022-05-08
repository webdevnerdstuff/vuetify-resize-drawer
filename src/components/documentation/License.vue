<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="license">
			<h2 :class="classes.h2">
				<a href="#license" :class="classes.headerA">#</a>
				License
			</h2>

			<v-row>
				<v-col cols="12">
					Copyright &copy; {{ new Date().getFullYear() }} WebDevNerdStuff
					<br />
					Licensed under the
					<a
						href="https://github.com/webdevnerdstuff/vuetify-resize-drawer/blob/master/LICENSE.md"
						>MIT License</a
					>.
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'License',
	props: {
		classes: {
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
