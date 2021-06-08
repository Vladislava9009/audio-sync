const upstreamTransformer = require('metro-react-native-babel-transformer')
const typescriptTransformer = require('react-native-typescript-transformer')
const svgTransformer = require('react-native-svg-transformer')
const cssTransformer = require('react-native-css-transformer')

module.exports.transform = function({ src, filename, options }) {
	if (filename.endsWith('.svg')) {
		return svgTransformer.transform({ src, filename, options })
	} else if (filename.endsWith('.css')) {
		return cssTransformer.transform({ src, filename, options })
	}
	return upstreamTransformer.transform({ src, filename, options })
}
