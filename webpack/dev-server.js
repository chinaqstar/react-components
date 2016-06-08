var Express = require('express');
var path = require('path');
var config = require('../config.js');

var webpack = require('webpack');
var webpackCfg = require('./webpack.config.dev.js');
var compiler = webpack(webpackCfg);

var app = new Express();

var serverOpts = {
  noInfo: true,
  publicPath: webpackCfg.output.publicPath
}

app.use(require('webpack-dev-middleware')(compiler, serverOpts));

app.use('/', function(req, res) {
  res.send(200 ,'hello');
});

app.listen(config.PORT);

console.log('listen ' + config.PORT);
