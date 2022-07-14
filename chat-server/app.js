const cors = require("cors");
const fs = require("fs");
const express = require("express");
const mysql = require("mysql2/promise");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cookieParser = require("cookie-parser");
const router = express.Router();
const app = express();
const server = require("http").createServer(app);
const multer = require("multer");
const path = require("path");

const sockets = require("./chat/socket");
const { jwtSerializer } = require("./commons/jwt");

//env를 사용한다는 의미 dotenv
require("dotenv").config();

const port = process.env.PORT || 4000;

global.__base = __dirname + "/";
global._res = require(__base + "commons/response");
global._db = require(__base + "commons/db");
global._constants = require(__base + "commons/constants");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("req", req);
      cb(null, "uploads/"); //파일 올리면 저장할 폴더 위치
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname)); //저장할때 파일 이름
    },
    limits: {
      fileSize: 200 * 1024 * 1024, // 200 mb
    },
  }),
});

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECURITY_COOKIE));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(express.static("build"));

//session option
const storeOption = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  clearExpired: true,
  charset: "utf8mb4_bin",
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
};

// const serverCookie = {
//   path: "/",
//   httpOnly: true,
//   signed: true,
//   maxAge: 1000 * 60,
// };
const sessionStore = new MySQLStore(storeOption);

const sessionMiddleware = session({
  key: process.env.SECURITY_SESSION_KEY,
  secret: process.env.SECURITY_SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60,
  },
});

app.use(sessionMiddleware);

//채팅
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", sockets.onConnection(io));

app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    const result = _res.badRequest({
      filed: "request method",
      message: "Parsing Error",
    });
    res.status(result.http_status).json(result);
  } else {
    next();
  }
});

// path의 하위폴더 또는 파일들을 불러옴
function readdirAsync(path) {
  return new Promise(function (resolve, reject) {
    fs.readdir(path, function (error, result) {
      if (error) {
        reject(error);
        f;
      } else {
        resolve(result);
      }
    });
  });
}

async function main() {
  //데이터베이스 연결 생성
  global.pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectionLimit: process.env.DB_POOL,
    dateStrings: "date",
  });

  // --- 자동 라우터 등록 ---
  const routerPath = __base + "routes";
  const rs = await readdirAsync(routerPath);

  for (let name of rs) {
    if (name.indexOf(".js") == -1) return;

    name = name.substring(0, name.lastIndexOf(".")); // 확장자 제거
    let router = require(routerPath + "/" + name);

    if (name != "index") {
      // 파일명의 _ 기호를 기준으로 url을 나눔
      name = name.replace("_", "/");
      app.use("/" + name, router);
    } else if (name === "index") {
      app.use("/", router);
    }
  }

  // 404 (API 를 찾을 수 없는 경우)
  app.use(function (req, res, next) {
    const result = _res.notFound(
      _constants.NOT_FOUND_API_ERR_CODE,
      _constants.NOT_FOUND_API_ERR_MESSAGE
    );
    return res.status(result.http_status).json(result);
  });

  // 500
  app.use(function (err, req, res, next) {
    console.error(err.stack);

    const result = _res.internalServerErr();
    return res.status(result.http_status).json(result);
  });
}
server.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});

main();
module.exports = router;
