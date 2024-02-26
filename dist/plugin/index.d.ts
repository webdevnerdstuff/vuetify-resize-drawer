import type { App } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VResizeDrawer from './VResizeDrawer.vue';
export declare const globalOptions: unique symbol;
export declare function createVResizeDrawer(options?: GlobalOptions): {
    install: (app: App) => void;
};
export default VResizeDrawer;
export { VResizeDrawer, };
