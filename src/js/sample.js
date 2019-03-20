'use strict';

require('dotenv').config();

let mysql = require('mysql');
let connection = mysql.createConnection({
  host : process.env.DB_HOST,
  port : process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user : process.env.DB_USER,
  password : process.env.DB_PASSWORD
});

connection.connect();

connection.query('CREATE TABLE test_users (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(50));', (err, rows, fields) => {
    if (err) throw err;
});
connection.query('INSERT INTO test_users (name) VALUES ("hoge");', (err, rows, fields) => {
  if (err) throw err;
});
connection.query('SELECT * from test_users;', (err, rows, fields) => {
  if (err) throw err;
  console.log(rows);
});

connection.end();
