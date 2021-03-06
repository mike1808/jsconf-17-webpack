const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    stats: 'errors-only',
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.cleanup = paths => ({
  plugins: [
    new CleanWebpackPlugin(paths, { root: process.cwd(), verbose: false }),
  ],
});

exports.loadJs = ({ babelOptions }) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
        ],
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        // Capture eot, ttf, woff, and woff2
        test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        include,
        exclude,
        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
});

exports.cssLoader = ({ modules, minimize, sourceMap = true, importLoaders }) => ({
  loader: 'css-loader',
  options: {
    modules,
    minimize,
    sourceMap,
    localIdentName: 'purify-[name]__[local]___[hash:base64:5]',
    importLoaders,
  },
});


exports.loadStyles = ({ minimize, sourceMap } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        oneOf: [{
          include: /node_modules/,
          use: [
            { loader: 'style-loader' },
            exports.cssLoader({ modules: false, minimize, sourceMap }),
          ],
        }, {
          exclude: /node_modules/,
          use: [
            { loader: 'style-loader' },
            exports.cssLoader({ modules: true, minimize, sourceMap }),
          ],
        }],
      },
    ],
  },
});

exports.loadImages = options => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            options,
          },
        ],
      },
    ],
  },
});


exports.sourceMaps = method => ({
  devtool: method,
});

exports.minifyJavaScript = () => ({
  plugins: [new UglifyWebpackPlugin({ sourceMap: true })],
});

exports.envVar = env => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
});

exports.extractCSS = ({ use, filename, minimize, sourceMap }) => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename,
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          oneOf: [
            {
              include: /node_modules/,
              use: plugin.extract({
                use: exports.cssLoader({ modules: false, minimize, sourceMap }),
              }),
            },
            {
              exclude: /node_modules/,
              use: plugin.extract({
                use,
              }),
            }],
        },
      ],
    },
    plugins: [plugin],
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()],
  },
});


exports.purifyCSS = ({ paths, minimize }) => ({
  plugins: [new PurifyCSSPlugin({
    paths,
    minimize,
    purifyOptions: {
      whitelist: ['*purify*'],
    },
  })],
});

exports.extractChunks = bundles => ({
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    ...bundles.map(bundle => new webpack.optimize.CommonsChunkPlugin(bundle)),
  ],
});

exports.isVendor = module => /node_modules/.test(module.resource);

exports.scopeHoisting = () => ({
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
});

exports.loadOptimizedImages = options => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)/,
        use: [
          {
            loader: 'file-loader',
            options,
          },
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                progressive: true,
                quality: 85,
              },
              svgo: {},
            },
          },
        ],
      },
    ],
  },
});


exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
});

exports.analyze = () => ({
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});

