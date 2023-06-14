const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  uId: { type: Number, require: true },
  password: { type: String, require: true },
  isDean: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", userSchema);
