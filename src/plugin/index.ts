import { type App, defineAsyncComponent } from 'vue';
import type { GlobalOptions } from './types';
import './styles/main.scss';
import VResizeDrawer from './VResizeDrawer.vue';


export const globalOptions = Symbol();

export function createVResizeDrawer(options: GlobalOptions = {}) {
	const install = (app: App) => {
		app.provide(globalOptions, options);

		app.component('VResizeDrawer', defineAsyncComponent(() => import('./VResizeDrawer.vue')));
	};

	return {
		install,
	};
}

export default VResizeDrawer;

export {VResizeDrawer};

export * from './types';
