import { defineStore } from 'pinia';
import { useCoreStore } from './index';


export const useMenuStore = defineStore('menu', () => {
	const coreStore = useCoreStore();
	const links = coreStore.links;

	const componentItems = [
		{
			href: '#components-v-navigation-drawer',
			icon: 'mdi:mdi-menu',
			key: 'v-navigation-drawer',
			link: `${links.vuetify}en/api/v-navigation-drawer/`,
			title: 'VNavigationDrawer',
			topTitle: 'VNavigationDrawer',

		},
	];

	const vuetifyLinks = [
		{
			icon: 'mdi:mdi-github',
			key: 'vuetify-github',
			link: links.vuetifyGithub,
			title: 'Github',
		},
		{
			key: 'vuetify',
			link: `${links.vuetify}en/components/all/`,
			title: 'Vuetify Components',
		},
	];

	const menuItems = [
		{
			href: '#home',
			icon: 'mdi:mdi-home',
			title: 'Home',
		},
		{
			href: '#installation',
			icon: 'mdi:mdi-plus-thick',
			title: 'Installation',
		},
		{
			href: '#description',
			icon: 'mdi:mdi-information-outline',
			title: 'Description',
		},
		{
			href: '#usage',
			icon: 'mdi:mdi-power-plug-outline',
			title: 'Usage',
		},
		{
			href: '#props',
			icon: 'mdi-cog',
			title: 'Props',
		},
		{
			href: '#vuetify-grid-system',
			icon: 'mdi-view-grid',
			title: 'Grid System',
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
			href: '#playground',
			icon: 'mdi:mdi-seesaw',
			title: 'Playground',
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
	];

	return {
		componentItems,
		menuItems,
		vuetifyLinks,
	};
});
