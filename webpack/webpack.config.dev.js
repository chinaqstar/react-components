var path = require('path');
var webpack = require('webpack');
var config = require('../config.js');
var BUILD_PATH = path.resolve(config.ROOT, './dist');

module.exports = {
  devtool: 'source-map',
  context: config.ROOT,
  entry: {
    app: [
      'webpack-dev-server/client?http://'+ config.HOST + ':' + config.PORT,
      './src/index'
    ]
  },
  output: {
    path: BUILD_PATH,
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
