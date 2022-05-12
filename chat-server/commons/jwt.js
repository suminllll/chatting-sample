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

function jwtSerializer(req, res, next) {
  const token = jwt.sign(
    {
      nick: req.body.nick,
    },
    jwtSecret,
    {
      expiresIn: jwtConstants.expiresIn,
    }
  );

  res.cookie("accessToken", token, {
    httpOnly: true,
    signed: true,
    secret: jwtSecret,
    expires: jwtConstants.expires(),
  });

  next();
}

//token descript
async function jwtDeserializer(req, res, next) {
  const accessToken = req.signedCookies.accessToken;
  console.log("accessToken", accessToken);
  if (!accessToken) {
    return res.status(401).send({
      result: false,
      message: "Access token is not provided",
      data: [],
    });
  }

  //풀어주는 키 (발급키와 같아야함) 시크릿만 있으면 다 풀림
  const decoded = jwt.verify(accessToken, jwtSecret);

  const isExpired = decoded.exp < Date.now() / 1000;

  if (isExpired) {
    return res.status(401).send({
      result: false,
      message: "Access token is expired",
      data: [],
    });
  }

  req.user = { nick: decoded.nick };
  res.locals.message = "Access token is valid";

  next();
}

module.exports = { jwtSerializer, jwtDeserializer };
