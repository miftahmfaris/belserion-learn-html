const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send({ message: "Welcome to my sequelize api" });
});
app.use("/todos", require("./routes/todos"));
app.use("/users", require("./routes/users"));


app.listen(PORT, () => {
    console.log(`THis app listen in PORT: ${PORT}`);
});
