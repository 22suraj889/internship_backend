const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();
const {
  getSessions,
  postSession,
  bookSession,
  pendingSession,
} = require("../controllers/sessionController");
router.get("/", auth, getSessions);
router.post("/", auth, postSession);
router.post("/book/:id", auth, bookSession);
router.get("/pendingSessions", auth, pendingSession);

module.exports = router;
