// Spread 구문 (Spread Syntax)

// 1. 배열에서의 Spread
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3 (배열의 요소가 개별적으로 출력됨)

const webPublishing = ["HTML", "CSS"];
const interactiveWeb = [...webPublishing, "JavaScript"];

console.log(webPublishing); // ["HTML", "CSS"]
console.log(interactiveWeb); // ["HTML", "CSS", "JavaScript"]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// 2. 함수 호출에서의 Spread
const introduce = (name, birth, job) => {
  console.log(`안녕하세요! 제 이름은 ${name}입니다.`);
  console.log(`생년월일은 ${birth}이고,`);
  console.log(`직업은 ${job}입니다.`);
};

const myArr = ["김", "1995년 1월 1일", "개발자"];
introduce(...myArr);

// 3. 객체에서의 Spread
const members = ["hong", "kim", "lee"];
const membersObj = { ...members };

console.log(membersObj); // {0: "hong", 1: "kim", 2: "lee"}

// 4. 응용 예시
// 배열 복사
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log(copiedArray); // [10, 20, 30]

// 객체 병합
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

// 새로운 속성 추가
const person = { name: "Alice", age: 25 };
const updatedPerson = { ...person, job: "Developer" };
console.log(updatedPerson); // { name: "Alice", age: 25, job: "Developer" }

// Rest 파라미터와 Spread 결합
const printNumbers = (...args) => {
  console.log(args);
};

const nums = [7, 8, 9];
printNumbers(...nums); // [7, 8, 9]
