const {
    PORT,
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_NAME
} = require("./environment");
const { connect, get, close } = require("./connection");

module.exports = {
    PORT: PORT,
    DATABASE_HOST: DATABASE_HOST,
    DATABASE_PASSWORD: DATABASE_PASSWORD,
    DATABASE_NAME: DATABASE_NAME,
    connect: connect,
    get: get,
    close: close
};
