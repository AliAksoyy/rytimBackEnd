const express = require("express");
const { authRouter } = require("./authRouter");
const { userSettingsRouter } = require("./userSettingsRouter");
const { userRytimHistoryRouter } = require("./userRytimHistoryRouter");
const { userPlaylistRouter } = require("./userPlaylistRouter");

const indexRouter = express.Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/settings", userSettingsRouter);
indexRouter.use("/history", userRytimHistoryRouter);
indexRouter.use("/playlist", userPlaylistRouter);


module.exports.indexRouter = indexRouter;
