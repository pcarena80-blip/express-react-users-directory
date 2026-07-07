const express = require("express");
const healthRoutes = require("./routes/healthRoutes");
const userRoutes = require("./routes/userRoutes");
const { CLIENT_ORIGINS } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const requestOrigin = req.get("origin");

  if (requestOrigin && CLIENT_ORIGINS.includes(requestOrigin)) {
    res.header("Access-Control-Allow-Origin", requestOrigin);
    res.header("Vary", "Origin");
  }

  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  return next();
});

app.use("/health", healthRoutes);
app.use("/users", userRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
