import { VNavigationDrawer } from 'vuetify/components';
import { Props } from './types';
declare function __VLS_template(): {
    slots: {
        handle?(_: {}): any;
        prepend?(_: {}): any;
        default?(_: {}): any;
        append?(_: {}): any;
    };
    refs: {
        resizeDrawer: import('vue').CreateComponentPublicInstance<{
            absolute: boolean;
            location: "end" | "start" | "left" | "top" | "bottom" | "right";
            width: string | number;
            order: string | number;
            style: import('vue').StyleValue;
            mobile: boolean | null;
            temporary: boolean;
            persistent: boolean;
            tag: string;
            sticky: boolean;
            modelValue: boolean | null;
            tile: boolean;
            floating: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean | null;
            railWidth: string | number;
        } & {
            name?: string | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            image?: string | undefined;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            mobileBreakpoint?: number | ("xs" | "sm" | "md" | "lg" | "xl" | "xxl") | undefined;
            rounded?: string | number | boolean | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
        } & {
            $children?: import('vue').VNodeChild | (() => import('vue').VNodeChild) | {
                default?: (() => import('vue').VNodeChild) | undefined;
                prepend?: (() => import('vue').VNodeChild) | undefined;
                append?: (() => import('vue').VNodeChild) | undefined;
                image?: ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => import('vue').VNodeChild) | undefined;
                prepend?: false | (() => import('vue').VNodeChild) | undefined;
                append?: false | (() => import('vue').VNodeChild) | undefined;
                image?: false | ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:append"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:image"?: false | ((arg: {
                image: string | undefined;
            }) => import('vue').VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
            "onUpdate:rail"?: ((val: boolean) => any) | undefined;
        }, {
            isStuck: import('vue').ShallowRef<boolean | "top" | "bottom">;
        }, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            'update:modelValue': (val: boolean) => true;
            'update:rail': (val: boolean) => true;
        }, import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & {
            absolute: boolean;
            location: "end" | "start" | "left" | "top" | "bottom" | "right";
            width: string | number;
            order: string | number;
            style: import('vue').StyleValue;
            mobile: boolean | null;
            temporary: boolean;
            persistent: boolean;
            tag: string;
            sticky: boolean;
            modelValue: boolean | null;
            tile: boolean;
            floating: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean | null;
            railWidth: string | number;
        } & {
            name?: string | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            image?: string | undefined;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            mobileBreakpoint?: number | ("xs" | "sm" | "md" | "lg" | "xl" | "xxl") | undefined;
            rounded?: string | number | boolean | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
        } & {
            $children?: import('vue').VNodeChild | (() => import('vue').VNodeChild) | {
                default?: (() => import('vue').VNodeChild) | undefined;
                prepend?: (() => import('vue').VNodeChild) | undefined;
                append?: (() => import('vue').VNodeChild) | undefined;
                image?: ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => import('vue').VNodeChild) | undefined;
                prepend?: false | (() => import('vue').VNodeChild) | undefined;
                append?: false | (() => import('vue').VNodeChild) | undefined;
                image?: false | ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:append"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:image"?: false | ((arg: {
                image: string | undefined;
            }) => import('vue').VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
            "onUpdate:rail"?: ((val: boolean) => any) | undefined;
        }, {
            absolute: boolean;
            location: "end" | "start" | "left" | "top" | "bottom" | "right";
            width: string | number;
            order: string | number;
            style: import('vue').StyleValue;
            mobile: boolean | null;
            temporary: boolean;
            persistent: boolean;
            tag: string;
            sticky: boolean;
            modelValue: boolean | null;
            rounded: string | number | boolean;
            tile: boolean;
            floating: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean | null;
            railWidth: string | number;
        }, true, {}, import('vue').SlotsType<Partial<{
            default: () => globalThis.VNode[];
            prepend: () => globalThis.VNode[];
            append: () => globalThis.VNode[];
            image: (arg: {
                image: string | undefined;
            }) => globalThis.VNode[];
        }>>, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, {
            absolute: boolean;
            location: "end" | "start" | "left" | "top" | "bottom" | "right";
            width: string | number;
            order: string | number;
            style: import('vue').StyleValue;
            mobile: boolean | null;
            temporary: boolean;
            persistent: boolean;
            tag: string;
            sticky: boolean;
            modelValue: boolean | null;
            tile: boolean;
            floating: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean | null;
            railWidth: string | number;
        } & {
            name?: string | undefined;
            border?: string | number | boolean | undefined;
            color?: string | undefined;
            image?: string | undefined;
            class?: any;
            theme?: string | undefined;
            elevation?: string | number | undefined;
            mobileBreakpoint?: number | ("xs" | "sm" | "md" | "lg" | "xl" | "xxl") | undefined;
            rounded?: string | number | boolean | undefined;
            closeDelay?: string | number | undefined;
            openDelay?: string | number | undefined;
        } & {
            $children?: import('vue').VNodeChild | (() => import('vue').VNodeChild) | {
                default?: (() => import('vue').VNodeChild) | undefined;
                prepend?: (() => import('vue').VNodeChild) | undefined;
                append?: (() => import('vue').VNodeChild) | undefined;
                image?: ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            };
            'v-slots'?: {
                default?: false | (() => import('vue').VNodeChild) | undefined;
                prepend?: false | (() => import('vue').VNodeChild) | undefined;
                append?: false | (() => import('vue').VNodeChild) | undefined;
                image?: false | ((arg: {
                    image: string | undefined;
                }) => import('vue').VNodeChild) | undefined;
            } | undefined;
        } & {
            "v-slot:default"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:prepend"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:append"?: false | (() => import('vue').VNodeChild) | undefined;
            "v-slot:image"?: false | ((arg: {
                image: string | undefined;
            }) => import('vue').VNodeChild) | undefined;
        } & {
            "onUpdate:modelValue"?: ((val: boolean) => any) | undefined;
            "onUpdate:rail"?: ((val: boolean) => any) | undefined;
        }, {
            isStuck: import('vue').ShallowRef<boolean | "top" | "bottom">;
        }, {}, {}, {}, {
            absolute: boolean;
            location: "end" | "start" | "left" | "top" | "bottom" | "right";
            width: string | number;
            order: string | number;
            style: import('vue').StyleValue;
            mobile: boolean | null;
            temporary: boolean;
            persistent: boolean;
            tag: string;
            sticky: boolean;
            modelValue: boolean | null;
            rounded: string | number | boolean;
            tile: boolean;
            floating: boolean;
            scrim: string | boolean;
            touchless: boolean;
            disableResizeWatcher: boolean;
            disableRouteWatcher: boolean;
            expandOnHover: boolean;
            permanent: boolean;
            rail: boolean | null;
            railWidth: string | number;
        }> | null;
    };
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    location: "bottom" | "end" | "start" | "left" | "right" | "top";
    absolute: VNavigationDrawer["absolute"];
    theme: string;
    tag: VNavigationDrawer["tag"];
    name: string;
    expandOnHover: VNavigationDrawer["expandOnHover"];
    floating: VNavigationDrawer["floating"];
    modelValue: VNavigationDrawer["modelValue"];
    rail: VNavigationDrawer["rail"];
    railWidth: VNavigationDrawer["railWidth"];
    image: string;
    temporary: VNavigationDrawer["temporary"];
    touchless: boolean;
    width: VNavigationDrawer["width"];
    handlePosition: import('./types').HandlePositions;
    handleIconSize: import('vuetify/lib/components/index.mjs').VIcon["size"];
    handleIcon: string;
    saveWidth: boolean;
    saveHeight: boolean;
    storageName: string;
    storageType: import('./types').StorageType;
    handleColor: string;
    height: string | number;
    maxWidth: VNavigationDrawer["width"];
    minWidth: VNavigationDrawer["width"];
    snapBack: boolean;
    maxHeight: string | number;
    minHeight: string | number;
    handleBorderWidth: number | string;
    resizable: boolean;
    widthSnapBack: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
