/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	rules: {
		semi: [1, 'always'],
		'declaration-block-trailing-semicolon': null,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-prettier',
		'plugin:vitest-globals/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	env: {
		'vitest-globals/env': true,
	},
};
