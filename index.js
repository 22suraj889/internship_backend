const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./mongo/db");
const loginRoutes = require("./routes/loginRoutes");
const sessionsRoutes = require("./routes/sessionsRoutes");
const bodyParser = require("body-parser");
const app = express();
connectDB();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/user", loginRoutes);
app.use("/session", sessionsRoutes);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
