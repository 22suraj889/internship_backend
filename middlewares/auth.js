const Token = require("../model/authorizationSessionModel");
const auth = async (req, res, next) => {
  const { token } = await Token.findOne({});
  if (token) next();
};

module.exports = auth;
