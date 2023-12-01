const express = require("express");
const { AuthController } = require("../controllers/AuthController");

const authRouter = express.Router();

authRouter.route("/register").post(AuthController.register);
authRouter.route("/login").post(AuthController.login);
authRouter.route("/logout").post(AuthController.logout);

module.exports.authRouter = authRouter;
