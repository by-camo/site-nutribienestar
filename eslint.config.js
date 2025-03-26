import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
	{ files: ['**/*.{js,mjs,cjs}'] },
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: { globals: globals.browser },
	},
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.{js,mjs,cjs}'],
		plugins: { js, eslintPluginPrettier },
		extends: ['js/recommended'],
		rules: {
			'capitalized-comments': 'error',
			quotes: ['error', 'single'],
		},
	},
]);
