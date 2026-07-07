function notFoundHandler(req, res) {
  return res.status(404).json({
    error: {
      message: `Route ${req.method} ${req.originalUrl} was not found.`,
      statusCode: 404,
    },
  });
}

module.exports = notFoundHandler;
