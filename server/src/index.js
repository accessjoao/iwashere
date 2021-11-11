const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const middlewares = require("./middlewares");
const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/test", {
        useNewURLParser: true,
    })
    .then(() => {
        console.log("MongoDB🍀 connected");
    })
    .catch((e) => {
        console.log(e);
    });

const logs = require("./api/logs");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

//replacing cannot get / message
app.get("/", (req, res) => {
    res.json({
        message: "Hello Joao!",
    });
});

app.use("/api/logs", logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});