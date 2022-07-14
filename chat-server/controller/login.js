const { jwtDeserializer, jwtSerializer } = require("../commons/jwt");

const loginCtr = {};

//로그인시 유저 정보가 있는지 조회
loginCtr.getLogin = async (_reqData) => {
  let inputSql, outputSql;
  inputSql = `SELECT * FROM member WHERE id = :id AND password = :password AND nick = :nick`;

  outputSql = await _db.qry(inputSql, _reqData);
  console.log("outputSql: ", outputSql);
  // const token = await jwtDeserializer();

  // const resData = {
  //   token: token,
  //   joined: outputSql.joined,
  // };

  if (!outputSql.success) return _res.internalServerErr();

  return _res.okData(outputSql.result);
};

//처음 로그인시 디비에 유저정보를 토큰과 함께 넣음
loginCtr.addLogin = async (_reqData) => {
  let inputSql, outputSql;

  console.log("addLogin", _reqData);
  const connection = await _db.getConnect();

  try {
    await connection.beginTransaction();
    inputSql = `INSERT INTO member(id, password, nick, joined) VALUES(:id, :password, :nick, now())`;
    outputSql = await connection.query(inputSql, _reqData);

    if (outputSql[0].insertId < 1) {
      connection.rollback();
      connection.release();

      return _res.internalServerErr();
    }

    connection.commit();
    connection.release();
  } catch (e) {
    console.log(e);

    connection.rollback();
    connection.release();

    return _res.internalServerErr();
  }

  return _res.created(outputSql.result);
};

module.exports = loginCtr;
