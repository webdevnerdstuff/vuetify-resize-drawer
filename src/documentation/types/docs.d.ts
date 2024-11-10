import { Props } from '../../plugin/types';


declare namespace Docs {
	export interface KeyStringAny<T = any> {
		[key: string]: T;
	}

	export interface DrawerOptions extends Props {
		absolute: boolean;
		color: string;
		dark: boolean;
		elevation: number;
	}

	export interface Links {
		changeLog: string;
		github: string;
		githubProfile: string;
		license: string;
		npm: string;
		pnpm: string;
		vResizeDrawer: string;
		vue: string;
		vuetify: string;
		vuetifyGithub: string;
	}

	export interface CodeBlockSettings {
		plugin: string;
		theme: string;
	}

	export interface GlobalClasses extends KeyStringAny<string> {
		appLink: string;
		h2: string;
		h3: string;
		h4: string;
		headerA: string;
	}

	export interface MenuItem {
		href?: string;
		icon?: string;
		items?: MenuItem[];
		key?: string;
		link?: string;
		title: string;
		topTitle?: string;
	}
}
