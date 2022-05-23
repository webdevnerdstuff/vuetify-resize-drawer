<template>
	<v-row>
		<v-col class="mb-5" cols="12" id="usage">
			<h2 :class="classes.h2">
				<a href="#usage" :class="classes.headerA">#</a>
				Usage
			</h2>

			<v-row>
				<v-col cols="12">
					<p>
						The <code>vuetify-resize-drawer</code> component usage is mostly the
						same as the
						<a
							:href="`${links.vuetify2}/components/navigation-drawers/`"
							target="_blank"
							>v-navigation-drawer</a
						>. It can also be used as a component in its own right for things
						such as a settings panel or to display data.
					</p>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script>

export default {
	name: 'Usage',
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
	}),
	methods: {
	},
	mounted() { },
};
</script>

<style lang="scss"></style>
