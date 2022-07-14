const sockets = {
  onConnection: (io) => (socket) => {
    let userList = [];

    //socket
    io.on("connection", (socket) => {
      socket.onAny(() => {
        console.log("onAny");
      });

      //채팅방 입장시 실행되는 이벤트
      socket.on("/rooms/join", async (data) => {
        const { roomNo, memberNo } = data;

        if (
          !userList.includes(memberNo) &&
          userList !== undefined &&
          memberNo !== undefined
        ) {
          userList.push(memberNo);

          _db
            .qry(
              "INSERT INTO room_users (room_no, member_no) VALUES (:roomNo, :memberNo)",
              data
            )
            .then(() => {
              //그 방에 집어넣는다
              socket.join(roomNo);

              // broadcast: 접속한 클라이언트가 들어가있는 방에 있는 사람에게만 데이터를 보내준다
              socket.broadcast.in(roomNo).emit("in user notice", data),
                io.in(roomNo).emit("/rooms/join", data);
            });
        }
      });

      // 채팅 보내기
      socket.on("/rooms/message", (data) => {
        const { roomNo, type, whisperUser, nick } = data;

        if (type === "USER_TEXT")
          sql = `INSERT INTO chat(member_no, room_no, chat, sended, to_user) VALUES (:memberNo, :roomNo, :chat, now(), :toUser)`;
        if (type === "SEND_WHISPER")
          sql = `INSERT INTO chat(member_no, room_no, chat, sended, type, whisper_user, whisper_member_no) 
      VALUES (:memberNo, :roomNo, :chat, now(), :type, :whisperUser,
      (SELECT member_no FROM chat.member WHERE member.nick = :whisperUser))`;

        _db.qry(sql, data).then(() => {
          if (type === "USER_TEXT")
            io.in(roomNo).emit("/rooms/message", { data });
          if (type === "SEND_WHISPER")
            io.to(nick)
              .to(whisperUser)
              .in(roomNo)
              .emit("send whisperUser", data);
        });
      });

      //이미지 전송
      socket.on("send imgFile", (data) => {
        console.log("imgFile", data);
        upload.single("img");
        const { roomNo } = data;

        // const sql = ``;

        // _db.qry(sql, data).then(() => {
        io.in(roomNo).emit("send imgFile", data);
        //});
      });

      // 타이핑
      socket.on("/rooms/typing", (data) => {
        socket.broadcast.in(data.roomNo).emit("/rooms/typing", data);
      });

      //채팅방 나가기
      socket.on("/rooms/out", (data) => {
        const { roomNo, memberNo } = data;

        if (memberNo !== undefined) {
          socket.leave(roomNo, memberNo);
          io.in(roomNo).emit("/rooms/out", data);

          //userList에서 나간 유저 삭제
          userList = userList.filter((user) => user !== memberNo);

          //userList client로 보냄
          socket.broadcast.in(roomNo).emit("out user notice", data);
          io.in(roomNo).emit("/rooms/out", data);
          console.log("삭제멤버 데이터", userList);

          _db
            .qry(
              `DELETE FROM room_users WHERE room_no = :roomNo AND member_no = :memberNo`,
              data
            )
            .then(() => {});
        }
      });

      socket.on("disconnect", () => {
        console.log("연결끊김", socket.id);
      });

      socket.on("connect_error", (err) => {
        console.log("connection err", err);
        socket.disconnect();
      });
    });
  },
};
module.exports = sockets;
