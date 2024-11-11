<template>
	<v-app-bar
		class="top-app-bar"
		color="primary"
		density="compact"
		fixed
	>
		<v-app-bar-nav-icon
			class="nav-drawer-btn me-1 ms-3"
			:height="iconSize.height"
			:width="iconSize.width"
			@click.stop="toggleDrawer"
		>
			<v-icon icon="mdi:mdi-menu"></v-icon>
		</v-app-bar-nav-icon>

		<v-app-bar-nav-icon
			class="nav-drawer-btn me-2 ms-1"
			:height="iconSize.height"
			:href="`/${store.packageName}/`"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-home"></v-icon>
		</v-app-bar-nav-icon>

		<div class="site-title">Vuetify Resize Drawer</div>

		<v-spacer></v-spacer>

		<v-select
			class="ma-0 pa-0 me-2 d-none d-sm-block"
			density="compact"
			hide-details
			:items="menuItems"
			multiple
			placeholder="Vuetify Links"
			prepend-inner-icon="$vuetify"
			style="max-width: 300px; width: 300px;"
			title="name"
			variant="underlined"
		>
			<template #item="{ item }">
				<v-list-item
					:key="item.raw.key"
					density="compact"
					:href="item.raw.link"
					:prepend-icon="item.raw.icon ? item.raw.icon : '$vuetify'"
					target="_blank"
					:title="item.raw?.topTitle || item.title"
				>
				</v-list-item>
			</template>
		</v-select>

		<v-btn
			v-if="isSmAndUp"
			class="me-2"
			:height="iconSize.height"
			:href="links.discord"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<fa-icon icon="fa-brands fa-discord" />
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.github"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-github" />
		</v-btn>

		<v-btn
			class="me-2"
			:height="iconSize.height"
			:href="links.npm"
			icon
			target="_blank"
			:width="iconSize.width"
		>
			<v-icon icon="mdi:mdi-npm" />
		</v-btn>

		<v-btn
			class="me-3"
			:height="iconSize.height"
			icon
			:width="iconSize.width"
			@click="setTheme"
		>
			<v-icon
				v-if="themeName === 'dark'"
				icon="mdi:mdi-weather-night"
			/>
			<v-icon
				v-else
				icon="mdi:mdi-weather-sunny"
			/>
		</v-btn>
	</v-app-bar>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import { useCoreStore } from '@/stores/index';
import { useMenuStore } from '@/stores/menu';

const emit = defineEmits(['changedTheme', 'updatedDrawer']);

defineProps({
	isPlayground: {
		default: false,
		type: Boolean,
	},
});

onMounted(() => {
	getTheme();
});

const menuStore = useMenuStore();
const store = useCoreStore();
const theme = useTheme();
const { smAndUp } = useDisplay();

const isSmAndUp = computed(() => smAndUp.value);
const links = store.links;
const themeName = ref('dark');
const drawer = ref(true);

const menuItems: Docs.MenuItem[] = [...menuStore.vuetifyLinks, ...menuStore.componentItems] as Docs.MenuItem[];

const iconSize = ref<{ height: number, width: number; }>({
	height: 32,
	width: 32,
});

function getTheme(): void {
	themeName.value = store.getTheme() as string;

	if (!themeName.value) {
		setTheme();
		return;
	}

	theme.global.name.value = themeName.value;
	emit('changedTheme', themeName.value);
}

function setTheme(): void {
	themeName.value = store.setTheme(themeName.value as string);
	theme.global.name.value = themeName.value;
	emit('changedTheme', themeName.value);
}

function toggleDrawer() {
	emit('updatedDrawer', drawer.value);
}
</script>

<style lang="scss"></style>
