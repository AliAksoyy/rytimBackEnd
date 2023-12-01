const { UserRytimHistory } = require("../models/UserRytimHistoryModel");

const getUserRytimHistoryService = async ({ userId }) => {
  const { history } = await UserRytimHistory.findOneAndUpdate(
    { userId },
    {},
    { upsert: true, new: true }
  );

  return { success: true, data: history };
};
const addRytimToHistoryService = async ({
  userId,
  acrId,
  artist,
  title,
  album,
  youtubeId,
  spotifyId,
  dezerId,
  durationMs,
}) => {
  const { history } = await UserRytimHistory.findOneAndUpdate(
    { userId },
    {
      $push: {
        history: {
          rytimDate: Date.now(),
          acrId,
          artist,
          title,
          album,
          youtubeId,
          spotifyId,
          dezerId,
          durationMs,
        },
      },
    },
    { upsert: true, new: true }
  );

  return { success: true, data: history };
};

module.exports = { getUserRytimHistoryService, addRytimToHistoryService };
