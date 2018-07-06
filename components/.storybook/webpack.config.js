const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: [
              path.resolve(__dirname, '../.storybook/'),
              path.resolve(__dirname, '../../lpify-core/src/'),
              path.resolve(__dirname, '../../lpify-components/src/'),
              path.resolve(__dirname, '../../products/pickaflick'),
            ],
            loader: require.resolve('babel-loader'),
            options: {
              // compact: true,
              cacheDirectory: true,
              plugins: [
                'react-hot-loader/babel',
                [
                  'module-resolver',
                  {
                    root: [path.resolve(__dirname, './')],
                    alias: {
                      '@core': path.resolve(__dirname, '../../lpify-core/src'),
                      '@components': path.resolve(__dirname, '../../lpify-components/src'),
                      '@theme': path.resolve(__dirname, '../../lpify-components/src/theme'),
                      '@story': path.resolve(__dirname, '../.storybook'),
                    },
                  },
                ],
              ],
            },
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            include: /flexboxgrid2|normalize.css/,
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              {
                loader: 'style-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                  sourceMap: true,
                  alias: {
                    '@theme': path.resolve(__dirname, '../../lpify-components/src/theme'),
                  },
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: [path.resolve(__dirname, 'theme/public')],
                },
              },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, 'theme/variables') + '/**/*.scss',
                },
              },
            ],
            // exclude: /flexboxgrid2/
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: 'react-svg-loader',
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
            test: /\.(jpe?g|jpg|gif|png|woff|woff2|eot|ttf|webp)$/,
            use: [{ loader: 'file-loader' }],
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['../../node_modules'],
    extensions: ['.js', '.json', '.scss', '.css'],
    alias: {
      '@core': path.resolve(__dirname, '../../lpify-core/src/'),
      '@components': path.resolve(__dirname, '../../lpify-components/src/'),
      '@theme': path.resolve(__dirname, '../../lpify-components/src/theme'),
      '@lib': path.resolve(__dirname, '../../lpify-core/src/lib/'),
      '@story': path.resolve(__dirname, '../.storybook/'),
      modernizr$: path.resolve(__dirname, '../.modernizrrc'),
    },
  },
};
