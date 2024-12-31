// 자바스크립트 에러와 에러 객체 정리

/**
 * 1. 에러란?
 *
 * 에러는 코드 실행 중 예상치 못한 상황이 발생했을 때 나타납니다.
 * 자바스크립트에서는 에러가 발생하면 실행이 중단되고,
 * 에러에 대한 정보를 담고 있는 "에러 객체"가 생성됩니다.
 */

/**
 * 2. 에러 객체의 구성
 * 에러 객체는 다음과 같은 주요 속성을 가집니다:
 * - name: 에러의 이름
 * - message: 에러에 대한 상세한 설명
 */

console.log("시작");

const title = "코드잇";
console.log(title);
console.log(codeit); // ReferenceError: codeit is not defined

console.log("끝");

// 에러 객체 생성 예제
const error = new TypeError("타입 에러가 발생했습니다.");
console.log(error.name); // TypeError
console.log(error.message); // 타입 에러가 발생했습니다.

// 자바스크립트 에러의 종류

// 1. ReferenceError
// 정의되지 않은 변수에 접근하려고 할 때 발생

// 2. TypeError
// 변수나 값이 예상된 타입이 아닐 때 발생

// 3. SyntaxError
// 문법에 맞지 않는 코드를 작성할 때 발생 (코드 실행 전에 감지)

// 4. RangeError
// 값이 허용된 범위를 벗어날 때 발생
