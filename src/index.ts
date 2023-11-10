import { App, Plugin } from 'vue';
import { VResizeDrawer } from '@/plugin';

const install = (app: App) => {
	app.component('VResizeDrawer', VResizeDrawer);
};

VResizeDrawer.install = install;

export default VResizeDrawer as unknown as Plugin;
