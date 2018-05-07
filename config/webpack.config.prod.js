const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const getClientEnvironment = require('./env');
const path = require('path');

const env = getClientEnvironment();
const shouldUseSourceMap = env.stringified['process.env'].GENERATE_SOURCEMAP !== 'false';

module.exports = {
  mode: 'production',
  devtool: shouldUseSourceMap ? 'source-map' : false,
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
    publicPath: '',
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
    new CleanWebpackPlugin(['build']),
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
    new HTMLWebpackPlugin({
      template: path.resolve('public/index.html'),
    }),
    new BundleAnalyzerPlugin({ analyzerMode: 'static' }),
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
