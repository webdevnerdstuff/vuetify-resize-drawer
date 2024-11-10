<template>
	<v-row>
		<v-col
			id="vuetify-grid-system"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#vuetify-grid-system"
				>#</a>
				Vuetify Grid System
			</h2>
		</v-col>

		<v-col cols="12">
			The <code class="ic">vuetify-resize-drawer</code> component has the ability to use Vuetify Grid classes that are
			responsive to the container width using <code class="ic">@container</code> queries. The <code
				class="ic">@media</code> queries will still work as intended. For more information about the
			Vuetify Grid System, see the
			<a
				:href="`${links.vuetify}/components/grids/#grid-system/`"
				target="_blank"
			>Grid System</a> page.
		</v-col>

		<v-col>
			<v-btn @click="emit('toggleGridDrawer')">Open Grid Drawer Example</v-btn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const classes = inject<Docs.GlobalClasses>('classes')!;
const links = inject<Docs.Links>('links')!;

const emit = defineEmits([
	'toggleGridDrawer',
]);
</script>

<style></style>
