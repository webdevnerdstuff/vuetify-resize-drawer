<template>
	<div>
		<v-list
			dense
			nav
		>
			<v-list-item-group :color="drawerOptions.color ? 'white' : 'primary'">
				<v-list-item
					v-for="item in items"
					:key="item.title"
					:class="{
						'v-list-item--active': active === item.href,
					}"
					:color="drawerOptions.color ? 'white' : 'primary'"
					:href="item.href"
					link
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
			{
				href: '#home',
				icon: 'mdi-home',
				title: 'Home',
			},
			{
				href: '#installation',
				icon: 'mdi-plus-thick',
				title: 'Installation',
			},
			{
				href: '#description',
				icon: 'mdi-information-outline',
				title: 'Description',
			},
			{
				href: '#usage',
				icon: 'mdi-power-plug-outline',
				title: 'Usage',
			},
			{
				href: '#props',
				icon: 'mdi-cog',
				title: 'Props',
			},
			{
				href: '#events',
				icon: 'mdi-calendar-star',
				title: 'Events',
			},
			{
				href: '#slots',
				icon: 'mdi-slot-machine',
				title: 'Slots',
			},
			{
				href: '#sass-variables',
				icon: 'mdi-sass',
				title: 'SASS Variables',
			},
			{
				href: '#example',
				icon: 'mdi-code-json',
				title: 'Example',
			},
			{
				href: '#dependencies',
				icon: 'mdi-asterisk-circle-outline',
				title: 'Dependencies',
			},
			{
				href: '#license',
				icon: 'mdi-card-account-details-outline',
				title: 'License',
			},
			{
				href: '#legal',
				icon: 'mdi-scale-balance',
				title: 'Legal',
			},
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
					window.scrollTo({
						behavior: 'smooth',
						top: y,
					});
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
