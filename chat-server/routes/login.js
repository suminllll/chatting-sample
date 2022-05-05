const express = require("express");
const router = express.Router();
const loginCtr = require("../controller/login");

//로그인시 해당 닉네임이 있는지 조회
router.get("/:nick", async function (req, res, next) {
  const reqData = {
    nick: req.params.nick,
  };
  const resData = await loginCtr.getLogin(reqData);

  return res.status(resData.http_status).json(resData);
});

//닉네임이 없으면 닉네임 정보 추가(회원가입)
router.post("/add", async function (req, res, next) {
  const reqData = {
    nick: req.body.nick,
  };

  const resData = await loginCtr.addLogin(reqData);

  return res.status(resData.http_status).send(resData);
});

module.exports = router;