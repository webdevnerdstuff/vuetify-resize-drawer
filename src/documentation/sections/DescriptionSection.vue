<template>
	<v-row>
		<v-col
			id="description"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#description"
				>#</a>
				Description
			</h2>
		</v-col>

		<v-col cols="12">
			The <code class="ic">vuetify-resize-drawer</code> component extends the
			functionality of the
			<a
				:href="`${links.vuetify}/components/navigation-drawers/`"
				target="_blank"
			>v-navigation-drawer</a>
			so that it is resizable by the user.
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';

const classes = inject('classes');
const links = inject('links');
</script>
