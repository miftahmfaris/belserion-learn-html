const express = require("express");
const router = express.Router();

const {
    getAll,
    getById,
    deleteOne,
    addOne,
    updateOne
} = require("./controller");

router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteOne);
router.post("/", addOne);
router.put("/:id", updateOne);

module.exports = router;
