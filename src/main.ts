import '@/libraries/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVCodeBlock } from '@wdns/vue-code-block';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { createVResizeDrawer } from './plugin/index';
import { registerPlugins } from './plugins';


const app = createApp(App);

app.use(createVCodeBlock());
app.use(createVResizeDrawer());
app.use(createPinia());

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
