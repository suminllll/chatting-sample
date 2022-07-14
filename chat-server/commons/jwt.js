require("dotenv").config();

const jwtSecret = process.env.JWT_SECRET;
const jwt = require("jsonwebtoken");

const jwtConstants = {
  expiresIn: "7 days",
  expires: () => {
    const days = parseInt(jwtConstants.expiresIn.split(" ")[0]);
    return new Date(Date.now() + 1000 * 60 * 60 * 24 * days);
  },
};

// register = (payload) =>
//   new Promise((resolve, reject) => {
//     jwt.sign(
//       { payload },
//       jwtSecret,
//       { expiresIn: jwtConstants.expiresIn },
//       (err, token) => {
//         if (err) reject(err);
//         resolve(token);
//       }
//     );
//   });

// //token descript
// verify = (token) => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, jwtSecret, (err, decoded) => {
//       if (err) reject(err);
//       resolve(decoded);
//     });
//   });
// };

function jwtSerializer(req, res, next) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(
      { id: req.body.id, password: req.body.password, nick: req.body.nick },
      jwtSecret,
      { expiresIn: jwtConstants.expiresIn },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
    req.session.user = token;
    req.session.save();
  });

  // res.cookie("accessToken", token, {
  //   httpOnly: true,
  //   signed: true,
  //   secret: jwtSecret,
  //   expires: jwtConstants.expires(),
  // });

  //next();
}

//token descript
function jwtDeserializer(req, res, next) {
  return new Promise((resolve, reject) => {
    const userToken = req.session.user;
    console.log("userToken", req.session);
    console.log("body?", req.body);

    if (!userToken) {
      return res.status(401).send({
        result: false,
        message: "Access token is not provided",
        data: [],
      });
    }
    const decoded = jwt.verify(userToken, jwtSecret);
    console.log("decoded", decoded);
    const isExpired = decoded.exp < Date.now() / 1000;

    if (isExpired) {
      return res.status(401).send({
        result: false,
        message: "Access token is expired",
        data: [],
      });
    }

    req.user = {
      id: decoded.id,
      password: decoded.password,
      nick: decoded.nick,
    };
    console.log("jwt", req.user);
    res.locals.message = "Access token is valid";

    // const accessToken = req.signedCookies.accessToken;

    //console.log("accessToken", req.signedCookies);
    // if (!accessToken) {
    //   return res.status(401).send({
    //     result: false,
    //     message: "Access token is not provided",
    //     data: [],
    //   });
    // }

    //풀어주는 키 (발급키와 같아야함) 시크릿만 있으면 다 풀림
    // const decoded = jwt.verify(accessToken, jwtSecret);
    // const decoded = jwt.verify(userToken, jwtSecret);
    // console.log("decoded", decoded);
    // const isExpired = decoded.exp < Date.now() / 1000;

    // if (isExpired) {
    //   return res.status(401).send({
    //     result: false,
    //     message: "Access token is expired",
    //     data: [],
    //   });
    // }

    // req.user = {
    //   id: decoded.id,
    //   password: decoded.password,
    //   nick: decoded.nick,
    // };
    // console.log("jwt", req.user);
    // res.locals.message = "Access token is valid";

    //next();
  });
}

module.exports = { jwtSerializer, jwtDeserializer };
//module.exports = jwt;
