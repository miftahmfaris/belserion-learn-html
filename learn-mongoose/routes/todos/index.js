const router = require("express").Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addOne);

module.exports = router;
