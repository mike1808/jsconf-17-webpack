const path = require('path');
const merge = require('webpack-merge');
const glob = require('glob');

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
        ['@babel/preset-env', {
          modules: false,
          useBuiltIns: 'entry',
          shippedProposals: true,
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
  parts.loadImages({
    limit: 8192,
    name: '[name].[ext]',
  }),
]);


const developmentConfig = merge([
  parts.sourceMaps('cheap-module-source-map'),
  parts.devServer({ host: process.env.HOST, port: process.env.PORT }),
  parts.loadStyles(),
  parts.envVar('development'),
]);

const productionConfig = merge([
  parts.sourceMaps('source-map'),
  parts.cleanup([paths.dist]),

  parts.extractCSS({
    use: [
      parts.cssLoader({ minimize: true, sourceMap: true, modules: true }),
      parts.autoprefix(),
    ],
    filename: '[name].css',
  }),

  parts.minifyJavaScript(),
  parts.envVar('production'),
  parts.purifyCSS({
    paths: glob.sync(`${paths.base}/**/*.js?(x)`, { nodir: true }),
    minimize: true,
  }),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }

  return merge(commonConfig, developmentConfig);
};
