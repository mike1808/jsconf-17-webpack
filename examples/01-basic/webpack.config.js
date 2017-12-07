const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, './a.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
};
