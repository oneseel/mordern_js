// 함수를 만드는 방법

// 1. 함수 선언식
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Codeit")); // Hello, Codeit!

// 2. 함수 표현식
// 함수를 변수에 선언한다는 의미보다는 함수를 값처럼 사용한다는 의미
const printHello = function () {
  console.log("Hello");
};

printHello(); // Hello

// 함수 선언식과 함수 표현식의 차이
// 1. 함수 선언식은 호이스팅이 일어나지만 함수 표현식은 호이스팅이 일어나지 않는다.
console.log(declaredFunction()); // Possible because of hoisting
function declaredFunction() {
  return "I am declared!";
}

// console.log(expressionFunction()); // ReferenceError
const expressionFunction = function () {
  return "I am an expression!";
};
console.log(expressionFunction()); // "I am an expression!"

// 2. 함수 선언식은 변수의 var 키워드처럼 함수 스코프를 가진다. 
//    함수 표현식은 변수의 let, const 키워드처럼 블록 스코프를 가진다.
function scopeExample() {
  if (true) {
    var functionScoped = "Function Scoped";
    let blockScoped = "Block Scoped";
  }
  console.log(functionScoped); // Function Scoped
  // console.log(blockScoped); // ReferenceError
}
scopeExample();

// 추가 개념: 화살표 함수 (Arrow Function)
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Arrow Function 특징
// 1. return 문이 간결함
const square = (x) => x * x;
console.log(square(4)); // 16

// 2. this 바인딩 방식이 다름 (Lexical this)
const obj = {
  name: "Codeit",
  greet: function () {
    console.log(this.name);
  },
  greetArrow: () => {
    console.log(this.name);
  },
};
obj.greet(); // Codeit
obj.greetArrow(); // undefined (this refers to the global object in arrow functions)
