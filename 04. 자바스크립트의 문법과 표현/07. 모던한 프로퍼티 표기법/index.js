// 모던한 프로퍼티 표기법

// 1. 속성 축약(Property Shorthand)
// 변수 이름과 객체의 속성 이름이 동일한 경우, 속성 이름을 생략할 수 있습니다.
const title = "Codeit";
const birth = 2017;
const job = "프로그래밍 강사";

const user = {
  title, // title: title
  birth, // birth: birth
  job    // job: job
};

console.log(user); // { title: "Codeit", birth: 2017, job: "프로그래밍 강사" }

// 2. 메서드 축약(Method Shorthand)
// 객체의 메서드를 정의할 때 function 키워드를 생략할 수 있습니다.
const user2 = {
  firstName: "Tess",
  lastName: "Jang",
  getFullName() { // function 키워드 생략
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(user2.getFullName()); // "Tess Jang"

// 3. 계산된 속성 이름(Computed Property Names)
// 속성 이름을 동적으로 지정할 수 있습니다.
const dynamicKey = "Code" + "it";
const user3 = {
  [dynamicKey]: "value" // key가 "Codeit"으로 설정됨
};

console.log(user3); // { Codeit: "value" }

// 4. 스프레드 연산자(Spread Operator)
// 객체를 복사하거나 새로운 속성을 추가할 때 유용합니다.
const original = { name: "Alice", age: 25 };
const copied = { ...original }; // 객체 복사
const updated = { ...original, job: "Developer" }; // 새로운 속성 추가

console.log(copied);  // { name: "Alice", age: 25 }
console.log(updated); // { name: "Alice", age: 25, job: "Developer" }

// 5. 디스트럭처링(Destructuring)
// 객체의 속성을 추출하여 변수에 할당할 수 있습니다.
const person = { name: "Bob", age: 30, city: "Seoul" };
const { name, age } = person;

console.log(name); // "Bob"
console.log(age);  // 30

// 기본값(Default Values) 사용
const { city, country = "Korea" } = person;
console.log(city);    // "Seoul"
console.log(country); // "Korea"
