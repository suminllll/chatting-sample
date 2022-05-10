const loginCtr = {};

//로그인시 유저 정보가 있는지 조회
loginCtr.getLogin = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `SELECT * FROM member WHERE nick = :nick`;

  outputSql = await _db.qry(inputSql, _reqData);

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

//처음 로그인시 디비에 유저정보를 토큰과 함께 넣음
loginCtr.addLogin = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `INSERT INTO member(nick, joined) VALUES(:nick, now())`;
  outputSql = await _db.qry(inputSql, _reqData);
  if (!outputSql.success) return _res.internalServerErr();

  return _res.created(outputSql.result.insertId);
};

module.exports = loginCtr;
