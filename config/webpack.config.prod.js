const HTMLWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const webpack = require('webpack');
const getClientEnvironment = require('./env');
const path = require('path');

const publicUrl = '/';
const env = getClientEnvironment('production', publicUrl);

const shouldUseSourceMap = env.raw.GENERATE_SOURCEMAP !== 'false';
const shouldBundleAnalyze = env.raw.BUNDLE_ANALYZER !== 'false';

const APP_TITLE = env.raw.APP_TITLE;
const APP_SHORT_TITLE = env.raw.APP_SHORT_TITLE;
const APP_DESCRIPTION = env.raw.APP_DESCRIPTION;
const PWA_BACKGROUND_COLOR = env.raw.PWA_BACKGROUND_COLOR;
const PWA_THEME_COLOR = env.raw.PWA_THEME_COLOR;

module.exports = {
  mode: 'production',
  devtool: shouldUseSourceMap ? 'source-map' : undefined,
  entry: [require.resolve('./polyfills'), path.resolve('src/index.js')],
  resolve: {
    modules: [path.resolve('src'), path.resolve('node_modules')],
    extensions: ['.js', '.jsx'],
    alias: {
      modernizr$: path.resolve('.modernizrrc'),
    },
  },
  output: {
    path: path.resolve('build'),
    filename: '[name].[hash].js',
    publicPath: publicUrl,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          emitError: false,
          failOnError: false,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
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
        test: /\.modernizrrc.js$/,
        use: ['modernizr-loader'],
      },
      {
        test: /\.modernizrrc(\.json)?$/,
        use: ['modernizr-loader', 'json-loader'],
      },
      {
        exclude: [/\.(js|jsx|mjs|html|json)$/],
        loader: require.resolve('file-loader'),
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve('build')], {
      root: path.resolve('.'),
    }),
    new LodashModuleReplacementPlugin({
      paths: true,
      // "shorthands":true,
      // "cloning":true,
      // "currying":true,
      // "caching":true,
      // "collections":true,
      // "exotics":true,
      // "guards":true,
      // "metadata":true,
      // "deburring":true,
      // "unicode":true,
      // "chaining":true,
      // "memoizing":true,
      // "coercions":true,
      // "flattening":true,
      // "placeholders":true
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/icon.png',
      prefix: '',
      background: '#ffffff',
      emitStats: false,
      persistentCache: false,
      icons: {
        appleStartup: false,
      },
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'react-pro',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      mergeStaticsConfig: true, // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
      minify: true,
      navigateFallback: publicUrl + 'index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
    new WebpackPwaManifest({
      name: APP_TITLE,
      short_name: APP_SHORT_TITLE,
      description: APP_DESCRIPTION,
      background_color: PWA_BACKGROUND_COLOR,
      theme_color: PWA_THEME_COLOR,
      filename: 'manifest.json',
      start_url: './index.html',
      lang: 'en-US',
      ios: true,
      inject: true,
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new webpack.DefinePlugin(env.stringified),
    new HTMLWebpackPlugin({
      template: path.resolve('public/index.html'),
      title: APP_TITLE,
      description: APP_DESCRIPTION,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
      preload: {
        test: /\.js$/,
        chunks: 'async',
      },
    }),
    shouldBundleAnalyze
      ? new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: true,
        })
      : () => ({}),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },

  performance: {
    hints: 'error',
  },
};
