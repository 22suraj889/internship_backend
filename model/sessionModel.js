const mongoose = require("mongoose");

const sessionSchema = mongoose.Schema({
  deanUId: { type: Number, required: true },
  dean: { type: String, require: true },
  slot: { type: Number, require: true },
  date: { type: String, require: true },
  time: { type: String, require: true },
  booked: { type: Boolean, default: false },
});

module.exports = mongoose.model("sessions", sessionSchema);
