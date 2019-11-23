const app = require(".");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
