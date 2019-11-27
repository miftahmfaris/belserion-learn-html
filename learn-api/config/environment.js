require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD
};
