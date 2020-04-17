const path = require('path')
const Webpack = require('webpack')
// const {
//   CleanWebpackPlugin
// } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'main.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'parse-url.js',
    library: 'ParseUrl',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: /node_modules/,
      use: 'ts-loader'
    }]
  },
  plugins: [
    // new CleanWebpackPlugin()
    new Webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: './dist',
    hot: true
  }
}