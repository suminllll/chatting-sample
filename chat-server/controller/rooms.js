const roomCtr = {};

roomCtr.getAllInfo = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `SELECT * FROM room `;
  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okLists(outputSql.result);
};

//버튼에 title을 뿌려줌
roomCtr.getRoom = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `SELECT room_title FROM room WHERE room_no = :room_no`;
  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

//채팅내용 저장
roomCtr.postChat = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `INSERT INTO chat(member_no, room_no, chat, sended) VALUES(:member_no, :room_no, :chat, now())`;
  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.created(outputSql.result.insertId);
};

//채팅내용 가져오기
roomCtr.getChat = async (_reqData) => {
  let inputSql, outputSql;
  //room_no를 받아서 해당 방의 모든 채팅내용을 불러옴
  inputSql = `SELECT member.nick, chat.chat.*, chat.sended
  FROM chat 
  LEFT JOIN member ON member.member_no = chat.member_no
  WHERE room_no = :room_no `;

  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

//접속한 유저 불러오기
roomCtr.getUser = async (_reqData) => {
  let inputSql, outputSql;
  //room_no를 받아서 해당 방의 모든 채팅내용을 불러옴
  inputSql = `SELECT * FROM member
  WHERE member_no
  IN (SELECT member_no FROM room_users
  WHERE room_no = :room_no)`;

  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

module.exports = roomCtr;
