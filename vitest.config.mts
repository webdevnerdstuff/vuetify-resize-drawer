import { fileURLToPath } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config.mts';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			exclude: [
				...configDefaults.exclude,
			],
			root: fileURLToPath(new URL('./', import.meta.url)),
			server: {
				deps: {
					inline: ['element-plus', 'vuetify-resize-drawer', 'vuetify']
				}
			},
		}
	})
);
