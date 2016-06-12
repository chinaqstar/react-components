const path = require('path');
const webpack = require('webpack');

const HOST = 'localhost';
const PORT = 9999;
const ROOT_PATH = path.resolve(__dirname, '..');
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DOCS_PATH = path.resolve(ROOT_PATH, 'docs');
const BUILD_PATH = path.resolve(DOCS_PATH, 'dist');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: DOCS_PATH,
  entry: {
    app: [
      // `webpack-dev-server/client?http://${HOST}:${PORT}`,
      './app'
    ]
  },
  output: {
    path: BUILD_PATH,
    filename: 'app.js',
    publicPath: '/'
  },
  devServer: {
    contentBase: DOCS_PATH,
    hot: true,
    inline: true,
    port: PORT,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // include: [
        //   path.resolve(ROOT_PATH, 'node_modules/react-router'),
        //   SRC_PATH,
        //   DOCS_PATH
        // ],
        loader: 'babel',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      {test: /\.(jpg|jpeg|png|gif)$/, loader: 'url?limit=8192&name=images/[name]-[ext]'}
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json', '.scss' ],
    alias: {
      'rc-ui': SRC_PATH
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
