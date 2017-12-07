const path = require('path');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const parts = require('./webpack.parts.config');

const paths = {
  base: path.resolve('src'),
  app: path.resolve('src/app.jsx'),
  dist: path.resolve('dist'),
  template: path.resolve('src/index.html'),
};


const commonConfig = merge([
  {
    target: 'web',
    context: paths.base,
    entry: {
      app: paths.app,
    },
    output: {
      filename: 'bundle.js',
      publicPath: '/',
      path: paths.dist,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: paths.template,
      }),
      new CaseSensitivePathsPlugin(),
    ],
  },

  parts.loadJs({
    babelOptions: {
      presets: [
        ['@babel/preset-es2015', {
          modules: false,
        }],
        '@babel/react',
      ],
    },
  }),
  parts.loadFonts({
    options: {
      name: '[name].[ext]',
    },
  }),
  parts.loadStyles(),
  parts.loadImages({
    limit: 8192,
    name: '[name].[ext]',
  }),
]);


const developmentConfig = merge([
  parts.sourceMaps('cheap-module-source-map'),
  parts.devServer({ host: process.env.HOST, port: process.env.PORT }),
]);

const productionConfig = merge([
  parts.sourceMaps('source-map'),
  parts.cleanup([paths.dist]),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
