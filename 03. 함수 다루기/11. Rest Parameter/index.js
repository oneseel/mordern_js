// Rest Parameter

/**
 * Rest Parameter란?
 * - Rest Parameter는 함수의 매개변수 앞에 '...'을 붙여 정의합니다.
 * - 함수 호출 시 전달받은 여러 개의 인수를 하나의 배열로 처리합니다.
 * - 항상 마지막 매개변수로만 사용할 수 있습니다.
 */

/**
 * 함수에 전달된 모든 인수를 배열 형태로 출력
 * @param {...any} args 전달받은 인수들
 * - args는 배열 형태로 전달됩니다.
 */
function printArguments(...args) {
  for (const arg of args) {
    console.log(arg); // 각 인수를 출력
  }
  console.log("-------------");
}

// 호출 예제
printArguments("javascript");
printArguments("red", "yellow");
printArguments("apple", "banana", "cherry");

/**
 * Rest Parameter 배열 메서드 활용 예제
 * - 전달받은 인수를 배열로 변환해 배열 메서드인 splice를 사용
 * @param {...any} args 전달받은 인수들
 */
function printArguments2(...args) {
  console.log(args.splice(0, 2)); // 처음 두 개의 인수만 출력
  // console.log(arguments.splice(0, 2)); Error: arguments.splice is not a function
  console.log("-------------");
}

// 호출 예제
printArguments2("javascript");
printArguments2("red", "yellow");
printArguments2("apple", "banana", "cherry");

/**
 * 고정 매개변수와 Rest Parameter 혼합 예제
 * - 고정 매개변수는 필수적으로 처리해야 할 인수를 받습니다.
 * - 나머지 인수는 Rest Parameter로 처리됩니다.
 * @param {string} first 우승자
 * @param {string} second 준우승자
 * @param {...string} others 나머지 참가자들
 */
function printRank(first, second, ...others) {
  console.log("우승:", first);
  console.log("준우승:", second);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
  console.log("-------------");
}

// 호출 예제
printRank("Tom", "Jerry", "Mike", "John", "Jane");
