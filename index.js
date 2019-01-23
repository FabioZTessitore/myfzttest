const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.end('Hello');
});

app.listen(process.env.PORT || 9000);
