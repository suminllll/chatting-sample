const chatCtr = {};

chatCtr.joinRoom = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `INSERT INTO chat (room_no, member_no) VALUES (:room_no, :member_no)`;

  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.created(outputSql.result.insertId);
};

// const chatCtr = {
//   getAllRooms: async () => {
//     const rooms = await _db.qry(`SELECT * FROM chat`, []);
//     return rooms;
//   },
//   getRoomById: async (roomNo) => {
//     const room = await _db.qry(`SELECT * FROM chat WHERE room_no = :room_no`, [
//       roomNo,
//     ]);
//     return room;
//   },
//   addRoomByUser: async (roomTitle, memberNo) => {
//     await _db.qry(`INSERT INTO chat (room_title, member_no) VALUES (:room_title, :member_no)`, [
//       roomTitle,
//       memberNo,
//     ]);

//     const room = await _db.qry(
//       `SELECT * FROM chat WHERE member_no = :member_no AND room_title = :room_title`,
//       [memberNo, roomTitle]
//     );

//     return room;
//   },
//   removeRoomByUser: async (roomNo, memberNo) => {
//     await _db.qry(`DELETE FROM rooms WHERE roomNo = :roomNo AND member_no = :member_no`, [
//       roomNo,
//       memberNo,
//     ]);
//   },
//   joinRoom: async (roomNo, memberNo) => {
//     const room = await _db.qry(
//       `INSERT INTO room (room_no, member_no) VALUES (:room_no, :member_no)`,
//       [roomNo, memberNo]
//     );
//     return room;
//   },
//   getRoomUsers: async (roomNo) => {
//     const users = await _db.qry(
//       `SELECT * FROM users WHERE id IN (SELECT user_id FROM roomUsers WHERE room_id = ?)`,
//       [roomNo]
//     );
//     return users.map(({ password, ...user }) => user);
//   },
//   getRoomMessages: async (roomNo) => {
//     const roomMessages = await _db.qry(
//       `SELECT messages.*, users.nickname
//       FROM messages
//       LEFT JOIN users ON users.id = messages.user_id
//       WHERE room_id = ?`,
//       [roomNo]
//     );
//     return roomMessages;
//   },
//   addMessage: async (roomNo, memberNo, message) => {
//     const now = new Date().getTime().toString();
//     const messageResult = await _db.qry(
//       `INSERT into messages (room_id, user_id, message, created_at, updated_at) VALUES (?, ?, ?, ?, ?)`,
//       [roomNo, memberNo, message, now, now]
//     );

//     return {
//       roomNo,
//       memberNo,
//       message,
//       createdAt: now,
//       updatedAt: now,
//     };
//   },
//   quitRoom: async (roomNo, memberNo) => {
//     const room = await _db.qry(
//       `DELETE FROM roomUsers WHERE room_id = ? AND user_id = ?`,
//       [roomNo, memberNo]
//     );
//   },
//   removeMessagesFromRoom: async (roomNo) => {
//     await _db.qry(`DELETE FROM messages WHERE room_id = ?`, [roomNo]);
//   },
// };

module.exports = chatCtr;
