'use strict';

const express = require('express');

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('{"asd": "Hello worldddddddddd"}');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
