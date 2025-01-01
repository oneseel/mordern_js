// JavaScript some과 every 정리

// some과 every에 대한 설명
/**
 * some:
 *  - 배열의 요소 중 하나라도 주어진 조건을 만족하면 true를 반환합니다.
 *  - 조건을 만족하는 요소를 찾는 즉시 반복을 중단합니다.
 *  - 조건을 만족하는 요소가 없으면 false를 반환합니다.
 *
 * every:
 *  - 배열의 모든 요소가 주어진 조건을 만족해야 true를 반환합니다.
 *  - 하나라도 조건을 만족하지 않으면 false를 반환하며, 이때 반복이 중단됩니다.
 *
 * 빈 배열의 경우:
 *  - some: 항상 false를 반환합니다.
 *  - every: 항상 true를 반환합니다.
 */

// 예제 코드
const numbers = [1, 3, 5, 7, 9];

// some 사용 예시
const someReturn = numbers.some((el, i) => {
  console.log(`${i}번째 요소: ${el}`);
  return el > 5; // 조건: 요소가 5보다 큰지 확인
});
console.log(`some 결과: ${someReturn}`); // some 결과: true

console.log("----------------------");

// every 사용 예시
const everyReturn = numbers.every((el, i) => {
  console.log(`${i}번째 요소: ${el}`);
  return el > 5; // 조건: 요소가 5보다 큰지 확인
});
console.log(`every 결과: ${everyReturn}`); // every 결과: false

// 반복 횟수에 대한 차이
/**
 * some:
 *  - 조건을 만족하는 요소를 찾으면 반복이 종료됩니다.
 *
 * every:
 *  - 조건을 만족하지 않는 요소를 찾으면 반복이 종료됩니다.
 */

console.log("----------------------");

// 빈 배열의 경우 some과 every
const arr = [];
const someReturn2 = arr.some((el) => {
  return el > 5;
});
const everyReturn2 = arr.every((el) => {
  return el > 5;
});
console.log(`빈 배열의 some 결과: ${someReturn2}, every 결과: ${everyReturn2}`); // some: false, every: true
