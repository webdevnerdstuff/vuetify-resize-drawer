import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import fa from '../libraries/fontawesome';

// Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.use(Vuetify);

const opts = {
	// fa,
	// icons: {
	// 	iconfont: 'faSvg',
	// },
	theme: {
		themes: {
			dark: {
				accent: '#d00274',
				danger: colors.red.base,
				error: colors.red.base,
				info: colors.teal.base,
				operators: '#9a6e3a',
				primary: colors.blue.darken2,
				secondary: colors.purple.base,
				success: colors.green.base,
				warning: colors.orange.darken3,
			},
			light: {
				accent: '#905',
				danger: colors.red.base,
				error: colors.red.base,
				info: colors.teal.darken1,
				operators: '#9a6e3a',
				primary: colors.blue.base,
				secondary: colors.purple.lighten1,
				success: colors.green.base,
				warning: colors.orange.base,
			},
		},
	},
};

export default new Vuetify(opts);
