var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [
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
    ]
  },

  plugins: [
    new webpack.BannerPlugin(
      '****************************************************************************\r\n' +
      '  File Name:  bundle.js\r\n' +
      'Create Date:  03/15/2017\r\n'+
      '     Author:  denghejun\r\n' +
      'Description:  this is a react practice\r\n' +
      '******************************************************************************'
    )
  ]
}