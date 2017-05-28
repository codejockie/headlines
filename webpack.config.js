const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css',
});

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery',
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: '/client',
    sourceMapFilename: 'bundle.map',
  },
  devtool: '#source-map',
  resolve: {
    modules: ['node_modules', './app/components'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // {
      //     test: /\.scss$/,
      //     use: extractPlugin.extract({
      //         use: ['style-loader', 'css-loader', 'sass-loader']
      //     })
      // }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    // extractPlugin
  ],
};
