const ErrorHandler = (err, req, res, next) => {
  // Custom Error
  if (err.status < 1000) {
    res.status(err.status).json({ status: err.status, message: err.message });
  }
  // Mongoo Error
  else if (err.code === 11000) {
    res.status(400).json({
      status: 400,
      message: "DUPLICATE_KEY_ERROR",
    });
  } else if (err.name === "CastError") {
    res.status(400).json({ status: 400, message: "INCORRECT_USER_ID_FORMAT" });
  } else if (err.name === "ValidationError") {
    res.status(400).json({ status: 400, message: "VALIDATION_ERROR" });
  }
  // axios errors
  else if (err.name.match(/axios/gim)) {
    res.status(err.response.status).json(err.response.data);
  }
  // server errors
  else {
    res.status(500).json({ status: 500, message: "SOMETHING_WENT_WRONG" });
  }
};

module.exports.ErrorHandler = ErrorHandler;
