const {
    PORT,
    DATABASE_HOST,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    JWT_SECRET_KEY
} = require("./environment");
const { connect, get, close } = require("./connection");
const upload = require("./multer");

module.exports = {
    PORT: PORT,
    DATABASE_HOST: DATABASE_HOST,
    DATABASE_PASSWORD: DATABASE_PASSWORD,
    DATABASE_NAME: DATABASE_NAME,
    connect: connect,
    get: get,
    close: close,
    JWT_SECRET_KEY,
    upload
};
