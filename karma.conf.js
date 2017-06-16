const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [process.env.CI ? 'PhantomJS' : 'Chrome'],
    singleRun: true,
    frameworks: [
      'mocha',
      'chai',
      'sinon-chai',
    ],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'app/actions/*.jsx',
      'app/components/*.jsx',
      'tests.webpack.js',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
      'app/actions/*.jsx': ['webpack', 'sourcemap', 'coverage'],
      'app/components/*.jsx': ['webpack', 'sourcemap', 'coverage'],
    },
    reporters: ['mocha', 'coverage', 'coveralls'],
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
    },
    client: {
      mocha: {
        timeout: '5000',
      },
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
