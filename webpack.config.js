var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  entry: ['webpack/hot/dev-server' , APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    inline: false,
    port: 3333
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        exclude: /(node_modules|bower_components)/,
        loader : 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = config;
