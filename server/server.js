const app = require("./index");

const PORT = process.env.PORT || 8001;
app.listen(PORT, () =>
  console.log(`Listening to  http://localhost:${PORT} ...`)
);
