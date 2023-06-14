const mongoose = require("mongoose");

const pendingSessionSchema = mongoose.Schema({
  deanUid: { type: Number, require: true },
  studentName: { type: String, require: true },
  slot: { type: Number, require: true },
  date: { type: String, require: true },
  time: { type: String, require: true },
});

module.exports = mongoose.model("pendingSession", pendingSessionSchema);
