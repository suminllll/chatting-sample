const roomCtr = require("../controller/rooms");
const express = require("express");
const router = express.Router();
const { jwtDeserializer } = require("../commons/jwt");

router.get("/", async function (req, res, next) {
  const reqData = {};
  const resData = await roomCtr.getAllInfo(reqData);

  return res.status(resData.http_status).send(resData);
});

router.get("/:room_no", async function (req, res, next) {
  const reqData = {
    room_no: req.params.room_no,
  };

  const resData = await roomCtr.getRoom(reqData);

  return res.status(resData.http_status).send(resData);
});

//모든 채팅내용 불러옴
router.get("/chat/:room_no/message", jwtDeserializer, async (req, res) => {
  const reqData = {
    room_no: req.params.room_no,
  };

  const resData = await roomCtr.getChat(reqData);

  return res.status(resData.http_status).send(resData);
});

//접속한 유저 불러옴
router.get("/chat/:room_no/userList", jwtDeserializer, async (req, res) => {
  const reqData = {
    room_no: req.params.room_no,
  };

  const resData = await roomCtr.getUser(reqData);

  return res.status(resData.http_status).send(resData);
});

module.exports = router;
