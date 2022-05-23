const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const packageJson = require('../package.json');

/*
 |--------------------------------------------------------------------------
 | Banner
 |--------------------------------------------------------------------------
 */
const banner = `Vuetify Resize Drawer

 @name ${packageJson.name}
 @version ${packageJson.version}
 @description ${packageJson.description}
 @author ${packageJson.author}
 @copyright Copyright ${new Date().getFullYear()}, WebDevNerdStuff
 @homepage ${packageJson.homepage}
 @repository ${packageJson.repository}
 @license https://github.com/webdevnerdstuff/vuetify-resize-drawer/blob/main/LICENSE.md
 `;

module.exports = merge(base, {
	mode: 'production',
	plugins: [
		new webpack.BannerPlugin({
			banner,
		}),
	],
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
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
});
