const loginCtr = {};

loginCtr.getLogin = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `SELECT * FROM member WHERE nick = :nick`;

  outputSql = await _db.qry(inputSql, _reqData);
  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

loginCtr.addLogin = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `INSERT INTO member(nick, joined) VALUES(:nick, now())`;
  outputSql = await _db.qry(inputSql, _reqData);
  if (!outputSql.success) return _res.internalServerErr();

  return _res.created(outputSql.result.insertId);
};

module.exports = loginCtr;
