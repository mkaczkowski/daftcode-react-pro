module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).{js}'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': '<rootDir>/config/jest/babelTransform.js',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.js$', '^.+\\.module\\.(css|sass|scss)$'],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@assets(.*)$': '<rootDir>/src/assets',
    '^@components(.*)$': '<rootDir>src/components',
    '^@constants(.*)$': '<rootDir>src/constants',
    '^@utils(.*)$': '<rootDir>src/utils',
    '^@theme(.*)$': '<rootDir>/src/assets',
  },
};
