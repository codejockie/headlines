const webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [process.env.CONTINUOUS_INTEGRATION ? 'PhantomJS' : 'Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'app/components/*.jsx',
      'app/tests/**/*.test.jsx',
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'],
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
