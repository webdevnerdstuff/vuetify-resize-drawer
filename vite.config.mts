import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import eslint from 'vite-plugin-eslint2';
import stylelint from 'vite-plugin-stylelint';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import vueDevTools from 'vite-plugin-vue-devtools';

const baseUrl = '/vuetify-resize-drawer/';
const playgroundUrl = baseUrl + 'playground/';


export default defineConfig({
	base: baseUrl,
	build: {
		outDir: 'docs',
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				importers: [],
			},
		},
	},
	plugins: [
		eslint({
			fix: true,
			exclude: ['node_modules/**', 'vendor/**'],
			include: ['src/**/*.{ts,mts,tsx,vue}'],
		}),
		stylelint({
			cache: false,
			fix: true,
			include: [
				'src/**/*.{css,scss,sass,vue}',
				'./src/components/**/*.{css,scss,sass,vue}',
				'./src/plugin/styles/*.{css,scss,sass}'
			],
		}),
		AutoImport({
			dts: false,
			imports: [
				'vue',
				{
					vue: ['CSSProperties'],
					vuetify: ['useTheme']
				}
			],
			vueTemplate: true,
		}),
		vue({
			template: { transformAssetUrls }
		}),
		vuetify({
			autoImport: true,
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/plugin/components', import.meta.url)),
			'@composables': fileURLToPath(new URL('./src/plugin/composables', import.meta.url)),
			'@plugin': fileURLToPath(new URL('./src/plugin', import.meta.url)),
			'@root': fileURLToPath(new URL('.', import.meta.url)),
			'@slots': fileURLToPath(new URL('./src/plugin/slots', import.meta.url)),
			'@types': fileURLToPath(new URL('./src/plugin/types', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/plugin/utils', import.meta.url)),
		},
		extensions: [
			'.js',
			'.json',
			'.jsx',
			'.mjs',
			'.mts',
			'.ts',
			'.tsx',
			'.vue',
		],
	},
	server: {
		hmr: {
			protocol: 'ws',
		},
		open: process?.env?.NODE_ENV === 'playground' ? playgroundUrl : false,
	},
});

export const assetAttrsConfig: Record<string, string[]> = {
	link: ['href'],
	video: ['src', 'poster'],
	source: ['src', 'srcset'],
	img: ['src', 'srcset'],
	image: ['xlink:href', 'href'],
	use: ['xlink:href', 'href']
};
