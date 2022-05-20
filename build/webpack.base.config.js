const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const sass = require('sass');

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
		new VueLoaderPlugin(),
	],
	infrastructureLogging: {
		level: 'none',
	},
};
