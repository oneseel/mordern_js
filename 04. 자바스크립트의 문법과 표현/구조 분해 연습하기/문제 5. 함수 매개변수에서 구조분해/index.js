/**
 * 다음 함수 showProfile은 객체를 매개변수로 받습니다. 구조분해를 사용하여 username과 email을 출력하도록 함수 내부를 수정하세요.
 */

const profile = {
  id: 101,
  username: "jane_doe",
  email: "jane@example.com",
};

function showProfile({ username, email }) {
  console.log(`Username: ${username}`);
  console.log(`Email: ${email}`);
}

showProfile(profile);
