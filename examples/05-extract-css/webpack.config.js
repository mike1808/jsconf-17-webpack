const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env = {}) => {
  const plugins = [];

  if (env.min) {
    plugins.push(new UglifyJsPlugin());
  }

  return {
    context: __dirname,
    entry: path.join(__dirname, './index.js'),
    output: {
      path: path.join(__dirname, './dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: env.min,
            },
          }],
        }),
      }],
    },
    plugins: [
      ...plugins,
      new ExtractTextPlugin('styles.css'),
    ]
  };
};
