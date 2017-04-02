const express = require('express');
const open = require('open');
const app = express();

app.use(express.static('public'));

app.listen(8080, () => {
  "use strict";
  let url = 'http://localhost:8080';
  open(url);
  console.log(url);
});
