const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env = {}) => {
  const plugins = [];

  if (env.min) {
    plugins.push(new UglifyJsPlugin());
  }

  return {
    context: __dirname,
    entry: {
      entry1: path.join(__dirname, 'entry1.js'),
      entry2: path.join(__dirname, 'entry2.js'),
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    module: {},
    plugins: [
      ...plugins,
      new CleanWebpackPlugin(path.join(__dirname, './dist')),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
      }),

      new HtmlWebpackPlugin({
        title: 'Code Splitting - Webpack - JS Conf 2017 Armenia',
        filename: 'index.html',
      }),
    ],
  };
};
