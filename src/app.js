const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const { indexRouter } = require("./routers/indexRouter");
const { ErrorHandler } = require("./errors/ErrorHandler");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(indexRouter);
app.use(ErrorHandler);

module.exports = app;
