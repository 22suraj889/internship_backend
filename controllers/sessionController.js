const Session = require("../model/sessionModel");
const Token = require("../model/authorizationSessionModel");
const PendingSession = require("../model/pendingSessionsModel");
const getSessions = async (req, res) => {
  try {
    const allSessions = await Session.find({});
    const filterSessions = allSessions.filter((s) => s.booked === false);
    res.status(200).json(filterSessions);
  } catch (error) {
    console.log(error);
  }
};

const postSession = async (req, res) => {
  const { slot, date, time, booked } = req.body;
  try {
    const { userName, uId } = await Token.findOne({});
    const newSession = await Session.create({
      deanUId: uId,
      dean: userName,
      slot,
      date,
      time,
      booked,
    });
    res.status(200).json({ message: "Session created" });
  } catch (error) {
    console.log(error);
  }
};

const bookSession = async (req, res) => {
  const { id } = req.params;
  try {
    const session = await Session.findByIdAndUpdate(id, { booked: true });
    const { userName } = await Token.findOne({});
    const pendingSession = await PendingSession.create(
      {
        deanUid: session.deanUId,
        studentName: userName,
        slot: session.slot,
        date: session.date,
        time: session.time,
      },
      { new: true }
    );
    res.status(200).json({ message: "Session booked" });
  } catch (error) {
    console.log(error);
  }
};

const pendingSession = async (req, res) => {
  try {
    const { uId } = await Token.findOne({});
    const allPendingSessions = await PendingSession.find({});
    const currentDeanPendingSession = allPendingSessions.filter(
      (ps) => ps.deanUid === uId
    );
    res.status(200).json(currentDeanPendingSession);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getSessions, postSession, bookSession, pendingSession };
