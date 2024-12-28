// ================================
// this 키워드 이해
// ================================

// 1. 전역 객체에서의 this
// 전역 컨텍스트에서 기본적으로 전역 객체(window)를 참조
console.log(this); // window (브라우저 환경)

// ================================
// 2. 일반 함수와 this
// ================================

function getFullName() {
  return `${this.firstName} ${this.lastName}`;
}

const user = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName: getFullName,
};

const admin = {
  firstName: "Alex",
  lastName: "Kim",
  getFullName: getFullName,
};

console.log(user.getFullName());  // Tess Jang
console.log(admin.getFullName()); // Alex Kim

// ================================
// 3. this와 일반 함수 vs 화살표 함수
// ================================

function printThis() {
  console.log(this);
}

const printArrowThis = () => {
  console.log(this);
}

const myObj = {
  content: "myObj",
  printThis: printThis,
};

const myObj2 = {
  content: "myObj",
  printThis: printArrowThis,
};

const otherObj = {
  content: "otherObj",
  printThis: printThis,
};

const otherObj2 = {
  content: "otherObj",
  printThis: printArrowThis,
};

// 일반 함수의 this
myObj.printThis();    // { content: 'myObj', printThis: [Function: printThis] }
otherObj.printThis(); // { content: 'otherObj', printThis: [Function: printThis] }

// 화살표 함수의 this
myObj2.printThis();    // window (브라우저 환경)
otherObj2.printThis(); // window (브라우저 환경)

// ================================
// 요약
// ================================
// - 일반 함수: 호출된 객체를 this로 참조
// - 화살표 함수: 자신의 this를 가지지 않고, 선언된 컨텍스트의 this를 참조
// - 객체 메소드 정의 시에는 일반 함수를 권장
