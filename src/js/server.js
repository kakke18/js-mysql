require('dotenv').config()

const express = require('express')
const app = express()
const mysql = require('mysql')
const connection = mysql.createConnection({
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD
})

app.get('/', (req, res) =>{
    connection.connect();
    connection.query('SELECT * from test_users;', (err, rows, fields) => {
        if (err) throw err
        res.json(rows)
    })
    connection.end()
});

app.listen(3000, () => console.log('Listening on port 3000'))
