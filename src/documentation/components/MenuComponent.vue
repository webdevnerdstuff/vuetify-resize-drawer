<template>
	<v-list :color="drawerOptions.color ? 'white' : 'primary'">
		<v-list-item
			v-for="item in menuItems"
			:key="item.title"
			:class="{
				'v-list-item--active': active === item.href,
			}"
			:color="drawerOptions.color ? 'white' : 'primary'"
			:href="item.href"
			link
			:title="item.title"
		>
			<template v-slot:prepend>
				<v-icon :icon="item.icon"></v-icon>
			</template>
		</v-list-item>
	</v-list>
</template>

<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';

const drawerOptions = inject<Docs.DrawerOptions>('drawerOptions')!;
const store = useMenuStore();
const active = ref<string>('');
const menuItems: Docs.MenuItem[] = store.menuItems;

onMounted(() => {
	smoothScroll();

	active.value = window.location.hash || '#home';
});

function scrollToHash(hash: string): void {
	const id: string = hash.replace('#', '');
	const yOffset: number = -55;
	const element: HTMLElement | null = document.getElementById(id);

	if (element) {
		const y: number = element.getBoundingClientRect().top + window.scrollY + yOffset;

		active.value = hash;

		window.location.hash = hash;
		window.scrollTo({ behavior: 'smooth', top: y });
	}
}

function smoothScroll(): void {
	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', (e: MouseEvent) => {
			e.preventDefault();

			const hash: string = anchor.hash;

			if (hash) {
				scrollToHash(hash);
			}
		});
	});

	window.addEventListener('load', () => {
		const hash = window.location.hash;
		if (hash) {
			scrollToHash(hash);
		}
	});
}
</script>

<style lang="scss" scoped>
.sub-items {
	font-size: .9em;
	padding-left: calc(var(--indent-padding) - 10px) !important;

	:deep(.v-icon) {
		font-size: 1em !important;
		margin-right: 1em !important;
	}
}
</style>
