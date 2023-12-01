
const CustomError = require("../errors/CustomError");
const { UserPlaylist } = require("../models/UserPlaylistModel");

const getPlaylistsService = async ({ userId }) => {
  const { playlists } = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  return { success: true, data: playlists };
};

const createPlaylistService = async ({ userId, playlistName }) => {
  const { playlists } = await UserPlaylist.findOneAndUpdate(
    { userId },
    {
      $push: {
        playlists: {
          playlistId: "playlist-" + Date.now(),
          playlistName,
        },
      },
    },
    { upsert: true, new: true }
  );

  return { success: true, data: playlists };
};

const deletePlaylistService = async ({ userId, playlistId }) => {
  const userPlaylists = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  userPlaylists.playlists = userPlaylists.playlists.filter(
    (playlist) => playlist.playlistId != playlistId
  );

  await userPlaylists.save();

  return { success: true, data: userPlaylists };
};

const updatePlaylistNameService = async ({
  userId,
  playlistId,
  playlistName,
}) => {
  const userPlaylists = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  const playlist = userPlaylists.playlists.find(
    (playlist) => playlist.playlistId == playlistId
  );

  playlist.playlistName = playlistName;

  await userPlaylists.save();

  return { success: true, data: playlist };
};
const getPlaylistService = async ({ userId, playlistId }) => {
  const userPlaylists = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  const playlist = userPlaylists.playlists.find(
    (playlist) => playlist.playlistId == playlistId
  );

  if (!playlist) {
    throw new CustomError({ status: 404, message: "PLAYLIST_NOT_FOUND" });
  }

  return { success: true, data: playlist };
};

const addRytimToPlaylistService = async ({
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
}) => {
  const userPlaylists = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  const playlist = userPlaylists.playlists.find(
    (playlist) => playlist.playlistId == playlistId
  );

  if (!playlist) {
    throw new CustomError({ status: 404, message: "PLAYLIST_NOT_FOUND" });
  }

  if (playlist.rytims.find((rytim) => rytim.acrId == acrId)) {
    throw new CustomError({
      status: 400,
      message: "RYTIM_ALREADY_IN_PLAYLIST",
    });
  }

  playlist.rytims.push({
    rytimDate: Date.now(),
    acrId,
    artist,
    title,
    album,
    youtubeId,
    spotifyId,
    dezerId,
    durationMs,
  });

  await userPlaylists.save();

  return { success: true, data: playlist };
};

const removeRytimToPlaylistService = async ({ userId, playlistId, acrId }) => {
  const userPlaylists = await UserPlaylist.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  const playlist = userPlaylists.playlists.find(
    (playlist) => playlist.playlistId == playlistId
  );

  if (!playlist) {
    throw new CustomError({ status: 404, message: "PLAYLIST_NOT_FOUND" });
  }

  playlist.rytims = playlist.rytims.filter((rytim) => rytim.acrId != acrId);

  await userPlaylists.save();

  return { success: true, data: playlist };
};

module.exports = {
  getPlaylistsService,
  createPlaylistService,
  deletePlaylistService,
  updatePlaylistNameService,
  getPlaylistService,
  addRytimToPlaylistService,
  removeRytimToPlaylistService,
};
