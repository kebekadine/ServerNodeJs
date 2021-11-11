require('dotenv').config({ path: '../.env' });

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: 'root',
  password: 'root',
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
