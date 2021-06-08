module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.windows.js', '.native.js', '.js', '.jsx', '.json'],
        alias: {
          '@components': ['./src/components'],
          '@constants': ['./src/constants'],
          '@helpers': ['./src/helpers'],
          '@hooks': ['./src/hooks'],
          '@images': ['./src/assets/images'],
          '@typings': ['./src/typings'],
          '@screens': ['./src/screens'],
          '@services': ['./src/services'],
          '@store': ['./src/store'],
        },
        cwd: 'packagejson',
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
}
