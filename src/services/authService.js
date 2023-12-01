const CustomError = require("../errors/CustomError");
const { User } = require("../models/UserModel");

const getProfileService = async ({ email }) => {
  const user = await User.findOne({ email });
  return { success: true, data: user };
};

const registerService = async ({ name, lastName, email, password }) => {
  const user = new User({
    userId: "user" + Date.now(),
    name,
    lastName,
    email,
    password,
  });

  await user.save();

  return { success: true, data: user };
};
const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new CustomError({ status: 404, message: "USER_NOT_FOUND" });
  }

  if (!user.comparePassword(password)) {
    throw new CustomError({ status: 400, message: "PASSWORD_MISMATCH" });
  }

  return { success: true, data: user };
};

module.exports = {
  registerService,
  loginService,
  getProfileService,
};
