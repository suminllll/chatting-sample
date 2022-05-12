const roomCtr = require("../controller/rooms");
const express = require("express");
const router = express.Router();
const { jwtDeserializer } = require("../commons/jwt");

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

//모든 채팅내용 불러옴
router.get("/chat/:room_no/message", jwtDeserializer, async (req, res) => {
  const reqData = {
    room_no: req.params.room_no,
  };

  const resData = await roomCtr.getChat(reqData);

  return res.status(resData.http_status).send(resData);
});

//접속한 유저 불러옴
router.get("/chat/:room_no/users", jwtDeserializer, async (req, res) => {
  const reqData = {
    room_no: req.params.room_no,
  };

  const resData = await roomCtr.getUser(reqData);

  return res.status(resData.http_status).send(resData);
});

module.exports = router;
