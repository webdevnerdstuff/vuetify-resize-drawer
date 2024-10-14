import { App } from 'vue';
import { GlobalOptions } from './types';
import { default as VResizeDrawer } from './VResizeDrawer.vue';
export declare const globalOptions: unique symbol;
export declare function createVResizeDrawer(options?: GlobalOptions): {
    install: (app: App) => void;
};
export default VResizeDrawer;
export { VResizeDrawer, };
