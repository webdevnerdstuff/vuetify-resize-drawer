import '@/libraries/fontawesome';
import PlaygroundApp from './PlaygroundApp.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { registerPlugins } from '../../plugins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createVResizeDrawer } from '../../plugin/index';


const app = createApp(PlaygroundApp);

app.use(createVResizeDrawer());

app.use(createPinia());
app.component('font-awesome-icon', FontAwesomeIcon);

app.component('FaIcon', FontAwesomeIcon);

registerPlugins(app);

app.mount('#app');