/**
 * 구조분해를 사용하여 method, headers, body를 변수로 추출하고,
 * 기본값을 각각 "GET", {"Content-Type": "application/json"}와 null로 설정하세요.
 */

const requestOptions = {
  headers: {
    Authorization: "Bearer token",
  },
};

const {
  method = "GET",
  headers = { "Content-Type": "application/json" },
  body = null,
} = requestOptions;
