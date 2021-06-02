import { YellowBox } from 'react-native'

if (true) {
	const IGNORED_WARNINGS = [
		'Remote debugger is in a background tab which may cause apps to perform slowly',
		'Require cycle',
		'Warning: componentWillReceiveProps',
	]

	console.disableYellowBox = true
	YellowBox.ignoreWarnings(IGNORED_WARNINGS)

	const oldConsoleWarn = console.warn

	console.warn = (...args) => {
		if (
			typeof args[0] === 'string' &&
			IGNORED_WARNINGS.some(ignoredWarning => args[0].startsWith(ignoredWarning))
		) {
			return
		}

		return oldConsoleWarn.apply(console, args)
	}
}
