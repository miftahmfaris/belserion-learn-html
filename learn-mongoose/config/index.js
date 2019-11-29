const { PORT, DATABASE_HOST, DATABASE_NAME } = require("./environment");
const db = require("./connection");

module.exports = {
    PORT: PORT,
    DATABASE_HOST: DATABASE_HOST,
    DATABASE_NAME: DATABASE_NAME,
    db: db
};
