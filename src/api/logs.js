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
    try {
        const deleted = await LogEntry.findByIdAndDelete();
        res.json(deleted);
    } catch (error) {
        next(error);
    }
});

/*

exports.deleteTrip = async (req,res)=> {
  try{
    const response = await Trip.findByIdAndDelete(req.params.tripId)
    res.status(200).json({response})
  }
  catch(err){
    res.status(400).json({error: err, message:"Could not delete trip"})
  }

*/

// edit route

module.exports = router;