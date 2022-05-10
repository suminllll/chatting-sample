const express = require("express");
const router = express.Router();
const loginCtr = require("../controller/login");
const { jwtSerializer, jwtDeserializer } = require("../commons/jwt");

//로그인시 해당 닉네임이 있는지 조회
//user 정보+쿠키를 가져옴
//쿠키를 해석해서 가져옴
router.get("/info", jwtDeserializer, async (req, res) => {
  const reqData = {
    nick: req.user.nick,
  };

  const resData = await loginCtr.getLogin(reqData);

  return res.status(resData.http_status).send(resData);
});

router.post("/add", jwtSerializer, async function (req, res, next) {
  const reqData = {
    nick: req.body.nick,
  };

  // nick 갔다가 찾아야 하는데 만약에 있으면 아래를 실행하지 않아야 한다.
  const getMemberFromNick = await loginCtr.getLogin(reqData);
  if (getMemberFromNick.success) {
    return res.status(getMemberFromNick.http_status).send(getMemberFromNick);
  }

  // 닉이 없어
  const resData = await loginCtr.addLogin(reqData);

  return res.status(resData.http_status).send(resData);
});
module.exports = router;
