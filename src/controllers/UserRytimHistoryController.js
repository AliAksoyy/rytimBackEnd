const expressAsyncHandler = require("express-async-handler");
const {
  getUserRytimHistoryService,
  addRytimToHistoryService,
} = require("../services/userRytimHistoryServices");

class UserRytimHistoryController {
  static getHistory = expressAsyncHandler(async (req, res) => {
    const { userId } = req.user;
    const response = await getUserRytimHistoryService({ userId });

    res.json(response);
  });
  static addRytimToHistory = expressAsyncHandler(async (req, res) => {
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

    const response = await addRytimToHistoryService({
      userId,
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
}

module.exports.UserRytimHistoryController = UserRytimHistoryController;
