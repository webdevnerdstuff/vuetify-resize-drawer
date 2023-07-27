import Vue from 'vue';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import VResizeDrawer from './index';

Vue.config.productionTip = false;
Vue.component('VResizeDrawer', VResizeDrawer);

new Vue({
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
