const express = require("express");
const router = express.Router();
const loginCtr = require("../controller/login");
const { jwtDeserializer } = require("./jwt");

const common = {};

function authCheck(req, res) {
  if (!jwtDeserializer) {
    console.log("회원가입 먼저 해주세요");
  }
  console.log("authCheck", req.data);
  // const userToken = req.session.user;

  // console.log("userToken", userToken);

  // const memberInfo = jwtDeserializer.verify(userToken);

  // console.log("memberInfo", memberInfo);
  // return memberInfo;
  const length = req.data.length;
}

module.exports = { authCheck };
// const alertmove = require('../util/alertmove.js');

// exports.Auth = (req, res, next) => {
//   const token = req.cookies.user;
//   if (token !== undefined) {
//     next();
//   } else {
//     res.send(alertmove('/login', '로그인하고 오세요'));
//   }
// };
