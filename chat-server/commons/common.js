const moment = require("moment");
const customerCtr = require("../controller/customer");

const common = {};

common.wrapAsync = (fn) => {
  return function (req, res, next) {
    console.log(
      moment().format("YYYYMMDD HH:mm:ss") +
        ` [` +
        req.ip +
        `]` +
        req.originalUrl
    );
    // 모든 오류를 .catch() 처리하고 next()로 전달하기
    fn(req, res, next).catch(next);
  };
};

// cookie 유효시간 확인 후 24시간 이내일 때, 재발급하는 코드 추가하기
common.routerAuthCheck = () => {
  return async (req, res, next) => {
    let resData;

    const userToken = req.session.member;
    console.log(userToken);

    if (!userToken) {
      resData = _res.unauthorized(
        _constants.NOT_LOGIN_USER_ERR_CODE,
        _constants.NOT_LOGIN_USER_ERR_MESSAGE
      );
      res.status(resData.http_status).json(resData);
      return;
    }

    try {
      const memberInfo = await jwt.verify(userToken);
      req.member = memberInfo;

      if (!memberInfo.n || isNaN(memberInfo.n) || memberInfo.n < 1) {
        resData = _res.unauthorized(
          _constants.INVALID_MEMBER_ERR_CODE,
          _constants.INVALID_MEMBER_ERR_MESSAGE
        );
        res.status(resData.http_status).json(resData);
        return;
      }

      const reqData = {
        memberNo: memberInfo.n,
      };

      resData = await controllerMember.memberCheck(reqData);

      if (resData.http_status === 409) {
        delete req.session.member;

        resData = _res.unauthorized(
          _constants.INVALID_MEMBER_ERR_CODE,
          _constants.INVALID_MEMBER_ERR_MESSAGE
        );
        res.status(resData.http_status).json(resData);
        return;
      }

      //// 현재 회원 레벨 또는 로그인 타입이 세션에 있는 값과 다를 경우. 세션 재발급
      if (memberInfo.l != resData.data.level) {
        const payload = {
          n: resData.data.member_no,
          l: resData.data.level,
          t: resData.data.login_type,
        };

        console.log(payload);

        const token = await jwt.register(payload);

        req.session.member = token;
      }
    } catch (e) {
      console.log(e.stack);

      if (e.stack.includes("TokenExpiredError")) {
        resData = _res.unauthorized(
          _constants.TOKEN_EXPIRED_ERR_CODE,
          _constants.TOKEN_EXPIRED_ERR_MESSAGE
        );
        res.status(resData.http_status).json(resData);
        return;
      }

      resData = _res.unauthorized(
        _constants.INVALID_MEMBER_ERR_CODE,
        _constants.INVALID_MEMBER_ERR_MESSAGE
      );

      res.status(resData.http_status).json(resData);
      return;
    }

    next();
  };
};

common.authCheck = async (req, res) => {
  let resData = {};

  const userToken = req.session.member;

  console.log(userToken);
  if (!userToken) {
    resData.success = false;
    return resData;
  }

  let memberInfo;

  try {
    memberInfo = await jwt.verify(userToken);

    if (!memberInfo.n || isNaN(memberInfo.n) || memberInfo.n < 1) {
      console.log("authCheck!!!! invalid member");
      resData.success = false;
      return resData;
    }

    const reqData = {
      memberNo: memberInfo.n,
    };

    resData = await controllerMember.memberCheck(reqData);

    if (resData.http_status === 409) {
      delete req.session.member;

      resData.success = false;
      return resData;
    }

    //// 현재 회원 레벨 또는 로그인 타입이 세션에 있는 값과 다를 경우. 세션 재발급
    if (memberInfo.l != resData.data.level) {
      const payload = {
        n: resData.data.member_no,
        l: resData.data.level,
        t: resData.data.login_type,
      };

      console.log(payload);

      const token = await jwt.register(payload);

      req.session.member = token;
    }
  } catch (e) {
    console.log(e.stack);

    resData.success = false;
    return resData;
  }

  resData.success = true;
  resData.member = memberInfo;

  return resData;
};

module.exports = common;
