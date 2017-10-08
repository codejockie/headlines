import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const app = express(),
  DIST_DIR = path.join(__dirname, 'client'),
  HTML_FILE = path.join(DIST_DIR, 'index.html'),
  compiler = webpack(config),
  isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static(DIST_DIR));
}

app.get('/', (req, res) => res.sendFile(HTML_FILE));
app.get('*', (req, res) => res.redirect(301, '/'));

app.listen(process.env.PORT || 3000);
