import Vue from 'vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

dom.watch();

Vue.component('FaIcon', FontAwesomeIcon);
Vue.component('VIcon', FontAwesomeIcon);

library.add(
	fab,
	far,
	fas,
);

export default {};
