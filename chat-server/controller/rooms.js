const roomCtr = {};
let inputSql, outputSql;

let success = () => {
  if (!outputSql.success) return _res.internalServerErr();
};

roomCtr.getAllInfo = async (_reqData) => {
  inputSql = `SELECT * FROM room `;
  outputSql = await _db.qry(inputSql, _reqData);
  success;

  return _res.okLists(outputSql.result);
};

roomCtr.getRoom = async (_reqData) => {
  inputSql = `SELECT room_title FROM room WHERE room_no = :room_no`;
  outputSql = await _db.qry(inputSql, _reqData);
  success;

  return _res.okData(outputSql.result);
};

roomCtr.postChat = async (_reqData) => {
  inputSql = `INSERT INTO chat(member_no, room_no, chat, sended) VALUES(:member_no, :room_no, :chat, now())`;
  outputSql = await _db.qry(inputSql, _reqData);
  success;

  return _res.okData(outputSql.result);
};
module.exports = roomCtr;
