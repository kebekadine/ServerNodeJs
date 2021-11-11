require('dotenv').config({ path: '../.env' });

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'BDD_NodeServer',
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
