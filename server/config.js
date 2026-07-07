const PORT = Number(process.env.PORT) || 3000;
const CLIENT_ORIGINS = (
  process.env.CLIENT_ORIGINS || "http://localhost:5173,http://127.0.0.1:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

module.exports = {
  CLIENT_ORIGINS,
  PORT,
};
