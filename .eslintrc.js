const settings = {
  'env': {
    'browser': true,
  },
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  'plugins': [
    'react',
    'import'
  ],
  'settings': {
    'import/parser': 'babel-eslint',
    'import/resolver': {
      'webpack': {
        'config': 'config/webpack.config.js'
      }
    }
  },
  'globals': {
    'NODE_ENV': true,
  },
  'rules': {
    'jsx-a11y/anchor-is-valid': 0,
  },
};

module.exports = settings;
