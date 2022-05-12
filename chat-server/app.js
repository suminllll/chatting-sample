const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const fs = require("fs");
const express = require("express");
const mysql = require("mysql2/promise");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const router = express.Router();
const app = express();
const server = require("http").createServer(app);

//env를 사용한다는 의미 dotenv
require("dotenv").config();

const port = process.env.PORT || 4000;

global.__base = __dirname + "/";
global._common = require(__base + "commons/common");
global._res = require(__base + "commons/response");
global._db = require(__base + "commons/db");
global._constants = require(__base + "commons/constants");

// 보안을 위해 사용
//helmet library contentSecurityPolicy빼고 다 true
app.use(
  helmet({
    contentSecurityPolicy: false, // cross-site 허용
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.SECURITY_COOKIE));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//session option
const storeOption = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  clearExpired: true, //만료된 세션 자동 확인 및 지우기 여부
  charset: "utf8mb4_bin",
  schema: {
    tableName: "chat_sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
};

// //console.log('storeOption', storeOption);
const sessionStore = new MySQLStore(storeOption);
const sessionMiddleware = session({
  key: process.env.SECURITY_SESSION_KEY,
  secret: process.env.SECURITY_SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
});

//채팅관련
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//세션 읽을 수 있도록 해주는 미들웨어
io.use(function (socket, next) {
  sessionMiddleware(socket.request, socket.request.res || {}, next);
  //console.log(`[console] sessionMiddleware2: ${sessionMiddleware}`);
});

app.use(sessionMiddleware);

//socket
io.on("connection", (socket) => {
  //const dateTime = new Date();
  //console.log(`[console][${dateTime}] connection`);
  // console.log(`[console] connected user socket id:${socket.id}`);
  // console.log(`[console] connected user ip: ${socket.request.connection.remoteAddress}`);

  // const req = socket.request;
  // console.log("socketreq", req);

  //채팅방 입장시 실행되는 이벤트
  socket.on("/rooms/join", (data) => {
    console.log("!!!!joindata", data);
    const messageData = JSON.parse(data);
    const { roomNo, memberNo } = messageData;
    _db
      .qry(
        "INSERT INTO room_users (room_no, member_no) VALUES (:roomNo, :memberNo)",
        messageData
      )
      .then(() => {
        //그 방에 집어넣는다
        socket.join(roomNo);
        //접속한 클라이언트가 들어가있는 방에 있는 사람에게만 데이터를 보내준다
        io.in(roomNo).emit("/rooms/join", data);
      });
  });

  //채팅
  socket.on("/rooms/message", (data) => {
    console.log("!!!!message", data);
    const { roomNo, memberNo, chat, nick } = data;
    _db
      .qry(
        `INSERT INTO chat(member_no, room_no, chat, sended) VALUES (:memberNo, :roomNo, :chat, now())`,
        data
      )
      .then((result) => {
        io.in(roomNo).emit(
          "/rooms/message",
          JSON.stringify({ ...result, data })
        );
      });
  });

  // if (!jwtDeserializer) console.log("jwt 없음!");
  // //socket.disconnect();
  // return;

  //채팅방 나가기
  socket.on("/rooms/out", (data) => {
    console.log("!!!!out", data);
    const messageData = JSON.parse(data);
    const { roomNo, memberNo } = messageData;

    _db
      .qry(
        `DELETE FROM room_users WHERE room_no = :roomNo AND member_no = :memberNo`,
        messageData
      )
      .then(() => {
        socket.leave(roomNo);
        io.in(roomNo).emit("/rooms/out", data);
      });
    //io.to(msg).emit("live_end_notice", msg + "번방 라이브 종료");
  });

  socket.on("connect_error", (err) => {
    console.log("connection err", err);
    socket.disconnect();
  });
});

//-- 채팅관련 끝

// //socket.join, socket.leave를 할 때는 방이름(방번호)를 문자열로 넣어줘야함
// io.on('connection', async (socket) => {
//
//   //로그인한 사용자가 아니라면 disconnect 시킴
//   if(req.session['member'] === undefined)
//   socket.disconnect();
//   return;

//   const userToken = req.session['member'];

//   const memberInfo = await jwt.verify(userToken);

//   console.log(`[console] memberInfo.n : ${memberInfo.n}`)

//   const member = {
//     member_no: memberInfo.n,
//     email: socket.id,
//     ip: socket.request.connection.remoteAddress,
//     room_no: '0',
//   };

// })
// api 요청 횟수 제한
// cors 밑에 두어야 NetWork Error가 아닌 config내용대로 message를 리턴함
// opengraph 기능사용으로 nextjs 에서 getserversideprops에서 요청할 때
// 서버 ip로 요청하여 모든 사용자가 같은 ip로 인식되기 때문에 차단이 되기 쉽다.
// 그래서 실제 클라이언트 ip로 판단을 할 수 있는 방법을 찾은 후 주석을 풀어야 함
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 1분
    max: 1000,
    statusCode: 500,
    message: "요청이 너무 많습니다.",
    handler: function (req, res, next, options) {
      console.log("요청제한: ", req.ip);
    },
  })
);

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
  //global.jwt = jwt(process.env.JWT_SECRET);

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
  // const loginRoutes = require("./routes/login");
  // app.use("/login", loginRoutes);
  // --- 자동 라우터 등록 ---.

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
