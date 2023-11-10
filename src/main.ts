import '@/libraries/fontawesome';
import App from './App.vue';
import CodeBlock from '@wdns/vue-code-block';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from './plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VResizeDrawer from './index';

const app = createApp(App);
app.use(CodeBlock);
app.use(createPinia());

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('FaIcon', FontAwesomeIcon);
app.component('VResizeDrawer', VResizeDrawer);

registerPlugins(app);

app.mount('#app');
