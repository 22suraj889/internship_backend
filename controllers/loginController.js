const User = require("../model/loginModel");
const Token = require("../model/authorizationSessionModel");
const { v4: uuidv4 } = require("uuid");

const login = async (req, res) => {
  const { uId, password } = req.body;
  console.log(uId, password);
  try {
    const user = await User.findOne({ uId });
    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    if (password !== user.password) {
      console.log("Password is incorrect");
      return res.status(404).json({ message: "Password is incorrect" });
    }

    const loggedInUser = await Token.create({
      token: uuidv4(),
      userName: user.name,
      uId: user.uId,
    });
    res.status(200).json({ message: `${loggedInUser.userName} logged in` });
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  const { name, uId, password, isDean } = req.body;
  try {
    const user = await User.findOne({ uId });
    if (user) {
      console.log("User already registered");
      return res.status(404).json({ message: "User already registered" });
    }

    const newUser = await User.create({ name, uId, password, isDean });
    const loggedInUser = await Token.create({
      token: uuidv4(),
      userName: newUser.name,
      uId: uId,
    });
    res.status(200).json({ message: `${loggedInUser.userName} logged in` });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    await Token.deleteMany({});
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { login, register, logout };
