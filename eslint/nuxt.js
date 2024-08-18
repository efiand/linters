import nuxtPlugin from '@nuxt/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import pluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import pluginImport from 'eslint-plugin-import-x';
import perfectionist from 'eslint-plugin-perfectionist';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import * as parserVue from 'vue-eslint-parser';

const INLINE_ELEMENTS = [
	'a',
	'abbr',
	'audio',
	'b',
	'bdi',
	'bdo',
	'canvas',
	'cite',
	'code',
	'data',
	'del',
	'dfn',
	'em',
	'i',
	'iframe',
	'ins',
	'kbd',
	'label',
	'map',
	'mark',
	'noscript',
	'object',
	'output',
	'picture',
	'q',
	'ruby',
	's',
	'samp',
	'small',
	'span',
	'strong',
	'sub',
	'sup',
	'svg',
	'time',
	'u',
	'var',
	'video',
];

export default [
	{
		ignores: [
			'node_modules',
			'**/node_modules/**',
			'**/dist',
			'**/node_modules',
			'**/.nuxt',
			'**/.output',
			'**/.vercel',
			'**/.netlify',
			'**/public',
		],
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@stylistic': stylistic,
			'import': pluginImport,
			perfectionist,
		},
		rules: {
			'@stylistic/array-bracket-newline': [
				'error',
				{
					minItems: 2,
					multiline: true,
				},
			],
			'@stylistic/array-bracket-spacing': 'error',
			'@stylistic/array-element-newline': [
				'error',
				{
					minItems: 2,
					multiline: true,
				},
			],
			'@stylistic/arrow-parens': 'error',
			'@stylistic/arrow-spacing': 'error',
			'@stylistic/block-spacing': 'error',
			'@stylistic/brace-style': [
				'error',
				'1tbs',
				{ allowSingleLine: false },
			],
			'@stylistic/comma-dangle': [
				'error',
				'always-multiline',
			],
			'@stylistic/comma-spacing': 'error',
			'@stylistic/comma-style': 'error',
			'@stylistic/computed-property-spacing': 'error',
			'@stylistic/dot-location': [
				'error',
				'property',
			],
			'@stylistic/eol-last': 'error',
			'@stylistic/function-call-argument-newline': [
				'error',
				'consistent',
			],
			'@stylistic/function-call-spacing': 'error',
			'@stylistic/function-paren-newline': [
				'error',
				'consistent',
			],
			'@stylistic/generator-star-spacing': 'error',
			'@stylistic/implicit-arrow-linebreak': 'error',
			'@stylistic/indent': [
				'error',
				'tab',
			],
			'@stylistic/indent-binary-ops': [
				'error',
				'tab',
			],
			'@stylistic/key-spacing': 'error',
			'@stylistic/keyword-spacing': 'error',
			'@stylistic/linebreak-style': 'error',
			'@stylistic/lines-around-comment': [
				'error',
				{
					afterBlockComment: false,
					afterLineComment: false,
				},
			],
			'@stylistic/lines-between-class-members': [
				'error',
				{
					enforce: [
						{
							blankLine: 'always',
							next: 'method',
							prev: 'method',
						},
						{
							blankLine: 'never',
							next: 'field',
							prev: 'field',
						},
					],
				},
			],
			'@stylistic/max-len': [
				'error',
				{ tabWidth: 1 },
			],
			'@stylistic/max-statements-per-line': 'error',
			'@stylistic/member-delimiter-style': 'error',
			'@stylistic/multiline-ternary': [
				'error',
				'always-multiline',
			],
			'@stylistic/new-parens': 'error',
			'@stylistic/newline-per-chained-call': 'error',
			'@stylistic/no-extra-parens': 'error',
			'@stylistic/no-extra-semi': 'error',
			'@stylistic/no-floating-decimal': 'error',
			'@stylistic/no-mixed-operators': 'error',
			'@stylistic/no-mixed-spaces-and-tabs': 'error',
			'@stylistic/no-multi-spaces': 'error',
			'@stylistic/no-multiple-empty-lines': 'error',
			'@stylistic/no-trailing-spaces': [
				'error',
				{ ignoreComments: true },
			],
			'@stylistic/no-whitespace-before-property': 'error',
			'@stylistic/object-curly-newline': [
				'error',
				{
					minProperties: 2,
					multiline: true,
				},
			],
			'@stylistic/object-curly-spacing': [
				'error',
				'always',
			],
			'@stylistic/object-property-newline': 'error',
			'@stylistic/one-var-declaration-per-line': [
				'error',
				'always',
			],
			'@stylistic/operator-linebreak': [
				'error',
				'before',
			],
			'@stylistic/padded-blocks': [
				'error',
				'never',
			],
			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					next: 'return',
					prev: '*',
				},
				{
					blankLine: 'always',
					next: '*',
					prev: [
						'const',
						'let',
						'var',
					],
				},
				{
					blankLine: 'any',
					next: [
						'const',
						'let',
						'var',
					],
					prev: [
						'const',
						'let',
						'var',
					],
				},
				{
					blankLine: 'always',
					next: '*',
					prev: 'directive',
				},
				{
					blankLine: 'any',
					next: 'directive',
					prev: 'directive',
				},
				{
					blankLine: 'always',
					next: '*',
					prev: 'import',
				},
				{
					blankLine: 'any',
					next: 'import',
					prev: 'import',
				},
				{
					blankLine: 'always',
					next: 'export',
					prev: '*',
				},
				{
					blankLine: 'any',
					next: 'export',
					prev: 'export',
				},
			],
			'@stylistic/quote-props': [
				'error',
				'consistent-as-needed',
			],
			'@stylistic/quotes': [
				'error',
				'single',
				{ allowTemplateLiterals: false },
			],
			'@stylistic/rest-spread-spacing': 'error',
			'@stylistic/semi': 'error',
			'@stylistic/semi-spacing': 'error',
			'@stylistic/semi-style': 'error',
			'@stylistic/space-before-blocks': 'error',
			'@stylistic/space-before-function-paren': [
				'error',
				{ named: 'never' },
			],
			'@stylistic/space-in-parens': 'error',
			'@stylistic/space-infix-ops': 'error',
			'@stylistic/space-unary-ops': 'error',
			'@stylistic/spaced-comment': 'error',
			'@stylistic/switch-colon-spacing': 'error',
			'@stylistic/template-curly-spacing': 'error',
			'@stylistic/template-tag-spacing': 'error',
			'@stylistic/type-annotation-spacing': 'error',
			'@stylistic/type-generic-spacing': 'error',
			'@stylistic/type-named-tuple-spacing': 'error',
			'@stylistic/wrap-iife': [
				'error',
				'inside',
				{ functionPrototypeMethods: true },
			],
			'@stylistic/yield-star-spacing': 'error',
			'eqeqeq': 'error',
			'for-direction': 'error',
			'import/first': 'error',
			'import/newline-after-import': [
				'error',
				{ count: 1 },
			],
			'import/no-duplicates': 'error',
			'import/no-mutable-exports': 'error',
			'import/no-named-default': 'error',
			'import/no-self-import': 'error',
			'no-async-promise-executor': 'error',
			'no-case-declarations': 'error',
			'no-class-assign': 'error',
			'no-compare-neg-zero': 'error',
			'no-cond-assign': 'error',
			'no-constant-binary-expression': 'error',
			'no-constant-condition': 'error',
			'no-control-regex': 'error',
			'no-debugger': 'error',
			'no-delete-var': 'error',
			'no-dupe-else-if': 'error',
			'no-duplicate-case': 'error',
			'no-empty': 'error',
			'no-empty-character-class': 'error',
			'no-empty-pattern': 'error',
			'no-empty-static-block': 'error',
			'no-ex-assign': 'error',
			'no-extra-boolean-cast': 'error',
			'no-fallthrough': 'error',
			'no-global-assign': 'error',
			'no-invalid-regexp': 'error',
			'no-irregular-whitespace': 'error',
			'no-loss-of-precision': 'error',
			'no-misleading-character-class': 'error',
			'no-nonoctal-decimal-escape': 'error',
			'no-octal': 'error',
			'no-prototype-builtins': 'error',
			'no-regex-spaces': 'error',
			'no-self-assign': 'error',
			'no-shadow-restricted-names': 'error',
			'no-sparse-arrays': 'error',
			'no-unexpected-multiline': 'error',
			'no-unsafe-finally': 'error',
			'no-unsafe-optional-chaining': 'error',
			'no-unused-labels': 'error',
			'no-unused-private-class-members': 'error',
			'no-useless-backreference': 'error',
			'no-useless-catch': 'error',
			'no-useless-escape': 'error',
			'no-with': 'error',
			'perfectionist/sort-array-includes': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-astro-attributes': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-classes': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-enums': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-exports': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-imports': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-interfaces': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-intersection-types': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-jsx-props': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-maps': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-named-exports': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-named-imports': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-object-types': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-objects': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-svelte-attributes': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-switch-case': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-union-types': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-variable-declarations': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'perfectionist/sort-vue-attributes': [
				'error',
				{
					order: 'asc',
					type: 'natural',
				},
			],
			'require-yield': 'error',
			'use-isnan': 'error',
		},
	},
	{
		files: [
			'**/*.ts',
			'**/*.vue',
		],
		languageOptions: {
			extraFileExtensions: ['.vue'],
			globals: {
				$fetch: 'readonly',
				computed: 'readonly',
				defineEmits: 'readonly',
				defineExpose: 'readonly',
				defineProps: 'readonly',
				onMounted: 'readonly',
				onUnmounted: 'readonly',
				reactive: 'readonly',
				ref: 'readonly',
				shallowReactive: 'readonly',
				shallowRef: 'readonly',
				toRef: 'readonly',
				toRefs: 'readonly',
				watch: 'readonly',
				watchEffect: 'readonly',
			},
			parser: parserTs,
		},
		plugins: {
			'@typescript-eslint': pluginTs,
			'nuxt': nuxtPlugin,
			'vue': pluginVue,
		},
		rules: {
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					disallowTypeAnnotations: false,
					prefer: 'type-imports',
				},
			],
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-dynamic-delete': 'error',
			'@typescript-eslint/no-empty-object-type': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-extraneous-class': 'error',
			'@typescript-eslint/no-import-type-side-effects': 'error',
			'@typescript-eslint/no-invalid-void-type': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-this-alias': 'error',
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unsafe-declaration-merging': 'error',
			'@typescript-eslint/no-unsafe-function-type': 'error',
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'after-used',
					argsIgnorePattern: '^_',
					ignoreRestSiblings: true,
					vars: 'all',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/no-wrapper-object-types': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/prefer-literal-enum-member': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/triple-slash-reference': 'error',
			'@typescript-eslint/unified-signatures': 'error',
			'nuxt/prefer-import-meta': 'error',
			'vue/array-bracket-spacing': [
				'error',
				'never',
			],
			'vue/arrow-spacing': [
				'error',
				{
					after: true,
					before: true,
				},
			],
			'vue/attribute-hyphenation': 'warn',
			'vue/block-order': 'warn',
			'vue/block-spacing': [
				'error',
				'always',
			],
			'vue/block-tag-newline': [
				'error',
				{
					multiline: 'always',
					singleline: 'always',
				},
			],
			'vue/brace-style': [
				'error',
				'stroustrup',
				{ allowSingleLine: true },
			],
			'vue/comma-dangle': [
				'error',
				'always-multiline',
			],
			'vue/comma-spacing': [
				'error',
				{
					after: true,
					before: false,
				},
			],
			'vue/comma-style': [
				'error',
				'last',
			],
			'vue/comment-directive': 'error',
			'vue/component-definition-name-casing': 'warn',
			'vue/first-attribute-linebreak': 'warn',
			'vue/html-closing-bracket-newline': 'warn',
			'vue/html-closing-bracket-spacing': 'warn',
			'vue/html-comment-content-spacing': [
				'error',
				'always',
				{ exceptions: ['-'] },
			],
			'vue/html-end-tags': 'warn',
			'vue/html-indent': [
				'error',
				'tab',
			],
			'vue/html-indent': [
				'error',
				'tab',
			],
			'vue/html-quotes': [
				'error',
				'double',
			],
			'vue/html-quotes': [
				'error',
				'double',
			],
			'vue/html-self-closing': 'warn',
			'vue/jsx-uses-vars': 'error',
			'vue/key-spacing': [
				'error',
				{
					afterColon: true,
					beforeColon: false,
				},
			],
			'vue/keyword-spacing': [
				'error',
				{
					after: true,
					before: true,
				},
			],
			'vue/max-attributes-per-line': 'warn',
			'vue/multiline-html-element-content-newline': [
				'error',
				{
					allowEmptyLines: false,
					ignores: [
						'pre',
						'textarea',
						'router-link',
						'nuxt-link',
						...INLINE_ELEMENTS,
					],
					ignoreWhenEmpty: true,
				},
			],
			'vue/mustache-interpolation-spacing': 'warn',
			'vue/no-arrow-functions-in-watch': 'error',
			'vue/no-async-in-computed-properties': 'error',
			'vue/no-child-content': 'error',
			'vue/no-computed-properties-in-data': 'error',
			'vue/no-deprecated-data-object-declaration': 'error',
			'vue/no-deprecated-destroyed-lifecycle': 'error',
			'vue/no-deprecated-dollar-listeners-api': 'error',
			'vue/no-deprecated-dollar-scopedslots-api': 'error',
			'vue/no-deprecated-events-api': 'error',
			'vue/no-deprecated-filter': 'error',
			'vue/no-deprecated-functional-template': 'error',
			'vue/no-deprecated-html-element-is': 'error',
			'vue/no-deprecated-inline-template': 'error',
			'vue/no-deprecated-props-default-this': 'error',
			'vue/no-deprecated-router-link-tag-prop': 'error',
			'vue/no-deprecated-scope-attribute': 'error',
			'vue/no-deprecated-slot-attribute': 'error',
			'vue/no-deprecated-slot-scope-attribute': 'error',
			'vue/no-deprecated-v-bind-sync': 'error',
			'vue/no-deprecated-v-is': 'error',
			'vue/no-deprecated-v-on-native-modifier': 'error',
			'vue/no-deprecated-v-on-number-modifiers': 'error',
			'vue/no-deprecated-vue-config-keycodes': 'error',
			'vue/no-dupe-keys': 'error',
			'vue/no-dupe-v-else-if': 'error',
			'vue/no-duplicate-attributes': 'error',
			'vue/no-export-in-script-setup': 'error',
			'vue/no-expose-after-await': 'error',
			'vue/no-lifecycle-after-await': 'error',
			'vue/no-lone-template': 'warn',
			'vue/no-multi-spaces': 'warn',
			'vue/no-multiple-slot-args': 'warn',
			'vue/no-mutating-props': 'error',
			'vue/no-parsing-error': 'error',
			'vue/no-ref-as-operand': 'error',
			'vue/no-reserved-component-names': 'error',
			'vue/no-reserved-keys': 'error',
			'vue/no-reserved-props': 'error',
			'vue/no-shared-component-data': 'error',
			'vue/no-side-effects-in-computed-properties': 'error',
			'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
			'vue/no-template-key': 'error',
			'vue/no-template-shadow': 'warn',
			'vue/no-textarea-mustache': 'error',
			'vue/no-unused-components': 'error',
			'vue/no-unused-vars': 'error',
			'vue/no-use-computed-property-like-method': 'error',
			'vue/no-use-v-if-with-v-for': 'error',
			'vue/no-useless-template-attributes': 'error',
			'vue/no-v-for-template-key-on-child': 'error',
			'vue/no-v-text-v-html-on-component': 'error',
			'vue/no-watch-after-await': 'error',
			'vue/object-curly-spacing': [
				'error',
				'always',
			],
			'vue/object-property-newline': [
				'error',
				{ allowMultiplePropertiesPerLine: true },
			],
			'vue/operator-linebreak': [
				'error',
				'before',
			],
			'vue/order-in-components': 'warn',
			'vue/padding-line-between-blocks': [
				'error',
				'always',
			],
			'vue/prefer-import-from-vue': 'error',
			'vue/prop-name-casing': 'warn',
			'vue/quote-props': [
				'error',
				'consistent-as-needed',
			],
			'vue/require-component-is': 'error',
			'vue/require-explicit-emits': 'warn',
			'vue/require-prop-type-constructor': 'error',
			'vue/require-prop-types': 'warn',
			'vue/require-render-return': 'error',
			'vue/require-slots-as-functions': 'error',
			'vue/require-toggle-inside-transition': 'error',
			'vue/require-v-for-key': 'error',
			'vue/require-valid-default-prop': 'error',
			'vue/return-in-computed-property': 'error',
			'vue/return-in-emits-validator': 'error',
			'vue/singleline-html-element-content-newline': 'warn',
			'vue/space-in-parens': [
				'error',
				'never',
			],
			'vue/template-curly-spacing': 'error',
			'vue/this-in-template': 'warn',
			'vue/use-v-on-exact': 'error',
			'vue/v-bind-style': 'warn',
			'vue/v-on-event-hyphenation': [
				'error',
				'always',
			],
			'vue/v-on-style': 'warn',
			'vue/v-slot-style': 'warn',
			'vue/valid-attribute-name': 'error',
			'vue/valid-define-emits': 'error',
			'vue/valid-define-props': 'error',
			'vue/valid-next-tick': 'error',
			'vue/valid-template-root': 'error',
			'vue/valid-v-bind': 'error',
			'vue/valid-v-cloak': 'error',
			'vue/valid-v-else': 'error',
			'vue/valid-v-else-if': 'error',
			'vue/valid-v-for': 'error',
			'vue/valid-v-html': 'error',
			'vue/valid-v-if': 'error',
			'vue/valid-v-is': 'error',
			'vue/valid-v-memo': 'error',
			'vue/valid-v-model': 'error',
			'vue/valid-v-on': 'error',
			'vue/valid-v-once': 'error',
			'vue/valid-v-pre': 'error',
			'vue/valid-v-show': 'error',
			'vue/valid-v-slot': 'error',
			'vue/valid-v-text': 'error',
		},
	},
	{
		files: ['**/*.vue'],
		languageOptions: { parser: parserVue },
		processor: pluginVue.processors['.vue'],
	},
];