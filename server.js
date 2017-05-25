const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('client'));

app.listen(3000, () => {
    console.log('Express server is up on port', port);
});