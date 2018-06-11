module.exports = {
  collectCoverageFrom: ['src/**/*.js'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  testMatch: ['<rootDir>/src/**/?(*.)(spec|test).{js}'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^(?!.*\\.(js|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/.+\\.js$'],
  moduleFileExtensions: ['js', 'json', 'node'],
  moduleNameMapper: {
    '^@assets(.*)$': '<rootDir>/src/assets',
    '^@components(.*)$': '<rootDir>src/components',
    '^@constants(.*)$': '<rootDir>src/constants',
    '^@utils(.*)$': '<rootDir>src/utils',
    '^@theme(.*)$': '<rootDir>/src/assets',

  },
};
