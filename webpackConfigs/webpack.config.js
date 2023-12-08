const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === "development"

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, '../App'),
  mode: isDev ? "development" : 'production',
  entry: './index.js',
  output: {
    filename: 'currency-conversion-frog.js',
    path: path.resolve(__dirname, '../', 'build'),
    globalObject: 'this',
    library: {
      name: 'currency-conversion-frog',
      type: 'umd'
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    alias: {
      "@Animations": path.resolve(__dirname, '../App/src/Animations'),
      "@Components": path.resolve(__dirname, '../App/src/components'),
      "@Icons": path.resolve(__dirname, '../App/src/Icons'),
      "@api": path.resolve(__dirname, '../App/src/api'),
      "@data": path.resolve(__dirname, '../App/src/data'),
      "@hooks": path.resolve(__dirname, '../App/src/hooks'),
      "@styles": path.resolve(__dirname, '../App/src/styles'),
      "@helpers": path.resolve(__dirname, '../App/src/helpers'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: 'swc-loader',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    isDev && new BundleAnalyzerPlugin()
  ]
}