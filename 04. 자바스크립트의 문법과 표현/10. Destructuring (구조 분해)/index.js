// 구조 분해 (Destructuring)

/**
 * 구조 분해란?
 * 배열이나 객체의 값을 간단하게 변수로 추출하는 JavaScript 문법입니다.
 * 이를 통해 코드가 더 간결하고 가독성이 좋아집니다.
 */

// 1. 배열 구조 분해
const rank = ["효준", "윤형", "재훈", "지웅", "동욱"];

// 기존 방식: 배열 요소를 하나씩 변수에 할당
// const macbook = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank.slice(3);

// 구조 분해 방식: 한 줄로 간단하게 작성 가능
const [macbook, ipad, airpods, ...coupon] = rank;

console.log(macbook); // "효준"
console.log(ipad);    // "윤형"
console.log(airpods); // "재훈"
console.log(coupon);  // ["지웅", "동욱"]

/**
 * 주의점:
 * - 배열의 구조 분해는 순서를 기준으로 요소를 추출합니다.
 * - 배열의 길이가 부족하면 undefined가 할당됩니다.
 */

// 2. 변수 값 교환
let a = 1;
let b = 2;

console.log(`교환 전: (a: ${a}, b: ${b})`);

// 구조 분해를 사용한 변수 값 교환
[a, b] = [b, a];

console.log(`교환 후: (a: ${a}, b: ${b})`);

// 3. 객체 구조 분해
const person = { name: "Alice", age: 25, city: "Seoul" };

// 기존 방식: 객체 속성을 하나씩 변수에 할당
// const name = person.name;
// const age = person.age;
// const city = person.city;

// 구조 분해 방식
const { name, age, city } = person;

console.log(name); // "Alice"
console.log(age);  // 25
console.log(city); // "Seoul"

/**
 * 특징:
 * - 객체의 구조 분해는 속성 이름을 기준으로 값을 추출합니다.
 * - 새로운 변수 이름으로 할당하고 싶다면 ":"를 사용합니다.
 */

const { name: userName, age: userAge } = person;
console.log(userName); // "Alice"
console.log(userAge);  // 25

// 4. 함수에서의 구조 분해
function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printUser(person); // Name: Alice, Age: 25

// 5. 기본값 설정
const { country = "Korea" } = person;
console.log(country); // "Korea"

// 6. 중첩 구조 분해
const nestedObject = {
  user: {
    id: 1,
    profile: {
      username: "Alice",
      email: "alice@example.com"
    }
  }
};

const { user: { profile: { username, email } } } = nestedObject;
console.log(username); // "Alice"
console.log(email);    // "alice@example.com"
