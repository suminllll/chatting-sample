let database = {};

//db parsing 해주는 로직
database.getConnect = async () => {
  const connection = await pool.getConnection(async (conn) => conn);

  connection.config.queryFormat = function (query, values) {
    if (!values) return query;

    //정규식에 일치하는 문자열을 찾아서 sql에 할당
    const sql = query.replace(
      // \w영숫자문자에 일치
      // +는 한개 이상을 의미
      // \이스케이프 문자임을 알려줌
      /\:(\w+)/g,
      function (txt, key) {
        if (values.hasOwnProperty(key)) {
          return this.escape(values[key]);
        }
        return txt;
      }.bind(this)
    );

    return sql;
  };
  return connection;
};

//db 예외처리
database.qry = async (sql, reqData) => {
  const connection = await _db.getConnect();
  try {
    const result = await connection.query(sql, reqData);

    // console.log("in db", result[0], sql);
    const rows = result[0];

    connection.release();

    return { success: true, result: rows };
  } catch (err) {
    console.log("database.query - \n\r", err);

    connection.release();
    return { success: false, message: err.message };
  }
};

module.exports = database;
