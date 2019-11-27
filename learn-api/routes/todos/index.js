const express = require("express");
const router = express.Router();

const todoController = require("./controller");

router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.delete("/:id", todoController.deleteOne);
router.post("/", todoController.addOne);

module.exports = router;
