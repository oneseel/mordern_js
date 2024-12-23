// 값으로서의 함수
const printHello = function () {
  console.log("hello");
};

console.log(typeof printHello); // function
console.dir(printHello); // object

// 함수는 JavaScript에서 "일급 객체(First-Class Citizens)"로 다음과 같은 특징을 가집니다:
// - 함수를 변수에 저장할 수 있음
// - 함수를 배열이나 객체와 같은 데이터 구조에 저장할 수 있음
// - 함수를 다른 함수에서 반환할 수 있음

// 1. 함수를 변수에 저장
const greet = function (name) {
  return `Hello, ${name}!`;
};
console.log(greet("Codeit")); // Hello, Codeit!

// 2. 함수를 배열에 저장
const functionArray = [
  () => "First Function",
  () => "Second Function",
];

console.log(functionArray[0]()); // "First Function"
console.log(functionArray[1]()); // "Second Function"

// 3. 함수를 객체에 저장
const functionObject = {
  greet: () => "Hello from object!",
};

console.log(functionObject.greet()); // "Hello from object!"

// 4. 함수가 다른 함수의 반환 값이 될 수 있음
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
