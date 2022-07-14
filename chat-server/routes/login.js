const express = require("express");
const router = express.Router();
const loginCtr = require("../controller/login");
const { jwtSerializer, jwtDeserializer } = require("../commons/jwt");
const { authCheck } = require("../commons/auth");

//로그인시 해당 닉네임이 있는지 조회
//user 정보+쿠키를 가져옴
//쿠키를 해석해서 가져옴
router.get("/", jwtDeserializer, async (req, res) => {
  console.log("getLogin", req.user);

  const reqData = {
    id: req.user.id,
    nick: req.user.nick,
    password: req.user.password,
  };

  const resData = await loginCtr.getLogin(reqData);

  return res.status(resData.http_status).send(resData);
});

//회원가입
router.post("/", jwtSerializer, async function (req, res, next) {
  console.log(req);
  const reqData = {
    id: req.body.id,
    password: req.body.password,
    nick: req.body.nick,
  };

  const getMemberFromNick = await loginCtr.getLogin(reqData);

  // 이미 같은 id가 있을때. (기존)
  if (getMemberFromNick.data.length > 0) {
    return res.status(409).send(409);
  }

  // id 없으면 실행 (신규)
  const resData = await loginCtr.addLogin(reqData);

  //회원가입시 자동 로그인
  if (resData.success) {
    //세션생성
    // req.session.user = {
    //   id: reqData.id,
    //   password: reqData.password,
    //   nick: reqData.nick,
    // };
    // req.session.save(); //세션에 저장됨
    //  delete res.clearCookie("accessToken");
  }
  console.log("resData", resData);
  return res.status(resData.http_status).send(resData);
});

//로그아웃
router.post("/logout", async (req, res) => {
  res.clearCookie("accessToken").status(200).send({});
  delete req.session.user;
  // req.session.destroy((err) => {
  //   if (err) console.log("err");
  // });
  // res.end();
});

module.exports = router;
