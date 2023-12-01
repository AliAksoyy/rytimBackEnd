const expressAsyncHandler = require("express-async-handler");
const {
  getUserSettingsService,
  setUserSettingsService,
} = require("../services/userSettingsServices");

class UserSettingsController {
  static getUserSettings = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const response = await getUserSettingsService({ userId });

    res.json(response);
  });
  static setUserSettings = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { findAtOpening } = req.body;
    const response = await setUserSettingsService({ userId, findAtOpening });

    res.json(response);
  });
}

module.exports.UserSettingsController = UserSettingsController;
