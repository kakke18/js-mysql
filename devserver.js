const express = require('express')
const app = express()

app.get('/bunches', (req, res) =>{
  const json = require('./bunches.json');
  res.json(json);
});

app.listen(3000, () => console.log('Listening on port 3000'))
