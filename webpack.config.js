const path = require('path');
const webpack = require('webpack');
const envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (error) {
  /**/
}

module.exports = {
  entry: [
    './app/app.jsx',
  ],
  externals: {
    jquery: 'jQuery',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react',
  },
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: '/client',
    sourceMapFilename: 'bundle.map',
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map',
  resolve: {
    modules: ['node_modules', './app/components'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0', 'airbnb'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true,
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
        NEWS_API_KEY: JSON.stringify(process.env.NEWS_API_KEY),
        MERCURY_API_KEY: JSON.stringify(process.env.MERCURY_API_KEY),
      },
    }),
  ],
};
