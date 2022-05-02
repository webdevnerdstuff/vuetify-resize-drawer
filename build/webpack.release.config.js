const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false,
			}),
		],
	},
	output: {
		filename: 'vuetify-resize-drawer.js',
	},
});
