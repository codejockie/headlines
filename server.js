const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client'));

app.get('/', (req, res) => {
  res.sendFile('client/index.html', { root: __dirname });
});

app.get('*', (req, res) => {
  res.redirect(301, '/');
});

app.listen(port);
