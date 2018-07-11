'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve("babel-preset-env"),
    require.resolve("babel-preset-flow"),
    require.resolve("babel-preset-react"),
    require.resolve("babel-preset-stage-1"),
  ],
});
