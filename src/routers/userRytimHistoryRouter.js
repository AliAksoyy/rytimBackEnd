const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  UserRytimHistoryController,
} = require("../controllers/UserRytimHistoryController");

const userRytimHistoryRouter = express.Router();

userRytimHistoryRouter
  .route("/")
  .all(authMiddleware)
  .get(UserRytimHistoryController.getHistory)
  .post(UserRytimHistoryController.addRytimToHistory);

module.exports.userRytimHistoryRouter = userRytimHistoryRouter;
