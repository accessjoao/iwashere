const { Router } = require("express");

const LogEntry = require("./../models/LogEntry");

const router = Router();

//listing route

router.get("/", async(req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }
});

//creating route

router.post("/", async(req, res, next) => {
    try {
        const logEntry = new LogEntry(req.body);
        const createdEntry = await logEntry.save();
        res.json(createdEntry);
    } catch (error) {
        if (error.name === "ValidationError") {
            res.status(422);
        }
        next(error);
    }
});

// delete route

router.delete("/", async(req, res, next) => {
    console.log(req.body);
    try {
        const id = req.body.id;
        const deleted = await LogEntry.findByIdAndDelete({ _id: id });
        res.json(deleted);
    } catch (error) {
        console.log(req.body);
        next(error);
    }
});

module.exports = router;