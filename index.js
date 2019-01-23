const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.end('Hello');
});

app.listen(5000);
