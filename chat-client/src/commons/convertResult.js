export default function convertResult(type, result) {
  if (type === 'response') {
    const status = result.status;
    const data = result.data;

    let _response;
    switch (status) {
      case 200: // 데이터 리턴
        _response = { success: true, data: data.data, total: data.total, page_num: data.page_num };
        break;
      case 201: // insert_id 리턴
        _response = { success: true, data: data.insert_id };
        break;
      case 204:
        _response = { success: true, data: data };
        break;
      default:
        break;
    }

    return _response;
  } else if (type === 'error') {
    if (result.response === undefined) {
      return { success: false, data: result };
    }

    const status = result.response.status;
    const data = result.response.data;

    switch (status) {
      case 401:
        alert('로그인이 필요해요');
        window.location.replace('/account/login');
        break;
      case 403:
        alert('권한이 없어요');
        window.location.replace('/');
        break;
      case 404:
        if (data.message === 'NFA') {
          // 요청이 잘못 됨
          alert('잘못된 요청이에요');
        } else if (data.message === 'NFD') {
          // 요청한 데이터가 없음
        }
        break;
      case 500:
        if (data === '요청이 너무 많습니다.') {
        }
        break;
      default:
        break;
    }

    return { success: false, data: data };
  }
}
