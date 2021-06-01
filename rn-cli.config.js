const upstreamTransformer = require('metro-react-native-babel-transformer')
const typescriptTransformer = require.resolve('react-native-typescript-transformer')
const svgTransformer = require.resolve('react-native-svg-transformer')

function transform({ src, filename, options }) {
	if (filename.endsWith('.svg')) {
		return svgTransformer.transform({ src, filename, options })
	}
	return typescriptTransformer.transform({ src, filename, options })
}

module.exports = {
	getTransformModulePath() {
		return require.resolve('react-native-typescript-transformer')
	},
	getSourceExts() {
		return ['ts', 'tsx', 'js', 'jsx', 'svg']
	},
}
