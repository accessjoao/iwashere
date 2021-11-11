const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({
        message: "✨",
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
});

module.exports = router;