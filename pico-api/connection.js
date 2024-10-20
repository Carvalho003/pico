const mysql = require('mysql2');

let poolBanco = mysql.createPool(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3306
        
    }
).promise();

module.exports = poolBanco;