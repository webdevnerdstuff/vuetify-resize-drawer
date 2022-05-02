const { merge } = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const path = require('path');
const sass = require('sass');
const base = require('./webpack.base.config');
const packageJson = require('../package.json');

const devServerPort = 8080;

/*
 |--------------------------------------------------------------------------
 | Eslint Options
 |--------------------------------------------------------------------------
 */
const eslintOptions = {
	extensions: ['js', 'vue'],
	exclude: [
		'./node_modules/**/*',
		'./vendor/**/*',
		'./assets/**/*',
	],
	emitWarning: true,
	fix: true,
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
 | File Configs
 |--------------------------------------------------------------------------
 */
const fileRule = {
	rules: [
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						outputPath: 'images',
						esModule: false,
						name: '[name].[ext]',
					},
				},
			],
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | SVG Inline Loader Configs
 |--------------------------------------------------------------------------
 */
const svgRule = {
	rules: [
		{
			test: /\.svg$/,
			loader: 'svg-inline-loader',
		},
	],
};

/*
 |--------------------------------------------------------------------------
 | Stylelint Options
 |--------------------------------------------------------------------------
 */
const stylelintOptions = {
	ignoreFiles: [
		'./node_modules/**/*.vue',
	],
	customSyntax: 'postcss-html',
	files: ['./src/docs/**/*.vue'],
	fix: true,
};

/*
 |--------------------------------------------------------------------------
 | BrowserSyncPlugin Options
 |--------------------------------------------------------------------------
 */
const browserSyncOptions = {
	host: 'localhost',
	logLevel: 'silent',
	notify: false,
	open: true,
	port: devServerPort,
	proxy: `localhost:${devServerPort}`,
	ui: false,
	watch: true,
	snippetOptions: {
		rule: {
			match: /<\/head>/u,
			fn(snippet, match) {
				const { groups: { src } } = /src='(?<src>[^']+)'/u.exec(snippet);

				return `<script src="${src}" async></script>${match}`;
			},
		},
	},
};

/*
 |--------------------------------------------------------------------------
 | HtmlWebpackPlugin Options
 |--------------------------------------------------------------------------
 */
const packageTitle = 'Vuetify Resize Drawer';

const htmlWebpackOptions = {
	inject: 'body',
	template: './templates/index.html',
	title: packageTitle,
	minify: true,
	hash: true,
	meta: {
		// meta //
		base: 'https://webdevnerdstuff.github.io/vuetify-resize-drawer/',
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
		keywords: packageJson.keywords.join(', '),
		description: packageJson.description,
		author: packageJson.author,
		robots: 'index, follow',
		googlebot: 'index, follow',
		rating: 'General',
		'theme-color': '#21252a',
		// Facebook Social //
		'og:type': 'website',
		'og:title': packageTitle,
		'og:image': 'https://webdevnerdstuff.github.io/vuetify-resize-drawer/images/vuetify-resize-drawer-social.jpg',
		'og:image:alt': packageJson.description,
		'og:image:width': '1200',
		'og:image:height': '630',
		'og:description': packageJson.description,
		'og:site_name': packageTitle,
		'og:locale': 'en_US',
	},
};

/*
 |--------------------------------------------------------------------------
 | Plugins
 |--------------------------------------------------------------------------
 */
const plugins = [
	new BrowserSyncPlugin(browserSyncOptions),
	new ESLintPlugin(eslintOptions),
	new HtmlWebpackPlugin(htmlWebpackOptions),
	new StylelintPlugin(stylelintOptions),
	new VuetifyLoaderPlugin(),
];

module.exports = merge(base, {
	mode: 'development',
	entry: path.resolve(__dirname, '../src/main.js'),
	output: {
		clean: true,
		filename: 'vuetify-resize-drawer.js',
		path: path.resolve(__dirname, '../docs'),
		publicPath: '',
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					format: {
						comments: false,
					},
				},
				extractComments: false,
			}),
		],
	},
	context: path.join(__dirname, '../src'),
	devServer: {
		client: {
			overlay: {
				errors: true,
				warnings: false,
			},
		},
		compress: true,
		devMiddleware: {
			publicPath: '/docs',
			serverSideRender: true,
			writeToDisk: true,
		},
		hot: false,
		static: path.join(__dirname, '../docs'),
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			fileRule,
			scssRule,
			svgRule,
		],
	},
	plugins,
	stats: {
		assets: false,
		builtAt: true,
		chunkGroups: false,
		chunkModules: false,
		chunkOrigins: false,
		chunks: false,
		colors: true,
		entrypoints: false,
		errorDetails: true,
		errors: true,
		hash: false,
		modules: false,
		moduleTrace: false,
		performance: true,
		publicPath: false,
		usedExports: false,
		version: false,
		warnings: true,
	},
});
