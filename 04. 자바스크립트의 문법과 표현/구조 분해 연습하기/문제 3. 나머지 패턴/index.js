/**
 * 구조분해를 사용하여 name과 age를 추출하고, 나머지 속성을 rest 객체에 저장하세요.
 */

const user = {
  name: "Chris",
  age: 27,
  email: "chris@example.com",
  country: "Canada",
};

const {name, age, ...rest} = user;
