const mysql = require("mysql");
const {
    DATABASE_HOST,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME
} = require("./environment");
const connection = mysql.createConnection({
    host: DATABASE_HOST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
});

module.exports = connection;
