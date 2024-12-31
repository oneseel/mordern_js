/**
 * 다음 이벤트 객체에서 구조분해를 사용하여 type과 target.value를 추출하세요.
 * 이벤트 객체의 구조는 다음과 같습니다.
 */

const event = {
  type: "input",
  target: {
    value: "Hello, world!",
  },
};

const {
  type,
  target: { value },
} = event;
