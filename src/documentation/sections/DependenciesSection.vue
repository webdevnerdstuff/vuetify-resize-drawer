<template>
	<v-row>
		<v-col
			id="dependencies"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#dependencies"
				>#</a>
				Dependencies
			</h2>
		</v-col>

		<v-col cols="12">
			<a
				:href="store.links.vuetify"
				target="_blank"
			>
				Vuetify v3
			</a>
			<br />
			<a
				:href="store.links.vue"
				target="_blank"
			>
				Vue 3
			</a>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
import { useCoreStore } from '@/stores/index';

const classes = inject<Docs.GlobalClasses>('classes')!;
const store = useCoreStore();
</script>
