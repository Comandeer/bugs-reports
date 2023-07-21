import js from '@eslint/js';

export default [
	{
		files: [
			'**/*.js'
		],

		ignores: [
			'ignored.js'
		],

		...js.configs.recommended
	}
];
