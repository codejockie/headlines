[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/codejockie/headlines)
[![Build Status](https://travis-ci.org/codejockie/headlines.svg?branch=master)](https://travis-ci.org/codejockie/headlines)
[![CircleCI](https://circleci.com/gh/codejockie/headlines.svg?style=svg)](https://circleci.com/gh/codejockie/headlines)
[![Code Climate](https://codeclimate.com/github/codejockie/headlines/badges/gpa.svg)](https://codeclimate.com/github/codejockie/headlines)
[![Coverage Status](https://coveralls.io/repos/github/codejockie/headlines/badge.svg?branch=master)](https://coveralls.io/github/codejockie/headlines?branch=master)
[![Test Coverage](https://codeclimate.com/github/codejockie/headlines/badges/coverage.svg)](https://codeclimate.com/github/codejockie/headlines/coverage)

### Newslines - One stop source for the latest headlines

## Introduction
+  **`Newslines`** is a News app written in React.
+  It has the following features:
   +  Login via Google
   +  Login via GitHub
   +  Allow users select news sources
   +  Allow users sort news article based on the following sorting options
      +  Top
      +  Latest
   +  Allow users read a news article in-app and from original source
   +  Allow users share news article on social media
   +  Allow users save news article
+  A live version of the app is deployed on heroku via [here](https://newslines.herokuapp.com)

## Project Dependencies

### Dependencies
+  **[axios](https://www.npmjs.com/package/axios)** - Used to make HTTP requests to external API's
+  **[babel-core](https://www.npmjs.com/package/babel-core)** - It compiles es6 used in the app to es5
+  **[babel-loader](https://www.npmjs.com/package/babel-loader)** - Used with Webpack to transpile javascript codes
+  **[babel-preset-airbnb](https://www.npmjs.com/package/babel-preset-airbnb)**, **[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015)**, **[babel-preset-react](https://www.npmjs.com/package/babel-preset-react)**, **[babel-preset-stage-0](https://www.npmjs.com/package/babel-preset-stage-0)** - These packages provide Babel presets for React plugins, es2015 plugins, stage 0 plugins and transforming JavaScript for Airbnb
+  **[css-loader](https://www.npmjs.com/package/css-loader)** - The  css-loader is used with webpack and it interprets @import and url() like import/require()
+  **[express](https://www.npmjs.com/package/express)** - Used as the web server for this application
+  **[flux](https://www.npmjs.com/package/flux)** - It enables the app to implement the flux architecture
+  **[firebase](https://www.npmjs.com/package/firebase)** - Enables authentication with Google and for saving data to the database
+  **[moment](https://www.npmjs.com/package/moment)** - Used to format date and time
+  **[node-sass](https://www.npmjs.com/package/node-sass)**, **[sass-loader](https://www.npmjs.com/package/sass-loader)** - This enables the app to use sass (.scss) directly in scripts
+  **[node-env-file](https://www.npmjs.com/package/node-env-file)** - Parse and load environment files
+  **[react](https://www.npmjs.com/package/react)** - It enables the app to use the React architecture
+  **[react-alert](https://www.npmjs.com/package/react-alert)** - A simple react alert (toaster style) component
+  **[react-dom](https://www.npmjs.com/package/react-dom)** - This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic **[React](https://www.npmjs.com/package/react)**
+  **[react-router](https://www.npmjs.com/package/react-router)** - Used to perform app routing
+  **[react-share](https://www.npmjs.com/package/react-share)** - Provides social media share icons
+  **[script-loader](https://www.npmjs.com/package/script-loader)** - A JavaScript loader plugin for webpack
+  **[style-loader](https://www.npmjs.com/package/style-loader)** - A CSS style loader plugin for webpack
+  **[webpack](https://www.npmjs.com/package/react-router-dom)** - Used to bundle the app's js and scss files for usage in the browser

### Development Dependencies
The following dependencies are required by the app during development
  +  **[babel-eslint](https://www.npmjs.com/package/babel-eslint)** - Used with ESLint to lint syntax errors
  +  **[babel-polyfill](https://www.npmjs.com/package/babel-polyfill)** - Provides Promise support as polyfills in PhantomJS
  +  **[coveralls](https://www.npmjs.com/package/coveralls)** - Display test coverage
  +  **[enzyme](https://www.npmjs.com/package/enzyme)** - Enzyme is used together with mocha, chai and expect.js to test this application
  +  **[eslint](https://www.npmjs.com/package/eslint)** - This is a javascript syntax highlighter used to highlight syntax errors during the development of this app
  +  **[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)**, **[eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)**, **[eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)**, **[eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)**  - These are ESLint packages containing all of ESLint rules and they are used in this application to define rules and highlight errors
  +  **[karma](https://www.npmjs.com/package/karma)** - Used for running tests
  +  **[karma-chai-plugins](https://www.npmjs.com/package/karma-chai-plugins)** - Chai browser plugins set for Karma
  +  **[karma-chrome-launcher](https://www.npmjs.com/package/karma-chrome-launcher)** - Launcher for Google Chrome, Google Chrome Canary and Google Chromium
  +  **[karma-coverage](https://www.npmjs.com/package/karma-coverage)** - Used for reporting test coverage
  +  **[karma-coveralls](https://www.npmjs.com/package/karma-coveralls)** - Used with Karma for sending test coverage
  +  **[karma-mocha](https://www.npmjs.com/package/karma-mocha)** - Adapter for the Mocha testing framework
  +  **[karma-mocha-reporter](https://www.npmjs.com/package/karma-mocha-reporter)** - Karma reporter plugin with mocha style logging
  +  **[karma-phantomjs-launcher](https://www.npmjs.com/package/karma-phantomjs-launcher)** - Launcher for PhantomJS
  +  **[karma-sourcemap-loader](https://www.npmjs.com/package/karma-sourcemap-loader)** - Preprocessor that locates and loads existing source maps
  +  **[karma-webpack](https://www.npmjs.com/package/karma-webpack)** - Use webpack to preprocess files in karma
  +  **[mocha](https://www.npmjs.com/package/mocha)** - Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser
  +  **[react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils)** - This package provides the React TestUtils add-on
  +  **[react-test-renderer](https://www.npmjs.com/package/react-test-renderer)** - This package provides two React renderers that can be used for testing purposes:
     +  Test renderer - Renders React components to pure JavaScript objects without depending on the DOM or a native mobile environment
     +  Shallow renderer - Shallow rendering lets you render a component "one level deep" and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered
  +  **[sinon](https://www.npmjs.com/package/sinon)** - Used with mocha and enzyme for mocking React components during test

## Front End Dependencies
+  **[React Semantic UI](https://react.semantic-ui.com/)** - All part of the app was styled with this css framework.

## Installation and setup
+  Navigate to a directory using your favourite `terminal`.
+  Clone this repository on that directory.
  +  Using SSH;
    `$ git clone git@github.com:codejockie/headlines.git`

  +  Using HTTP;
    `$ git clone https://github.com/codejockie/headlines.git`

+  Navigate to the repo's directory
  +  `$ cd headlines`
+  Install the app's dependencies
  +  `$ npm install`
+  Run the app
  +  `$ npm start`

## Tests
+  The tests were written using Enzyme, Karma, and Mocha.
+  The test coverage is generated by `karma-coverage` package
+  To run tests, navigate to the project's root directory
+  Run the following commands.
  +  `$ npm test`
  

## How to contribute
To contribute, fork this repo to your private repository and create a pull request based on the feature you want to add.

## Disclaimer
This app and its functions are limited by time constraint and is in no way at its best.

### FAQ
+ Can I fork the repo?
  + Feel free
+ Can I contribute to the project?
  + Feel free

## License

(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Author
John Kennedy - @codejockie
