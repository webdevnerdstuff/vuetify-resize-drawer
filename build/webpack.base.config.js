const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const sass = require('sass');
const webpack = require('webpack');
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

/*
 |--------------------------------------------------------------------------
 | Vue Rule
 |--------------------------------------------------------------------------
 */
const vueRule = {
	test: /\.vue$/,
	loader: 'vue-loader',
	exclude: /node_modules/,
};

/*
 |--------------------------------------------------------------------------
 | SCSS Configs
 |--------------------------------------------------------------------------
 */
const scssRule = {
	rules: [
		{
			test: /\.s(c|a)ss$/,
			use: [
				'vue-style-loader',
				'css-loader',
				{
					loader: 'sass-loader',
					options: {
						implementation: sass,
					},
				},
			],
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | JavaScript Rule
 |--------------------------------------------------------------------------
 */
const jsRule = {
	test: /\.js$/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
		},
	},
	exclude: /node_modules/,
};

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		library: 'vuetify-resize-drawer',
		libraryTarget: 'umd',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
	},
	// Resolve done //
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'@': path.join(__dirname, '/src'),
			'@assets': path.join(__dirname, '/src/assets'),
			'@components': path.join(__dirname, '/src/components'),
			'@docs': path.join(__dirname, '/src/docs'),
			'@plugins': path.join(__dirname, '/src/plugins'),
		},
	},
	module: {
		rules: [
			vueRule,
			scssRule,
			jsRule,
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner,
		}),
		new VueLoaderPlugin(),
	],
	infrastructureLogging: {
		level: 'none',
	},
};
