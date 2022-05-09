import Vue from 'vue';
import vuetify from '@plugins/vuetify';
import UnicornLog from 'vue-unicorn-log';
import App from './App.vue';

Vue.use(UnicornLog);

Vue.config.productionTip = false;

new Vue({
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
