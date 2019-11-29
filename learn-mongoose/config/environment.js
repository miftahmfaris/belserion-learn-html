require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME
};
