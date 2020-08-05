const path = require('path')
const webpack = require('webpack')

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
      {
        test: /\.vue$/,
        use: {
          loader: require.resolve('./myLoader.js')
        }
      },
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  }
}