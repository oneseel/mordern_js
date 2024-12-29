// 조건 연산자 (Conditional Operator)
// 조건에 따라 코드의 흐름을 제어하기 위한 방법

/*
// if-else 문
if (조건) {
  // 조건이 true일 때 실행되는 코드
} else {
  // 조건이 false일 때 실행되는 코드
}

// switch 문
switch (값) {
  case A:
    // 값이 A와 일치할 때 실행되는 코드
    break;
  default:
    // 값과 일치하는 case가 없을 때 실행되는 코드
}
*/

// 삼항 연산자 (Ternary Operator)
// 조건 ? truthy일 때 실행할 표현식 : falsy일 때 실행할 표현식
const CUT_OFF = 80;

function passChecker(score) {
  return score > CUT_OFF ? "합격" : "불합격";
}

console.log(passChecker(75)); // "불합격"
console.log(passChecker(90)); // "합격"

// 삼항 연산자 예제 2: 등급 판정
function gradeChecker(score) {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : "F";
}

console.log(gradeChecker(95)); // "A"
console.log(gradeChecker(85)); // "B"
console.log(gradeChecker(65)); // "F"

// 중첩 삼항 연산자는 간결하지만, 너무 복잡하면 가독성이 떨어질 수 있으므로 주의
