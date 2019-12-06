const express = require("express");
const router = express.Router();
const { upload } = require("../../config");

const {
    getAll,
    getById,
    deleteOne,
    addOne,
    updateOne,
    login
} = require("./controller");

router.get("/", getAll);
router.get("/:id", getById);
router.delete("/:id", deleteOne);
router.post("/", upload.single("image"), addOne);
router.post("/login", login);
router.put("/:id", updateOne);

module.exports = router;
