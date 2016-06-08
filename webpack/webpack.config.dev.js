
var path = require('path');
var webpack = require('webpack');

var config = require('../config.js');

var ROOT_PATH = path.resolve(__dirname, '..');   // 根目录
var ASSERTS_PATH = path.resolve(ROOT_PATH, './public/asserts');

module.exports = {
  devtool: 'source-map',
  context: ROOT_PATH,
  entry: {
    app: [
      'webpack-dev-server/client?http://'+ config.HOST + ':' + config.PORT,
      './src/app'
    ]
  },
  output: {
    path: ASSERTS_PATH,
    filename: '[name]-[hash].js',
    publicPath: '/'    // 会在服务端用到（server）
  },
  module: {
    loaders: [
      {test: /\.js[x]?$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.json?$/, loader: 'json'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=8192&name=./images/[name].[ext]'}
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss' ]    // 这里配置以后，在之后import时就不用加后缀了
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
