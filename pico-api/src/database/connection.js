const mysql = require('mysql2');

let connectionBanco = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 3307
        
    }
).promise();

module.exports = connectionBanco;