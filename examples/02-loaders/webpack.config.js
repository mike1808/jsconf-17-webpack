const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, './a.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.png$/,
      loader: 'file-loader',
    }],
  },
};
