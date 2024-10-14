/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import {
	CSSProperties,
	MaybeRef,
} from 'vue';
import type { IconOptions, ThemeInstance } from 'vuetify';
import VResizeDrawer from '../VResizeDrawer.vue';
import type {
	VIcon,
	VNavigationDrawer,
} from 'vuetify/components';

export * from '../index';


export type Classes = {
	[key: string]: boolean | undefined;
};

export type EmitEventNames = 'handle:click' | 'handle:dblclick' | 'handle:drag' | 'handle:mousedown' | 'handle:mouseup' | 'handle:touchend' | 'handle:touchmove' | 'handle:touchstart';
export type StorageType = 'local' | 'session';
export type HandlePositions = 'bottom' | 'border' | 'center' | 'top';
export type DrawerLocations = 'bottom' | 'end' | 'start' | 'left' | 'right' | 'top' | undefined;

type Height = number | string | undefined;

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
	handleIconSize?: VIcon['size'];
	handlePosition?: HandlePositions;
	height?: Height;
	image?: VNavigationDrawer['image'];
	location?: DrawerLocations;
	maxHeight?: Height;
	maxWidth?: VNavigationDrawer['width'];
	minHeight?: Height;
	minWidth?: VNavigationDrawer['width'];
	modelValue?: VNavigationDrawer['modelValue'];
	name?: VNavigationDrawer['name'];
	rail?: VNavigationDrawer['rail'];
	railWidth?: VNavigationDrawer['railWidth'];
	resizable?: boolean | undefined;
	saveHeight?: boolean | undefined;
	saveWidth?: boolean | undefined;
	snapBack?: boolean | undefined;
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
			resizedAmount?: MaybeRef<string | number | undefined>;
			resizedWidth?: MaybeRef<string | number | undefined>;
			storageType?: StorageType;
			storageName?: Props['storageName'];
			saveAmount?: Props['saveWidth'] | Props['saveHeight'];
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
			location?: Props['location'],
			maxHeight?: Props['maxHeight'],
			minHeight?: Props['minHeight'],
			maxWidth?: Props['maxWidth'],
			minWidth?: Props['minWidth'],
			rail?: Props['rail'],
			railWidth?: Props['railWidth'],
			resizedAmount: MaybeRef<string | number | undefined>,
			snapBack?: Props['snapBack'],
		}
	): CSSProperties;
}

export interface UseHandleContainerStyles {
	(
		options: {
			borderWidth?: Props['handleBorderWidth'],
			handleColor?: Props['handleColor'],
			iconSize?: Props['handleIconSize'],
			iconSizeUnit?: number,
			location?: Props['location'],
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
