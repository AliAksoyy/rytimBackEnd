const expressAsyncHandler = require("express-async-handler");
const {
  getPlaylistsService,
  createPlaylistService,
  addRytimToPlaylistService,
  removeRytimToPlaylistService,
  getPlaylistService,
  deletePlaylistService,
  updatePlaylistNameService,
} = require("../services/userPlaylistServices");

class UserPlaylistController {
  static getPlaylists = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;

    const response = await getPlaylistsService({ userId });

    res.json(response);
  });

  static createPlaylist = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { playlistName } = req.body;

    const response = await createPlaylistService({ userId, playlistName });

    res.json(response);
  });

  static deletePlaylist = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { playlistId } = req.params;

    const response = await deletePlaylistService({ userId, playlistId });

    res.json(response);
  });

  static updatePlaylistName = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { playlistId } = req.params;
    const { playlistName } = req.body;

    const response = await updatePlaylistNameService({
      userId,
      playlistId,
      playlistName,
    });

    res.json(response);
  });

  static getPlaylist = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { playlistId } = req.params;

    const response = await getPlaylistService({ userId, playlistId });

    res.json(response);
  });

  static addRytimToPlaylist = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const {
      acrId,
      artist,
      title,
      album,
      youtubeId,
      spotifyId,
      dezerId,
      durationMs,
    } = req.body;
    const { playlistId } = req.params;

    const response = await addRytimToPlaylistService({
      userId,
      playlistId,
      acrId,
      artist,
      title,
      album,
      youtubeId,
      spotifyId,
      dezerId,
      durationMs,
    });

    res.json(response);
  });

  static removeRytimToPlaylist = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { acrId } = req.body;
    const { playlistId } = req.params;

    const response = await removeRytimToPlaylistService({
      userId,
      playlistId,
      acrId,
    });

    res.json(response);
  });
}
module.exports.UserPlaylistController = UserPlaylistController;
