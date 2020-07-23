const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // entry: './src/main.js',
  entry: './src/carousel.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  }
}