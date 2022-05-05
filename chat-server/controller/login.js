const loginCtr = {};
let inputSql, outputSql;

let success = () => {
  if (!outputSql.success) return _res.internalServerErr();
};

loginCtr.getLogin = async (_reqData) => {
  inputSql = `SELECT * FROM member WHERE nick = :nick`;

  outputSql = await _db.qry(inputSql, _reqData);
  success;

  return _res.okData(outputSql.result);
};

loginCtr.addLogin = async (_reqData) => {
  inputSql = `INSERT INTO member(nick, joined) VALUES(:nick, now())`;
  outputSql = await _db.qry(inputSql, _reqData);
  success;

  return _res.created(outputSql.result.insertId);
};

module.exports = loginCtr;
