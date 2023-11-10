import { CSSProperties, MaybeRef } from 'vue';
import type { IconOptions, ThemeInstance } from 'vuetify';
import type { VNavigationDrawer } from 'vuetify/components';
export type Classes = {
    [key: string]: boolean | undefined;
};
export type EmitEventNames = 'handle:click' | 'handle:dblclick' | 'handle:drag' | 'handle:mousedown' | 'handle:mouseup' | 'handle:touchend' | 'handle:touchmove' | 'handle:touchstart';
export type StorageType = 'local' | 'session';
export type HandlePositions = 'bottom' | 'border' | 'center' | 'top';
export type DrawerLocations = 'end' | 'start' | 'left' | 'right' | undefined;
export type HEXColor = string;
export type HSLColor = [number, number, number];
export type RGBColor = [number, number, number];
export interface Props {
    absolute?: VNavigationDrawer['$props']['absolute'];
    expandOnHover?: VNavigationDrawer['$props']['expandOnHover'];
    floating?: VNavigationDrawer['$props']['floating'];
    handleBorderWidth?: number | string;
    handleColor?: string | undefined;
    handleIcon?: string | undefined;
    handleIconSize?: string | undefined;
    handlePosition?: HandlePositions;
    height?: number | string | undefined;
    location?: DrawerLocations;
    maxWidth?: VNavigationDrawer['$props']['width'];
    minWidth?: VNavigationDrawer['$props']['width'];
    modelValue?: VNavigationDrawer['$props']['modelValue'];
    name?: string;
    rail?: VNavigationDrawer['$props']['rail'];
    railWidth?: VNavigationDrawer['$props']['railWidth'];
    resizable?: boolean | undefined;
    saveWidth?: boolean | undefined;
    storageName?: string | undefined;
    storageType?: StorageType;
    tag?: VNavigationDrawer['$props']['tag'];
    temporary?: VNavigationDrawer['$props']['temporary'];
    touchless?: boolean | undefined;
    theme?: VNavigationDrawer['$props']['theme'];
    width?: VNavigationDrawer['$props']['width'];
    widthSnapBack?: boolean | undefined;
}
export interface UseConvertToUnit {
    (options: {
        str: string | number;
        unit?: string;
    }): string | void;
}
export interface UseSetStorage {
    (options: {
        action?: string;
        resizedWidth?: MaybeRef<string | number | undefined>;
        storageType?: StorageType;
        storageName?: Props['storageName'];
        saveWidth?: Props['saveWidth'];
        rail?: Props['rail'];
    }): void;
}
export interface UseDrawerClasses {
    (options: {
        absolute?: Props['absolute'];
        expandOnHover?: Props['expandOnHover'];
        floating?: Props['floating'];
        isMouseover?: MaybeRef<boolean>;
        location?: Props['location'];
        rail?: Props['rail'];
        railWidth?: Props['railWidth'];
        temporary?: Props['temporary'];
    }): object;
}
export interface UseHandleContainerClasses {
    (options: {
        handlePosition?: Props['handlePosition'];
        drawerLocation?: Props['location'];
    }): object;
}
export interface UseHandleIconClasses {
    (options: {
        handlePosition?: Props['handlePosition'];
        iconOptions?: IconOptions;
        isUserIcon?: boolean;
        drawerLocation?: Props['location'];
    }): object;
}
export interface UseDrawerStyles {
    (options: {
        isMouseDown?: MaybeRef<boolean>;
        maxWidth?: Props['maxWidth'];
        minWidth?: Props['minWidth'];
        rail?: Props['rail'];
        railWidth?: Props['railWidth'];
        resizedWidth: MaybeRef<string | number | undefined>;
        widthSnapBack?: Props['widthSnapBack'];
    }): CSSProperties;
}
export interface UseHandleContainerStyles {
    (options: {
        borderWidth?: Props['handleBorderWidth'];
        handleColor?: Props['handleColor'];
        iconSize?: Props['handleIconSize'];
        position?: Props['handlePosition'];
        theme: ThemeInstance;
    }): CSSProperties;
}
export interface UseHandleIconStyles {
    (options: {
        color?: Props['handleColor'];
        theme: ThemeInstance;
    }): CSSProperties;
}
export interface UseGetIcon {
    (options: {
        icon: string | undefined;
        iconOptions: IconOptions | undefined;
        position: Props['handlePosition'];
    }): string;
}
