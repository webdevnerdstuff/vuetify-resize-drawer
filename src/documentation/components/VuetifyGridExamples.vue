<template>
	<v-container
		v-if="!isPlayground"
		class="bg-primary"
	>
		<v-row>
			<v-col>
				<h4 class="text-h5">Vuetify <a
						class="text-white"
						href="https://vuetifyjs.com/en/components/grids/#grid-system"
						target="_blank"
					>Grid System Examples</a></h4>
			</v-col>
		</v-row>
	</v-container>

	<v-divider class="pb-2"></v-divider>

	<!-- =========================== Align -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#align -->

	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary text-primary">Align</h5>
			</v-col>
		</v-row>
	</v-container>

	<div>
		<v-container class="bg-surface-variant mb-6">
			<v-row
				align="start"
				no-gutters
				style="height: 150px;"
			>
				<v-col
					v-for="n in 3"
					:key="n"
				>
					<v-sheet class="pa-2 ma-2">
						.align-start
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="bg-surface-variant mb-6">
			<v-row
				align="center"
				no-gutters
				style="height: 150px;"
			>
				<v-col
					v-for="n in 3"
					:key="n"
				>
					<v-sheet class="pa-2 ma-2">
						.align-center
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="bg-surface-variant mb-6">
			<v-row
				align="end"
				no-gutters
				style="height: 150px;"
			>
				<v-col
					v-for="n in 3"
					:key="n"
				>
					<v-sheet class="pa-2 ma-2">
						.align-end
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>

		<v-container class="bg-surface-variant">
			<v-row
				no-gutters
				style="height: 150px;"
			>
				<v-col align-self="start">
					<v-sheet class="pa-2 ma-2">
						.align-self-start
					</v-sheet>
				</v-col>

				<v-col align-self="center">
					<v-sheet class="pa-2 ma-2">
						.align-self-center
					</v-sheet>
				</v-col>

				<v-col align-self="end">
					<v-sheet class="pa-2 ma-2">
						.align-self-end
					</v-sheet>
				</v-col>
			</v-row>
		</v-container>
	</div>

	<!-- =========================== Breakpoint sizing -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#breakpoint-sizing -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Breakpoint sizing</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col cols="2">
				<v-sheet class="pa-2 ma-2">
					.v-col-2
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Justify -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#justify -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Justify</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row justify="start">
			<v-col
				v-for="k in 2"
				:key="k"
				cols="4"
			>
				<v-sheet class="pa-2 ma-2">
					.justify-start
				</v-sheet>
			</v-col>
		</v-row>

		<v-row justify="center">
			<v-col
				v-for="k in 2"
				:key="k"
				cols="4"
			>
				<v-sheet class="pa-2 ma-2">
					.justify-center
				</v-sheet>
			</v-col>
		</v-row>

		<v-row justify="end">
			<v-col
				v-for="k in 2"
				:key="k"
				cols="4"
			>
				<v-sheet class="pa-2 ma-2">
					.justify-end
				</v-sheet>
			</v-col>
		</v-row>

		<v-row justify="space-around">
			<v-col
				v-for="k in 2"
				:key="k"
				cols="4"
			>
				<v-sheet class="pa-2 ma-2">
					.justify-space-around
				</v-sheet>
			</v-col>
		</v-row>

		<v-row justify="space-between">
			<v-col
				v-for="k in 2"
				:key="k"
				cols="4"
			>
				<v-sheet class="pa-2 ma-2">
					.justify-space-between
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== No Gutters -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#no-gutters -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">No Gutters</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col cols="12">
				<v-sheet class="pa-2">
					.v-col-12
				</v-sheet>
			</v-col>
			<v-col cols="6">
				<v-sheet class="pa-2">
					.v-col-6
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Offset -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#offset -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Offset</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row
			class="mb-6"
			no-gutters
		>
			<v-col cols="4">
				<v-sheet class="pa-2 ma-2">
					.v-col-4
				</v-sheet>
			</v-col>
			<v-col
				cols="4"
				offset="4"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-4 .offset-4
				</v-sheet>
			</v-col>
		</v-row>
		<v-row
			class="mb-6"
			no-gutters
		>
			<v-col
				cols="3"
				offset="3"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-3 .offset-3
				</v-sheet>
			</v-col>
			<v-col
				cols="3"
				offset="3"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-3 .offset-3
				</v-sheet>
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col
				cols="6"
				offset="3"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-6 .offset-3
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Offset Breakpoint -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#offset-breakpoint -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Offset Breakpoint</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row
			class="mb-6"
			no-gutters
		>
			<v-col
				md="6"
				sm="5"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-sm-5 .v-col-md-6
				</v-sheet>
			</v-col>
			<v-col
				md="6"
				offset-md="0"
				offset-sm="2"
				sm="5"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-sm-5 .offset-sm-2 .v-col-md-6 .offset-md-0
				</v-sheet>
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col
				lg="6"
				md="5"
				sm="6"
			>
				<v-sheet class="pa-2 ma-2">
					sm-6 md-5 lg-6
				</v-sheet>
			</v-col>
			<v-col
				lg="6"
				md="5"
				offset-lg="0"
				offset-md="2"
				sm="6"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-sm-6 md-5 .offset-md-2 .v-col-lg-6 .offset-lg-0
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Order -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#order -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Order</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col order="6">
				<v-sheet class="pa-2 ma-2">
					First in markup, but middle in row
				</v-sheet>
			</v-col>
			<v-col order="12">
				<v-sheet class="pa-2 ma-2">
					Second in markup, but last in row
				</v-sheet>
			</v-col>
			<v-col order="1">
				<v-sheet class="pa-2 ma-2">
					Third in markup, but first in row
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Order first and last -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#order-first-and-last -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Order first and last</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col order="last">
				<v-sheet class="pa-2 ma-2">
					First, but last
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					Second, but unordered
				</v-sheet>
			</v-col>
			<v-col order="first">
				<v-sheet class="pa-2 ma-2">
					Third, but first
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Column wrapping -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#column-wrapping -->
	<!-- @source  -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Column wrapping</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col cols="9">
				<v-sheet class="pa-2 ma-2">
					.v-col-9
				</v-sheet>
			</v-col>
			<v-col cols="4">
				<v-sheet class="pa-2 ma-2">
					.v-col-4
				</v-sheet>
			</v-col>
			<v-col cols="6">
				<v-sheet class="pa-2 ma-2">
					.v-col-6
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Equal width columns -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#equal-width-columns -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Equal width columns</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-responsive width="100%"></v-responsive>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Grow and Shrink -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#grow-and-shrink -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Grow and Shrink</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row
			class="mb-6"
			no-gutters
		>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col cols="8">
				<v-sheet class="pa-2 ma-2">
					.v-col-8
				</v-sheet>
			</v-col>

			<v-col cols="4">
				<v-sheet class="pa-2 ma-2">
					.v-col-4
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Margin helpers -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#margin-helpers -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Margin helpers</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row>
			<v-col md="4">
				<v-sheet class="pa-2 ma-2">
					.v-col-md-4
				</v-sheet>
			</v-col>
			<v-col
				class="ms-auto"
				md="4"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-md-4 .ms-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col
				class="ms-md-auto"
				md="4"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-md-4 .ms-md-auto
				</v-sheet>
			</v-col>
			<v-col
				class="ms-md-auto"
				md="4"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-md-4 .ms-md-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col
				class="me-auto"
				cols="auto"
			>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto .me-auto
				</v-sheet>
			</v-col>
			<v-col cols="auto">
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== Nested grid -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#nested-grid -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Nested grid</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container>
		<v-row class="bg-green">
			<v-col cols="8">
				<v-sheet class="pa-2 ma-2">
					Level 1: .v-col-8
				</v-sheet>

				<v-row
					class="bg-red"
					no-gutters
				>
					<v-col cols="8">
						<v-sheet class="pa-2 ma-2">
							Level 2: .v-col-8
						</v-sheet>
					</v-col>

					<v-col cols="4">
						<v-sheet class="pa-2 ma-2">
							Level 2: .v-col-4
						</v-sheet>
					</v-col>
				</v-row>
			</v-col>

			<v-col cols="4">
				<v-sheet class="pa-2 ma-2">
					Level 1: .v-col-4
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== One column width -->
	<!-- @source https://vuetifyjs.com/en/components/grids/#one-column-width -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">One column width</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row no-gutters>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col cols="6">
				<v-sheet class="pa-2 ma-2">
					.v-col-6
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row no-gutters>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-col cols="2">
				<v-sheet class="pa-2 ma-2">
					.v-col-2
				</v-sheet>
			</v-col>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>

	<!-- =========================== https://vuetifyjs.com/en/components/grids/#spacers -->
	<!-- @source  -->
	<v-container>
		<v-row>
			<v-col>
				<h5 class="text-h5 text-primary">Spacers</h5>
			</v-col>
		</v-row>
	</v-container>

	<v-container class="bg-surface-variant">
		<v-row>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-spacer></v-spacer>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-spacer></v-spacer>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>

			<v-spacer></v-spacer>

			<v-col>
				<v-sheet class="pa-2 ma-2">
					.v-col-auto
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup>
defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});
</script>
