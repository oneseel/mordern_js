/**
 * 다음은 서버에서 받아온 응답 데이터입니다. 구조분해를 사용하여 userId, userName, email, isAdmin 값을 추출하세요.
 * 그리고 isAdmin의 기본값을 false로 설정하세요.
 */

const apiResponse = {
  user: {
    id: 123,
    name: "Alice",
    email: "alice@example.com",
  },
};

const {
  user: { id: userId, name: username, email, isAdmin = false },
} = apiResponse;
