/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
	CSSProperties,
	MaybeRef,
} from 'vue';
import type { IconOptions, ThemeInstance } from 'vuetify';
import VResizeDrawer from '../VResizeDrawer.vue';
import type {
	VNavigationDrawer,
} from 'vuetify/components';

export * from '../index';


export type Classes = {
	[key: string]: boolean | undefined;
};

export type EmitEventNames = 'handle:click' | 'handle:dblclick' | 'handle:drag' | 'handle:mousedown' | 'handle:mouseup' | 'handle:touchend' | 'handle:touchmove' | 'handle:touchstart';
export type StorageType = 'local' | 'session';
export type HandlePositions = 'bottom' | 'border' | 'center' | 'top';
export type DrawerLocations = 'end' | 'start' | 'left' | 'right' | undefined;


// -------------------------------------------------- Colors //
export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];


// -------------------------------------------------- Props //
export interface Props {
	absolute?: VNavigationDrawer['absolute'];
	expandOnHover?: VNavigationDrawer['expandOnHover'];
	floating?: VNavigationDrawer['floating'];
	handleBorderWidth?: number | string;
	handleColor?: string | undefined;
	handleIcon?: string | undefined;
	handleIconSize?: string | undefined;
	handlePosition?: HandlePositions;
	height?: number | string | undefined;
	image?: VNavigationDrawer['image'];
	location?: DrawerLocations;
	maxWidth?: VNavigationDrawer['width'];
	minWidth?: VNavigationDrawer['width'];
	modelValue?: VNavigationDrawer['modelValue'];
	name?: VNavigationDrawer['name'];
	rail?: VNavigationDrawer['rail'];
	railWidth?: VNavigationDrawer['railWidth'];
	resizable?: boolean | undefined;
	saveWidth?: boolean | undefined;
	storageName?: string | undefined;
	storageType?: StorageType;
	tag?: VNavigationDrawer['tag'];
	temporary?: VNavigationDrawer['temporary'];
	theme?: VNavigationDrawer['theme'];
	touchless?: boolean | undefined;
	width?: VNavigationDrawer['width'];
	widthSnapBack?: boolean | undefined;
}

export interface GlobalOptions extends Props { }


// -------------------------------------------------- Composables //

// ------------------------- Helpers //
export interface UseConvertToUnit {
	(
		options: {
			unit?: string,
			value: string | number,
		}
	): string | void;
}

// ------------------------- Storage //
export interface UseSetStorage {
	(
		options: {
			action?: string;
			resizedWidth?: MaybeRef<string | number | undefined>;
			storageType?: StorageType;
			storageName?: Props['storageName'];
			saveWidth?: Props['saveWidth'];
			rail?: Props['rail'];
		}
	): void;
}

// ------------------------- Classes //
export interface UseDrawerClasses {
	(
		options: {
			absolute?: Props['absolute'],
			expandOnHover?: Props['expandOnHover'],
			floating?: Props['floating'],
			isMouseover?: MaybeRef<boolean>,
			location?: Props['location'],
			rail?: Props['rail'],
			railWidth?: Props['railWidth'],
			temporary?: Props['temporary'],
		}
	): object;
}

export interface UseHandleContainerClasses {
	(
		options: {
			handlePosition?: Props['handlePosition'],
			drawerLocation?: Props['location'],
		}
	): object;
}

export interface UseHandleIconClasses {
	(
		options: {
			handlePosition?: Props['handlePosition'],
			iconOptions?: IconOptions,
			isUserIcon?: boolean,
			drawerLocation?: Props['location'],
		}
	): object;
}

// ------------------------- Styles //
export interface UseDrawerStyles {
	(
		options: {
			isMouseDown?: MaybeRef<boolean>,
			maxWidth?: Props['maxWidth'],
			minWidth?: Props['minWidth'],
			rail?: Props['rail'],
			railWidth?: Props['railWidth'],
			resizedWidth: MaybeRef<string | number | undefined>,
			widthSnapBack?: Props['widthSnapBack'],
		}
	): CSSProperties;
}

export interface UseHandleContainerStyles {
	(
		options: {
			borderWidth?: Props['handleBorderWidth'],
			handleColor?: Props['handleColor'],
			iconSize?: Props['handleIconSize'],
			position?: Props['handlePosition'],
			theme: ThemeInstance,
		}
	): CSSProperties;
}

export interface UseHandleIconStyles {
	(
		options: {
			color?: Props['handleColor'],
			theme: ThemeInstance,
		}
	): CSSProperties;
}

// ------------------------ Icons //
export interface UseGetIcon {
	(
		options: {
			icon: Props['handleIcon'];
			iconOptions: IconOptions | undefined;
			name: Props['handlePosition'],
		}
	): Props['handleIcon'];
}


declare module "vue" {
	interface ComponentCustomProperties { }

	interface GlobalComponents {
		VResizeDrawer: typeof VResizeDrawer;
	}
}
