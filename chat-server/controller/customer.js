const customerCtr = {};
let inputSql, outputSql;

let success = () => {
  if (!outputSql.success) return _res.internalServerErr();
};

customerCtr.getAllInfo = async (_reqData) => {};

module.exports = customerCtr;
