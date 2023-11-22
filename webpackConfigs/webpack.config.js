const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV === "development"

module.exports = {
  target: 'web',
  context: path.resolve(__dirname, '../UIKitWidgetsCurrencies'),
  mode: isDev ? "development" : 'production',
  entry: './index.js',
  output: {
    filename: 'ui-kit-widgets-currencies.js',
    path: path.resolve(__dirname, '../', 'build'),
    globalObject: 'this',
    library: {
      name: 'UIKitWidgetsCurrencies',
      type: 'umd'
    },
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json']
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