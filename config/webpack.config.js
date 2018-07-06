const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ignoredFiles = require('react-dev-utils/ignoredFiles');
const publicUrl = '';
const getClientEnvironment = require('./env', publicUrl);
const env = getClientEnvironment('development');

const shouldUseSourceMap = env.raw.GENERATE_SOURCEMAP !== 'false';

const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [
    require.resolve('style-loader'),
    {
      loader: 'css-loader',
      options: cssOptions,
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            flexbox: 'no-2009',
          }),
        ],
        sourceMap: shouldUseSourceMap,
      },
    },
  ];
  if (preProcessor) {
    loaders.push({
      loader: preProcessor,
      options: {
        sourceMap: shouldUseSourceMap,
      },
    });
  }
  return loaders;
};

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [path.resolve('config/polyfills'), 'react-dev-utils/webpackHotDevClient', path.resolve('src/index.js')],
  output: {
    path: path.resolve('.tmp'),
    filename: '[name].js',
    publicPath: '/',
    pathinfo: true,
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
    runtimeChunk: true,
  },
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    extensions: ['.js', '.json'],
    alias: {
      '@assets': path.resolve('src/assets'),
      '@components': path.resolve('src/components'),
      '@constants': path.resolve('src/constants'),
      '@utils': path.resolve('src/utils'),
      '@theme': path.resolve('src/theme'),
      modernizr$: path.resolve('.modernizrrc'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      { parser: { requireEnsure: false } },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: false,
        },
        include: path.resolve('src'),
        exclude: [/[/\\\\]node_modules[/\\\\]/],
      },

      {
        oneOf: [
          {
            test: /\.(jpe?g|jpg|gif|png|webp)$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.modernizrrc.js$/,
            use: ['modernizr-loader'],
          },
          {
            test: /\.modernizrrc(\.json)?$/,
            use: ['modernizr-loader', 'json-loader'],
          },
          {
            test: /\.js$/,
            include: path.resolve('src'),
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              // {
              //   loader: 'thread-loader',
              //   options: {
              //     poolTimeout: Infinity, // keep workers alive for more effective watch mode
              //   },
              // },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  highlightCode: true,
                  plugins: ['react-hot-loader/babel'],
                },
              },
            ],
          },

          {
            test: /\.css$/,
            exclude: /\.module\.css$/,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: shouldUseSourceMap,
            }),
          },
          {
            test: /\.module\.css$/,
            use: getStyleLoaders({
              importLoaders: 1,
              sourceMap: shouldUseSourceMap,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent,
            }),
          },
          {
            test: /\.(scss|sass)$/,
            exclude: /\.module\.(scss|sass)$/,
            use: getStyleLoaders({ importLoaders: 2, sourceMap: shouldUseSourceMap }, 'sass-loader'),
          },
          {
            test: /\.module\.(scss|sass)$/,
            use: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: shouldUseSourceMap,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
              'sass-loader'
            ),
          },

          {
            test: /\.svg$/,
            use: [
              'babel-loader',
              {
                loader: 'react-svg-loader',
                options: {
                  jsx: true, // true outputs JSX tags,
                  svgo: {
                    floatPrecision: 3,
                  },
                },
              },
            ],
          },

          {
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([path.resolve('public')], {}),
    new HTMLWebpackPlugin({
      template: path.resolve('public/index.html'),
    }),
  ],
  devServer: {
    // clientLogLevel: 'none',
    // quiet: true,
    contentBase: '.tmp',
    watchContentBase: true,
    hot: true,
    overlay: false,
    historyApiFallback: {
      disableDotRule: true,
    },
    watchOptions: {
      ignored: ignoredFiles(path.resolve('src')),
    },
    port: 3000,
    before(app) {
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
