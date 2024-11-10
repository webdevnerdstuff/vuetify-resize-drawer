import '@/libraries/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createVResizeDrawer } from '../../plugin/index';
import { registerPlugins } from '../../plugins';
import PlaygroundApp from './PlaygroundApp.vue';


const app = createApp(PlaygroundApp);

app.use(createVResizeDrawer());

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');
