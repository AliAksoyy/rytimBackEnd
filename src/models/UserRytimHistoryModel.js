const mongoose = require("mongoose");

const UserRytimHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  history: {
    type: [
      {
        rytimDate: {
          type: Date,
          required: true,
        },
        acrId: {
          type: String,
          required: true,
        },
        artist: {
          type: String,
        },
        title: {
          type: String,
        },
        album: {
          type: String,
        },
        youtubeId: {
          type: String,
        },
        spotifyId: {
          type: String,
        },
        dezerId: {
          type: String,
        },
        durationMs: {
          type: Number,
        },
      },
    ],
    default: [],
  },
});

module.exports.UserRytimHistory = mongoose.model(
  "UserRytimHistory",
  UserRytimHistorySchema
);
