const express = require("express");
const { authRouter } = require("./authRouter");
const { userSettingsRouter } = require("./userSettingsRouter");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/settings", userSettingsRouter);

module.exports.indexRouter = indexRouter;
