<template>
	<div>
		<v-list dense nav>
			<v-list-item-group :color="drawerOptions.color ? 'white' : 'primary'">
				<v-list-item
					v-for="item in items"
					:key="item.title"
					link
					:color="drawerOptions.color ? 'white' : 'primary'"
					:href="item.href"
					:class="{
						'v-list-item--active': active === item.href,
					}"
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	props: {
		drawerOptions: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		active: '#home',
		items: [
			{ title: 'Home', icon: 'mdi-home', href: '#home' },
			{ title: 'Installation', icon: 'mdi-plus-thick', href: '#installation' },
			{ title: 'Description', icon: 'mdi-information-outline', href: '#description' },
			{ title: 'Props', icon: 'mdi-cog', href: '#props' },
			{ title: 'Events', icon: 'mdi-calendar-star', href: '#events' },
			{ title: 'Slots', icon: 'mdi-slot-machine', href: '#slots' },
			{ title: 'SASS Variables', icon: 'mdi-sass', href: '#sass-variables' },
			{ title: 'Examples', icon: 'mdi-code-json', href: '#examples' },
			{ title: 'Dependencies', icon: 'mdi-asterisk-circle-outline', href: '#dependencies' },
			{ title: 'License', icon: 'mdi-scale-balance', href: '#license' },
		],
	}),
	mounted() {
		this.smoothScroll();

		this.active = window.location.hash || '#home';
	},
	methods: {
		smoothScroll() {
			document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
				anchor.addEventListener('click', (e) => {
					e.preventDefault();

					const hash = anchor.hash;
					const id = hash.replace('#', '');
					const yOffset = -55;
					const element = document.getElementById(id);
					const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

					this.active = hash;

					window.location.hash = hash;
					window.scrollTo({ top: y, behavior: 'smooth' });
				});
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.v-divider {
	margin: 0;
}
</style>
