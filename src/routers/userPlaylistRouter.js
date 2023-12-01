const express = require("express");
const {
  UserPlaylistController,
} = require("../controllers/UserPlaylistController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const userPlaylistRouter = express.Router();

userPlaylistRouter
  .route("/")
  .all(authMiddleware)
  .get(UserPlaylistController.getPlaylists)
  .post(UserPlaylistController.createPlaylist);

userPlaylistRouter
  .route("/:playlistId")
  .all(authMiddleware)
  .get(UserPlaylistController.getPlaylist)
  .delete(UserPlaylistController.deletePlaylist)
  .post(UserPlaylistController.updatePlaylistName);

userPlaylistRouter
  .route("/addRytimToPlaylist/:playlistId")
  .all(authMiddleware)
  .post(UserPlaylistController.addRytimToPlaylist);

userPlaylistRouter
  .route("/removeRytimToPlaylist/:playlistId")
  .all(authMiddleware)
  .post(UserPlaylistController.removeRytimToPlaylist);

module.exports.userPlaylistRouter = userPlaylistRouter;
