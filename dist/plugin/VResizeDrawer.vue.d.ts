import { Props } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    absolute?: boolean | undefined;
    expandOnHover?: boolean | undefined;
    floating?: boolean | undefined;
    handleBorderWidth?: string | number | undefined;
    handleColor?: string | undefined;
    handleIcon?: string | undefined;
    handleIconSize?: string | undefined;
    handlePosition?: import('./types').HandlePositions | undefined;
    height?: string | number | undefined;
    image?: string | undefined;
    location?: import('./types').DrawerLocations;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    modelValue?: boolean | null | undefined;
    name?: string | undefined;
    rail?: boolean | null | undefined;
    railWidth?: string | number | undefined;
    resizable?: boolean | undefined;
    saveWidth?: boolean | undefined;
    storageName?: string | undefined;
    storageType?: import('./types').StorageType | undefined;
    tag?: string | undefined;
    temporary?: boolean | undefined;
    theme?: string | undefined;
    touchless?: boolean | undefined;
    width?: string | number | undefined;
    widthSnapBack?: boolean | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    "drawer:mouseenter": (...args: any[]) => void;
    "drawer:mouseleave": (...args: any[]) => void;
    "handle:click": (...args: any[]) => void;
    "handle:dblclick": (...args: any[]) => void;
    "handle:drag": (...args: any[]) => void;
    "handle:mousedown": (...args: any[]) => void;
    "handle:mouseup": (...args: any[]) => void;
    "handle:touchend": (...args: any[]) => void;
    "handle:touchmove": (...args: any[]) => void;
    "handle:touchstart": (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    absolute?: boolean | undefined;
    expandOnHover?: boolean | undefined;
    floating?: boolean | undefined;
    handleBorderWidth?: string | number | undefined;
    handleColor?: string | undefined;
    handleIcon?: string | undefined;
    handleIconSize?: string | undefined;
    handlePosition?: import('./types').HandlePositions | undefined;
    height?: string | number | undefined;
    image?: string | undefined;
    location?: import('./types').DrawerLocations;
    maxWidth?: string | number | undefined;
    minWidth?: string | number | undefined;
    modelValue?: boolean | null | undefined;
    name?: string | undefined;
    rail?: boolean | null | undefined;
    railWidth?: string | number | undefined;
    resizable?: boolean | undefined;
    saveWidth?: boolean | undefined;
    storageName?: string | undefined;
    storageType?: import('./types').StorageType | undefined;
    tag?: string | undefined;
    temporary?: boolean | undefined;
    theme?: string | undefined;
    touchless?: boolean | undefined;
    width?: string | number | undefined;
    widthSnapBack?: boolean | undefined;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onDrawer:mouseenter"?: ((...args: any[]) => any) | undefined;
    "onDrawer:mouseleave"?: ((...args: any[]) => any) | undefined;
    "onHandle:click"?: ((...args: any[]) => any) | undefined;
    "onHandle:dblclick"?: ((...args: any[]) => any) | undefined;
    "onHandle:drag"?: ((...args: any[]) => any) | undefined;
    "onHandle:mousedown"?: ((...args: any[]) => any) | undefined;
    "onHandle:mouseup"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchend"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchmove"?: ((...args: any[]) => any) | undefined;
    "onHandle:touchstart"?: ((...args: any[]) => any) | undefined;
}, {
    theme: string;
    tag: string;
    name: string;
    absolute: boolean;
    expandOnHover: boolean;
    floating: boolean;
    modelValue: boolean | null;
    rail: boolean | null;
    railWidth: string | number;
    image: string;
    temporary: boolean;
    touchless: boolean;
    width: string | number;
    location: "start" | "end" | "left" | "right";
    saveWidth: boolean;
    storageName: string;
    storageType: import('./types').StorageType;
    handlePosition: import('./types').HandlePositions;
    handleColor: string;
    handleBorderWidth: string | number;
    handleIconSize: string;
    height: string | number;
    maxWidth: string | number;
    minWidth: string | number;
    widthSnapBack: boolean;
    handleIcon: string;
    resizable: boolean;
}, {}>, {
    handle?(_: {}): any;
    prepend?(_: {}): any;
    default?(_: {}): any;
    append?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
