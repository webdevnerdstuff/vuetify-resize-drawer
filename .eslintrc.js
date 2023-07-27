module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:vue/essential',
	],
	overrides: [
		{
			files: [
				'**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 12,
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		sourceType: 'module',
	},
	plugins: [
		'import',
		'vue',
		'@babel',
	],
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		'brace-style': ['error', 'stroustrup'],
		'default-case': [
			'error', {
				commentPattern: '^skip\\sdefault',
			},
		],
		'func-names': ['error', 'never'],
		'function-paren-newline': 0,
		'implicit-arrow-linebreak': ['warn', 'beside'],
		'import/no-extraneous-dependencies': 0,
		'import/no-self-import': 0,
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': 0,
		'max-len': 0,
		'no-console': ['warn', { allow: ['warn', 'error', 'info', 'trace'] }],
		'no-const-assign': 'error',
		'no-debugger': 0,
		'no-else-return': ['error', { allowElseIf: true }],
		'no-new': 0,
		'no-param-reassign': [
			'error', {
				ignorePropertyModificationsFor: ['field', 'model', 'el', 'item', 'state', 'Vue', 'vue'],
				props: true,
			},
		],
		'no-plusplus': [
			'error', { allowForLoopAfterthoughts: true },
		],
		'no-tabs': [0, { allowIndentationTabs: true }],
		'no-undef': 0,
		'no-underscore-dangle': [
			'error', {
				allow: ['_data'],
				allowAfterThis: true,
			},
		],
		'no-unused-vars': 1,
		'no-use-before-define': 0,
		'no-useless-escape': 0,
		'object-curly-newline': ['error', {
			ObjectPattern: { multiline: true },
		}],
		'operator-linebreak': ['error', 'after'],
		'prefer-destructuring': [
			'error', {
				array: false,
				object: false,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			asyncArrow: 'always',
			named: 'never',
		}],
		'vue/attributes-order': ['error', {
			alphabetical: true,
			order: [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
		}],
		'vue/html-closing-bracket-newline': 0,
		'vue/html-indent': 0,
		'vue/html-self-closing': 0,
		'vue/max-attributes-per-line': 0,
		'vue/no-multiple-template-root': 0,
		'vue/no-template-shadow': 0,
		'vue/no-v-for-template-key': 0,
		'vue/no-v-html': 0,
		'vue/singleline-html-element-content-newline': 0,
		// 'vue/sort-keys': ['error', 'asc', {
		// 	caseSensitive: true,
		// 	ignoreChildrenOf: ['extend', 'model', 'defineProps'],
		// 	ignoreGrandchildrenOf: ['computed', 'directives', 'inject', 'props', 'watch', 'defineProps'],
		// 	minKeys: 2,
		// 	natural: true,
		// }],
		'vue/valid-template-root': 0,
	},
};
