const { UserSettings } = require("../models/UserSettingsModel");

const getUserSettingsService = async ({ userId }) => {
  const { settings } = await UserSettings.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  return { success: true, data: settings };
};
const setUserSettingsService = async ({ userId, findAtOpening }) => {
  const { settings } = await UserSettings.findByIdAndUpdate(
    { userId },
    { findAtOpening },
    { upsert: true, new: true }
  );

  return { success: true, data: settings };
};

module.exports = { getUserSettingsService, setUserSettingsService };
