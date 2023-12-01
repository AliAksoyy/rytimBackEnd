const expressAsyncHandler = require("express-async-handler");
const CustomError = require("../errors/CustomError");
const { decodeToken } = require("../utils/jwtHelper");
const { getProfileService } = require("../services/authService");

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  const { cookie: token } = req.cookies;

  if (!token) {
    throw new CustomError({ status: 401, message: "YOUR_NOT_LOGINNED" });
  }
  try {
    const tokenData = decodeToken(token);

    if (tokenData?.expiredDate < Date.now()) {
      throw new CustomError({ status: 401, message: "TOKEN_EXPIRED" });
    }

    req.user = (await getProfileService({ email: tokenData.email })).data;
  } catch (err) {
    throw new CustomError({ status: 401, message: "USER_NOT_FOUND" });
  }
  next();
});

module.exports.authMiddleware = authMiddleware;
