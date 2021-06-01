module.exports = {
	'src/**/*.{js,jsx,ts,tsx}': ['prettier --write', 'tslint --fix', 'stylelint --fix', 'git add'],
}
