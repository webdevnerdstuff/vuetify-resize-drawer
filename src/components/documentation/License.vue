<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="license">
			<h2 :class="classes.h2">
				<a href="#license" :class="classes.headerA">#</a>
				License
			</h2>

			<v-row>
				<v-col cols="12">
					Copyright &copy; {{ new Date().getFullYear() }}
					<a :href="links.github" target="_blank">WebDevNerdStuff</a>
					<br />
					Licensed under the
					<a :href="`${links.repo}/blob/master/LICENSE.md`" target="_blank">
						MIT License
					</a>
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
