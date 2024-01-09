<template>
	<v-app id="home">
		<!-- ====================================================== Playground -->
		<PlaygroundPage
			:grid-drawer="gridDrawer"
			@gridDrawerClosed="gridDrawer = false"
		/>

		<!-- ====================================================== Main Container -->
		<v-main>
			<v-responsive>
				<v-container class="px-10">
					<v-row>
						<v-col class="v-col-12 text-center">
							<h1>Vuetify Resize Drawer</h1>
						</v-col>
						<v-col class="v-col-12 text-center">
							<v-chip color="primary">
								Playground v{{ store.pluginVersion }}
							</v-chip>
						</v-col>
					</v-row>

					<v-row>
						<v-col class="v-col-12">
							<v-container>
								<v-row class="row mb-4">
									<v-col class="text-center">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aut officia expedita id ullam quia in,
										nostrum unde recusandae numquam at vero, autem voluptatibus quis! Quasi odit unde eligendi soluta?
									</v-col>
								</v-row>
							</v-container>
						</v-col>
					</v-row>

					<v-row>
						<v-col
							class="d-flex justify-center"
							cols="12"
						>
							<v-btn
								size="small"
								@click="gridDrawer = !gridDrawer"
							>Toggle Grid Drawer</v-btn>
						</v-col>
					</v-row>
				</v-container>
			</v-responsive>
		</v-main>
	</v-app>
</template>


<script setup>
import { useCoreStore } from '@/stores/index';
import PlaygroundPage from '@/playground/PlaygroundPage.vue';

const store = useCoreStore();
const gridDrawer = ref(false);

provide('links', store.links);
</script>


<style scoped>
</style>
