const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'root',
  password: 'root',
  host: 'localhost',
  database: 'users_crud',
  port: 3000
});