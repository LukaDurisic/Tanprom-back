const express = require("express");
const app = express();
const partRoutes = require("./modules/routes/partRoutes");

app.use("/", partRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8000, () => {
  console.log("Server running on port on 8000");
});
