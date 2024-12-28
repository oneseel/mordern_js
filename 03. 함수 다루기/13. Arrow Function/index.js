// Arrow Function (화살표 함수)
// 화살표 함수는 ES6부터 도입된 함수 표현식의 간결한 문법입니다.
// 기존 함수 표현식보다 짧게 작성할 수 있으며, 상위 스코프의 this를 사용합니다.

// 기존 함수 표현식
const getTwiceOld = function (number) {
  return number * 2;
};

console.log(getTwiceOld(5)); // 10

// 화살표 함수로 변경
const getTwice = (number) => {
  return number * 2;
};

console.log(getTwice(5)); // 10

// 화살표 함수의 특징
// 1. 파라미터가 하나일 경우 괄호 생략 가능
const getTwiceSingleParam = (number) => number * 2;
console.log(getTwiceSingleParam(5)); // 10

// 2. return 문만 있는 경우 중괄호와 return 생략 가능
const getTwiceCompact = (number) => number * 2;
console.log(getTwiceCompact(5)); // 10

// 3. 파라미터가 두 개 이상인 경우 괄호 생략 불가능
const addNumbers = (a, b) => a + b;
console.log(addNumbers(3, 7)); // 10

// 4. 파라미터가 없는 경우 괄호 생략 불가능
const sayHello = () => "Hello!";
console.log(sayHello()); // Hello!

// 5. 반환값이 객체인 경우, 반환 객체를 소괄호로 감싸야 함
const createObject = () => ({ key: "value" });
console.log(createObject()); // { key: 'value' }

// DOM 이벤트와 화살표 함수
const myBtn = document.querySelector("#myBtn");

// 화살표 함수의 this는 상위 스코프를 참조하므로 이벤트 핸들러로 사용할 때 주의 필요
if (myBtn) {
  myBtn.addEventListener("click", () => {
    console.log("Button clicked!");
  });
}

// 주의사항
// 1. 메서드로 사용할 경우 부적합: this가 상위 스코프에 바인딩되기 때문
const myObject = {
  value: 10,
  getValue: () => this.value, // undefined: this는 상위 스코프를 참조
};
console.log(myObject.getValue());

// 2. 생성자로 사용할 수 없음: 화살표 함수는 생성자 함수로 동작하지 않음
// const MyConstructor = () => {};
// const instance = new MyConstructor(); // TypeError 발생
