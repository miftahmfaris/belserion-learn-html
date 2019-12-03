const {
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    DATABASE_USER
} = require("./environment");

module.exports = {
    development: {
        username: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME,
        host: DATABASE_HOST,
        dialect: "mysql",
        operatorsAliases: false
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false
    }
};
