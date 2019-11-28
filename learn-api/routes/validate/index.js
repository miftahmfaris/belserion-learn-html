const express = require("express");
const router = express.Router();

const { validate } = require("./controller")();

router.post("/:id", validate);

module.exports = router;
