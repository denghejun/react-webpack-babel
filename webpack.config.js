var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: { 
    app: './src/index',
    // entry2: './modules/contents/index.js'
   },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/dist/'
  },
  resolve:{
    extensions: ['.js','.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin(
      '****************************************************************************\r\n' +
      '  File Name:  app.bundle.js\r\n' +
      'Create Date:  03/15/2017\r\n' +
      '     Author:  denghejun\r\n' +
      'Description:  this is a react practice\r\n' +
      '******************************************************************************'
    )
  ]
}