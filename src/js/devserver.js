const express = require('express')
const app = express()

app.get('/bunches', (req, res) =>{
  const json = require('../../json/bunches.json');
  res.json(json);
});

app.listen(3000, () => console.log('Listening on port 3000'))
