const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
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
      app: [
        require.resolve('@babel/polyfill'),
        paths.app,
      ],
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
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
        ['@babel/env', {
          modules: false,
          loose: true,
          useBuiltIns: 'entry',
        }],
        '@babel/react',
        '@babel/stage-1',
      ],
    },
  }),
  parts.loadFonts({
    options: {
      name: '[name].[hash].[ext]',
    },
  }),
]);


const developmentConfig = merge([
  parts.sourceMaps('cheap-module-source-map'),
  parts.devServer({ host: process.env.HOST, port: process.env.PORT }),

  parts.loadStyles(),
  parts.loadImages({
    limit: 8192,
    name: '[name].[hash].[ext]',
  }),

  parts.envVar('development'),

  { plugins: [new webpack.NamedModulesPlugin()] },
]);

const productionConfig = merge([
  parts.sourceMaps('source-map'),
  parts.cleanup([paths.dist]),
  parts.envVar('production'),

  parts.minifyJavaScript(),

  parts.loadOptimizedImages({
    name: '[name].[hash].[ext]',
  }),

  parts.extractCSS({
    filename: '[name].[contenthash].css',
    use: [
      parts.cssLoader({ modules: true, minimize: true, importLoaders: 1 }),
      parts.autoprefix(),
    ],
  }),

  parts.extractChunks([
    {
      name: 'common',
      chunks: ['app'],
      minChunks: parts.isVendor,
    },
    {
      children: true,
      minChunks: 3,
    },
    {
      async: true,
      children: true,
    },
    {
      name: 'manifest',
      minChunks: Infinity,
    },
  ]),
  parts.scopeHoisting(),
  parts.purifyCSS({
    paths: glob.sync(`${paths.base}/**/*.js?(x)`, { nodir: true }),
    minimize: true,
  }),
  parts.attachRevision(),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
