import ResizeDrawer from './components/ResizeDrawer.vue';

const VuetifyResizeDrawer = {
	install(Vue, options = {}) {
		Vue.component(ResizeDrawer.name, ResizeDrawer);
	},
};

export default VuetifyResizeDrawer;
