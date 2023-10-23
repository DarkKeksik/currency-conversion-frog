const path = require('path')

module.exports = {
  entry: './UIKitWidgetsCurrencies/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../', 'build'),
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
  }
}