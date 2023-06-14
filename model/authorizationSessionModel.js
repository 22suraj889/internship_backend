const mongoose = require("mongoose");

const authorizationSessionSchema = mongoose.Schema({
  token: { type: String, required: true },
  userName: { type: String, required: true },
  uId: { type: Number, required: true },
});

module.exports = mongoose.model(
  "authorizationSession",
  authorizationSessionSchema
);
