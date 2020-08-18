const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  // entry: './src/carousel.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader'
      },
      // {
      //   test: /\.vue$/,
      //   use: {
      //     loader: require.resolve('./myLoader.js')
      //   }
      // },
      {
        test:/\.css$/,
        //use: ['css-loader']
        use: {
          loader: require.resolve('./cssLoader.js')
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'carousel',
      filename: 'index.html',
      template: path.join(__dirname, './src/template/index.html')
    })
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  }
}