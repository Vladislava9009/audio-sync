module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
		'@typescript-eslint/tslint',
		'react-hooks',
		'react-native',
		'react-native-globals',
		'module-resolver',
	],
	extends: ['airbnb', 'prettier'],
	env: {
		'react-native-globals/all': true,
	},
	settings: {
		'import/resolver': {
			'babel-module': {
				extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json', '.css'],
				root: ['.'],
				alias: {
					'@components': ['./src/components'],
					'@constants': ['./src/constants'],
					'@decorators': ['./src/decorators'],
					'@helpers': ['./src/helpers'],
					'@images': ['./src/assets/images'],
					'@modules': ['./src/modules'],
					'@screens': ['./src/screens'],
					'@services': ['./src/services'],
					'@hooks': ['./src/hooks'],
					'@store': ['./src/store'],
				},
			},
		},
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		react: {
			version: 'detect',
		},
	},
	rules: {
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'@typescript-eslint/no-param-reassign': 'error',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/type-annotation-spacing': 'off',
		// "arrow-parens": [
		//     "off",
		//     "as-needed"
		// ],
		// "curly": [
		//     "error",
		//     "multi-line"
		// ],
		// "eol-last": "off",
		// "eqeqeq": [
		//     "error",
		//     "smart"
		// ],
		// "linebreak-style": "off",
		// "max-len": "off",
		// "new-parens": "off",
		// "newline-per-chained-call": "off",
		// "no-duplicate-imports": "error",
		// "no-eval": "error",
		// "no-extra-semi": "off",
		// "no-irregular-whitespace": "off",
		// "no-multiple-empty-lines": "off",
		// "no-new-wrappers": "error",
		// "no-trailing-spaces": "off",
		// "no-var": "error",
		// "object-shorthand": "error",
		// "one-var": "error",
		// "prefer-const": "error",
		// "prefer-template": "error",
		// "quote-props": "off",
		// "radix": "error",
		// "space-before-function-paren": "off",
		// "@typescript-eslint/tslint/config": [
		//     "error",
		//     {
		//         "rulesDirectory": [
		//             "/Users/mobile/Documents/lbd-react-native/node_modules/tslint-consistent-codestyle/rules",
		//             "/Users/mobile/Documents/lbd-react-native/node_modules/tslint-eslint-rules/dist/rules",
		//             "/Users/mobile/Documents/lbd-react-native/node_modules/tslint-microsoft-contrib",
		//             "/Users/mobile/Documents/lbd-react-native/node_modules/tslint-react/rules",
		//             "/Users/mobile/Documents/lbd-react-native/node_modules/tslint-plugin-prettier/rules"
		//         ],
		//         "rules": {
		//             "comment-format": [
		//                 true,
		//                 "check-space"
		//             ],
		//             "jsx-alignment": true,
		//             "jsx-boolean-value": true,
		//             "jsx-curly-spacing": [
		//                 true,
		//                 "never"
		//             ],
		//             "jsx-equals-spacing": [
		//                 true,
		//                 "never"
		//             ],
		//             "jsx-key": true,
		//             "jsx-no-bind": true,
		//             "jsx-no-lambda": true,
		//             "jsx-no-string-ref": true,
		//             "jsx-self-close": true,
		//             "jsx-wrap-multiline": true,
		//             "no-boolean-literal-compare": true,
		//             "no-else-after-return": true,
		//             "no-function-constructor-with-string-args": true,
		//             "object-shorthand-properties-first": true,
		//             "prefer-array-literal": true,
		//             "prettier": [
		//                 true,
		//                 null,
		//                 {
		//                     "editorconfig": false
		//                 }
		//             ],
		//             "ter-prefer-arrow-callback": true,
		//             "variable-name": [
		//                 true,
		//                 "ban-keywords",
		//                 "check-format",
		//                 "allow-leading-underscore",
		//                 "allow-pascal-case"
		//             ]
		//         }
		//     }
		// ]
	},
}
