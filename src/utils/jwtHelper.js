const jwt = require("jsonwebtoken");
const path = require("path");

const createToken = (data) => {
  return jwt.sign(data, path.join(__dirname, "..", "config", "Secret.key"));
};

const decodeToken = (data) => {
  return jwt.decode(data, path.join(__dirname, "..", "config", "Secret.key"));
};

module.exports = { createToken, decodeToken };
