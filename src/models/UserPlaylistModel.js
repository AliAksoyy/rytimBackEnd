const mongoose = require("mongoose");

const UserPlaylistSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  playlists: {
    type: [
      {
        playlistId: {
          type: String,
          required: true,
        },
        playlistName: {
          type: String,
          required: true,
        },
        rytims: [
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
      },
    ],
    default: [],
  },
});

module.exports.UserPlaylist = mongoose.model(
  "UserPlaylist",
  UserPlaylistSchema
);