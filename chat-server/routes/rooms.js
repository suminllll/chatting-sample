const roomCtr = require("../controller/rooms");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  const reqData = {};
  const resData = await roomCtr.getAllInfo(reqData);

  return res.status(resData.http_status).send(resData);
});

router.get("/:id", async function (req, res, next) {
  const reqData = {
    room_no: req.params.id,
  };

  const resData = await roomCtr.getRoom(reqData);

  return res.status(resData.http_status).send(resData);
});

router.post("/chat", async function (req, res, next) {
  const reqData = {
    member_no: req.body.member_no,
    room_type: req.body.room_type,
    room_no: req.body.room_no,
    chat: req.body.chat,
  };

  const resData = await roomCtr.postChat(reqData);

  return res.status(resData.http_status).send(resData);
});

router.get("/chat/:room_type/:nick", async function (req, res, next) {
  const reqData = {
    room_type: req.params.room_type,
    nick: req.params.nick,
  };

  const resData = await roomCtr.getChat(reqData);

  return res.status(resData.http_status).send(resData);
});

module.exports = router;
