require('dotenv').config()

const mysql = require('mysql')
const express = require('express')
const app = express()
const connection = mysql.createConnection({
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD
});

connection.query('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50));', (err) => {
  if (err) throw err;
});
connection.query('INSERT INTO users (name) VALUES ("hoge");', (err) => {
  if (err) throw err;
});
connection.query('SELECT * from users;', (err, rows) => {
  if (err) throw err;
  console.log(rows);
});

app.get('/', (req, res) =>{
    connection.query('SELECT * from users;', (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
