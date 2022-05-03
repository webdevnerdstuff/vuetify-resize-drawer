import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			light: {
				primary: '#1867c0',
				secondary: '#5cbbf6',
				accent: '#905',
				error: '#ff5252',
				info: '#2196f3',
				success: '#690',
				warning: '#fb8c00',
				operators: '#9a6e3a',
			},
			dark: {
				primary: '#099FFF',
				secondary: '#cc00ff',
				accent: '#cd0373',
				error: '#ff5252',
				info: '#fe019a',
				success: '#8cd302',
				warning: '#ffff00',
				operators: '#9a6e3a',
			},
		},
	},
};

export default new Vuetify(opts);
