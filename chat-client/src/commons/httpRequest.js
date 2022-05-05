import axios from "axios";
import convertResult from "./convertResult";

export async function httpRequest(_method, _url, _data, _config) {
  let result;

  // 전역 설정
  axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.withCredentials = true;
  axios.defaults.crossDomain = true;

  switch (_method) {
    case "GET":
      result = await axios
        .get(_url, _config)
        .then((response) => {
          return convertResult("response", response);
        })
        .catch((error) => {
          return convertResult("error", error);
        });

      break;
    case "POST":
      result = await axios
        .post(_url, _data, _config)
        .then((response) => {
          return convertResult("response", response);
        })
        .catch((error) => {
          return convertResult("error", error);
        });
      break;
    case "PUT":
      result = await axios
        .put(_url, _data, _config)
        .then((response) => {
          return convertResult("response", response);
        })
        .catch((error) => {
          return convertResult("error", error);
        });
      break;
    case "DELETE":
      result = await axios
        .delete(_url, _config)
        .then((response) => {
          return convertResult("response", response);
        })
        .catch((error) => {
          return convertResult("error", error);
        });
      break;
    default:
      result = { success: false, data: "Request Method Error" };
      break;
  }

  return result;
}
