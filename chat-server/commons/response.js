let httpResponse = {};

// 200 : 요청성공 (정보응답)
// 특정데이터 리턴(상세조회 등)
httpResponse.okData = (data) => {
  const result = {
    http_status: 200,
    success: true,
    data: data,
  };

  return result;
};

// 여러데이터 리턴(목록조회 등)
httpResponse.okLists = (data, total, pageNum) => {
  const result = {
    http_status: 200,
    success: true,
    data: data,
    total: total ? total : 0,
    page_num: pageNum ? pageNum : 1,
  };

  return result;
};

// 201 : 요청성공 (새로운 리소스 생성)
httpResponse.created = (id) => {
  const result = {
    http_status: 201,
    success: true,
    insert_id: id,
  };

  return result;
};

// 204 : 요청성공 (보내줄 콘텐츠 없음. 헤더는 의미있을 수있음)
// 콘텐츠 자체가 안가기 때문에 result 는 별 의미가 없음
httpResponse.noContent = () => {
  const result = {
    http_status: 204,
    success: true,
  };

  return result;
};

// 205(Reset Content) : 요청성공 (요청 완수이후 요청 보낸 문서 뷰 리셋하라고 알림)
// form의 내용을 지우거나 캔버스 상태를 재설정하거나
// UI를 새로 고치려면 client의 문서뷰를 새로고침하라고 알려준다.
httpResponse.resetContent = () => {
  const result = {
    http_status: 205,
    success: true,
  };

  return result;
};

// 206(Partial Content) : 요청의 일부 성공
httpResponse.partialContent = (data) => {
  const result = {
    http_status: 206,
    success: true,
    data: data,
  };

  return result;
};

// 400(Bad Request) : 서버가 요청을 이해할 수 없음
// data 에는 Array 를 넣어야함
// data의 각 배열 내용은 { field:'', message:''} Object로 되어있어야함
httpResponse.badRequest = (data) => {
  let _data = data;

  if (!Array.isArray(data)) {
    _data = new Array();
    _data.push(data);
  }

  const result = {
    http_status: 400,
    success: false,
    errors: _data,
  };

  return result;
};

// 401(Unauthorized) : 비인증 상태
httpResponse.unauthorized = (code, message) => {
  const result = {
    http_status: 401,
    success: false,
    code: code ? code : null,
    messsage: message ? message : null,
  };

  return result;
};

// 403(Forbidden) : 권한이 없음
httpResponse.forbidden = (code, message) => {
  const result = {
    http_status: 403,
    success: false,
    code: code ? code : null,
    message: message ? message : null,
  };

  return result;
};

// 404(Not Found) : 요청받은 리소스를 찾을 수 없음
httpResponse.notFound = (code, message) => {
  const result = {
    http_status: 404,
    success: false,
    code: message ? message : null,
    message: message ? message : null,
  };

  return result;
};

// 409(Conflict) : 요청이 서버의 상태와 충돌이 됨 (예, 닉네임이 중복 됌)
httpResponse.conflict = (fieldName, message) => {
  const result = {
    http_status: 409,
    success: false,
    field: fieldName ? fieldName : null,
    message: message ? message : null,
  };

  return result;
};

// 500(Internal Server Error) : 서버에 문제가 생김. 문제에 대해 정확히, 구체적으로 설명할 수 없음
httpResponse.internalServerErr = () => {
  const result = {
    http_status: 500,
    success: false,
  };

  return result;
};

module.exports = httpResponse;
