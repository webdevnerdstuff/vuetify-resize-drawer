// eslint.config.js
import eslint from '@eslint/js';
import wdnsConfig from '@wdns/eslint-config-wdns';
import tseslint from 'typescript-eslint';
import AutoImportJson from './.eslintrc-auto-import.json' with { type: 'json' };


export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	...wdnsConfig,
	{
		ignores: [
			'**/cypress/**',
			'**/*.cy.ts',
			'cypress.config.ts',
			'vite.build.config.mts',
			'vite.config.mts',
			'src/playground/configs/templates/PlaygroundPage.vue',
		],
	},
	{
		name: 'app/files-to-lint',
		files: ['**/*.{ts,mts,tsx,vue}'],
		languageOptions: {
			...AutoImportJson,
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				parser: tseslint.parser,
				project: ['./tsconfig.json', './tsconfig.node.json'],
				extraFileExtensions: ['.vue'],
				sourceType: 'module',
			},
		},
		plugins: {
			'typescript-eslint': tseslint.plugin,
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
			},
		},
	},
);
