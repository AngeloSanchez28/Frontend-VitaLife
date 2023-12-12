const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/frontend-vita-life'));
app.get('/*',(req,res) =>
  res.sendFile('index.html', {root: 'dist/frontend-vita-life/'}),
);

app.listen(process.env.PORT || 8080);
