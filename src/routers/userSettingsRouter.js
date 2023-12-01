const express = require("express");
const {
  UserSettingsController,
} = require("../controllers/UserSettingsController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const userSettingsRouter = express.Router();

userSettingsRouter
  .route("/")
  .all(authMiddleware)
  .get(UserSettingsController.getUserSettings)
  .post(UserSettingsController.setUserSettings);

module.exports.userSettingsRouter = userSettingsRouter;
