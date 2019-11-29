const mongoose = require("mongoose");
const { DATABASE_HOST, DATABASE_NAME } = require("./environment");

mongoose
    .connect(`${DATABASE_HOST}/${DATABASE_NAME}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(error => {
        console.log("There is something wrong", error);
    });

const db = mongoose.connection;

module.exports = db;
