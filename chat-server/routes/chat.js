const chatCtr = require("../controller/chat");

const chatSocket = (io, socket) => {
  //.on(첫번째 파라미터로 오는 이벤트 이름이 발생했을때, 두번째 파라미터에 있는 콜백을 실행한다)
  socket.on("/v1/room/join", (stringifiedData) => {
    const data = JSON.parse(stringifiedData);
    const { roomNo, memberNo } = data;
    chatCtr.joinRoom(roomNo, memberNo).then(() => {
      socket.join(roomNo);
      io.in(roomNo).emit("/socket/v1/room/join", stringifiedData);
    });
  });
};

// const roomSocket = (io, socket) => {
//   socket.on("/socket/v1/room", (stringifiedData) => {
//     const data = JSON.parse(stringifiedData);
//     if (data.type === "ROOM_REMOVED") {
//       roomService.removeMessagesFromRoom(roomId);
//     }
//     if (data.type === "ROOM_CREATED") {
//       io.socketsJoin("roomList");
//     }
//     io.in("roomList").emit("/socket/v1/room", stringifiedData);
//   });
//   socket.on("/socket/v1/room/join", (stringifiedData) => {
//     const data = JSON.parse(stringifiedData);
//     const { roomId, userId } = data;
//     roomService.joinRoom(roomId, userId).then(() => {
//       socket.join(roomId);
//       io.in(roomId).emit("/socket/v1/room/join", stringifiedData);
//     });
//   });
//   socket.on("/socket/v1/room/quit", (stringifiedData) => {
//     const data = JSON.parse(stringifiedData);
//     const { roomId, userId } = data;
//     roomService
//       .quitRoom(roomId, userId)

//       .then(() => {
//         socket.leave(roomId);
//         io.in(roomId).emit("/socket/v1/room/quit", stringifiedData);
//       });
//   });

//   //[id].jsx
//   socket.on("/socket/v1/room/chat", (stringifiedData) => {
//     const data = JSON.parse(stringifiedData);
//     const { roomId, userId, nickname, message } = data;

//     roomService.addMessage(roomId, userId, message).then((result) => {
//       //db에 저장
//       io.in(roomId).emit(
//         "/socket/v1/room/chat",
//         JSON.stringify({ ...result, nickname })
//       );
//     });
//   });
// };

module.exports = chatSocket;
