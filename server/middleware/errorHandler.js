function errorHandler(error, req, res, next) {
  if (res.headersSent) {
    return next(error);
  }

  const statusCode = error.statusCode || 500;
  const message =
    statusCode === 500 ? "An unexpected server error occurred." : error.message;

  return res.status(statusCode).json({
    error: {
      message,
      statusCode,
    },
  });
}

module.exports = errorHandler;
