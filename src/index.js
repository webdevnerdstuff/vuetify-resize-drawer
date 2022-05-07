import VResizeDrawer from './components/VResizeDrawer.vue';

const VuetifyResizeDrawer = {
	install(Vue, options = {}) {
		Vue.component(VResizeDrawer.name, VResizeDrawer);
	},
};

export default VuetifyResizeDrawer;
