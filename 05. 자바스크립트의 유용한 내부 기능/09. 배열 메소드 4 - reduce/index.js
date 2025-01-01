// JavaScript reduce 정리

// reduce에 대한 설명
/**
 * reduce:
 *  - 배열의 각 요소를 순회하며 콜백 함수를 실행하고, 결과를 누적(accumulate)하여 하나의 값을 반환합니다.
 *  - 초기값(initialValue)을 설정할 수 있으며, 초기값이 없으면 배열의 첫 번째 요소가 초기값으로 사용됩니다.
 *
 * 구조:
 *  - array.reduce((acc, el, i, arr) => {
 *      return nextAccValue;
 *    }, initialValue);
 *
 * 매개변수 설명:
 *  - acc: 누적값(accumulator)
 *  - el: 현재 요소
 *  - i: 현재 요소의 인덱스
 *  - arr: reduce를 호출한 배열
 *
 * 반환값:
 *  - 최종 누적값
 */

// 예제 코드
const numbers = [1, 2, 3, 4, 5];

// reduce 사용 예시
const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
  console.log(`acc: ${acc}`); // 현재까지의 누적값
  console.log(`el: ${el}`); // 현재 요소
  console.log(`------------------`);

  return acc + el; // 누적값에 현재 요소를 더함
}, 0); // 초기값을 0으로 설정

console.log(`sumAll: ${sumAll}`); // sumAll: 15

// reduce 응용
/**
 * reduce는 다양한 방식으로 활용될 수 있습니다. 예를 들어:
 *  - 배열 요소의 합계, 평균 계산
 *  - 배열 요소를 객체나 다른 데이터 구조로 변환
 *  - 배열 중복 제거
 */
