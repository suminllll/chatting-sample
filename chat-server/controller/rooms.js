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

roomCtr.postChat = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `INSERT INTO chat(member_no, room_type, room_no, chat, sended) VALUES(:member_no, :room_type, :room_no, :chat, now())`;
  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.created(outputSql.result.insertId);
};

roomCtr.getChat = async (_reqData) => {
  let inputSql, outputSql;
  //nick으로 member_no를 조회해서 해당 member_no로 chat table에서 chat을 가져옴
  inputSql = `SELECT m.nick, c.chat, c.sended
  FROM chat AS c
  JOIN member AS m
  ON m.member_no = c.member_no
  WHERE room_type = :room_type AND nick = :nick`;

  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okList(outputSql.result);
};

module.exports = roomCtr;
