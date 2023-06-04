const express = require("express");
const app = express();
const partRoutes = require("./modules/routes/partRoute");
const userRoutes = require("./modules/routes/userRoute");

app.use(express.json());

app.use("/part/", partRoutes);
app.use("/user/", userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8000, () => {
  console.log("Server running on port on 8000");
});
