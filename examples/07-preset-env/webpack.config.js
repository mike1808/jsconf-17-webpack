const path = require('path');
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
      entry: path.join(__dirname, 'entry1.js'),
    },
    output: {
      path: path.join(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [{
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                modules: false,
                useBuiltIns: 'entry',
                shippedProposals: true,
                debug: true,
                ignoreBrowserslistConfig: true,
                targets: {
                  chrome: 62,
                },
              }],
            ],
          },
        },
      }],
    },
    plugins: [
      ...plugins,
      new CleanWebpackPlugin(path.join(__dirname, './dist')),

      new HtmlWebpackPlugin({
        title: '@babel/preset-env - Webpack - JS Conf 2017 Armenia',
        filename: 'index.html',
      }),
    ],
  };
};
