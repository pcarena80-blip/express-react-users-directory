const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
