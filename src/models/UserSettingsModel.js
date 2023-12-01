const mongoose = require("mongoose");

const UserSettingsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  settings: {
    findAtOpening: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});

module.exports.UserSettings = mongoose.model(
  "UserSettings",
  UserSettingsSchema
);
