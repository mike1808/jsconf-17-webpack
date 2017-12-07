const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env = {}) => ({
  context: __dirname,
  entry: path.join(__dirname, './index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            minimize: env.min,
          },
        },
      ],
    }],
  },
  plugins: env.min ? [
    new UglifyJsPlugin(),
  ] : [],
});
