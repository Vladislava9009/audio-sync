const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    transformer: {
      // getTransformOptions: async () => ({
      // 	transform: {
      // 		experimentalImportSupport: false,
      // 		inlineRequires: false,
      // 	},
      // }),
      babelTransformerPath: require.resolve('./rn-transformer.config.js'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'css', 'js', 'jsx', 'svg', 'ts', 'tsx'],
    },
  }
})()