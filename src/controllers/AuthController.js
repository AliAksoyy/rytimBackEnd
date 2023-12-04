const expressAsyncHandler = require("express-async-handler");
const { loginService, registerService } = require("../services/authService");
const { createToken } = require("../utils/jwtHelper");

class AuthController {
  static register = expressAsyncHandler(async (req, res) => {
    const { name, lastName, email, password } = req.body;
    const response = await registerService({ name, lastName, email, password });

    const token = createToken({
      email,
      expiredDate: Date.now() + 1000 * 60 * 60 * 24,
    });

    res
      .cookie("cookie", token, { maxAge: 1000 * 60 * 60 * 24 })
      .json({ ...response, token });
  });
  static login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const response = await loginService({ email, password });

    const token = createToken({
      email,
      expiredDate: Date.now() + 1000 * 60 * 60 * 24,
    });

    res
      .cookie("cookie", token, { maxAge: 1000 * 60 * 60 * 24 })
      .json({ ...response, token });
  });
  static logout = expressAsyncHandler(async (req, res) => {
    res.clearCookie("cookie").json({ success: true, data: "LOGOUT_SUCCESS" });
  });
}

module.exports.AuthController = AuthController;
