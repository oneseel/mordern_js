// JavaScript forEach와 map 정리

// forEach와 map에 대한 설명
/**
 * forEach:
 *  - 배열의 각 요소를 순회하며 작업을 수행할 수 있는 메서드입니다.
 *  - 반환값이 없기 때문에 배열 요소를 이용한 작업만 수행하고 결과를 반환하지 않습니다.
 *  - 주로 단순한 반복 작업, 예: 출력, 로그 기록 등에 사용됩니다.
 *
 * map:
 *  - 배열의 각 요소를 순회하며 특정 작업을 수행한 결과를 새로운 배열로 반환하는 메서드입니다.
 *  - 기존 배열을 변경하지 않고 새로운 배열을 생성합니다.
 *  - 데이터 변환 작업이나 새로운 배열이 필요한 경우에 유용합니다.
 */

// 예제 코드

const members = ["영훈", "윤수", "동욱", "태호"];

// for...of 사용 예시
for (let member of members) {
  console.log(`${member}님이 입장하였습니다.`);
}

console.log("=====================");

// forEach 사용 예시
/**
 * 첫 번째 파라미터: 배열의 요소
 * 두 번째 파라미터: 해당 요소의 인덱스
 * 세 번째 파라미터: 해당 요소가 속한 배열
 */
members.forEach((member, i, arr) => {
  console.log(`${i + 1}. ${member}님이 입장하였습니다.`);
  console.log(arr);
});

console.log("=====================");

// map 사용 예시
const firstNames = ["영훈", "윤수", "동욱", "태호"];
const lastNames = ["강", "이", "손", "최"];

const fullNames = firstNames.map((firstName, i) => {
  return `${lastNames[i]}${firstName}`;
});
console.log(fullNames);

console.log("=====================");

// forEach와 map의 차이
/**
 * forEach:
 *  - 반환값이 없으므로 단순히 배열의 요소를 순회하면서 작업이 필요할 때 사용.
 *
 * map:
 *  - 반환값으로 새로운 배열을 생성하며, 기존 배열은 변경되지 않음.
 */

// 주의사항: 반복 횟수
/**
 * forEach와 map은 배열의 요소만큼 반복합니다.
 * 배열의 크기가 커지면 반복 횟수도 증가하며, 배열 크기가 줄어들면 줄어든 요소만큼만 반복합니다.
 */

// forEach 반복 중 배열 조작 (비정상적인 경우)
const members2 = ["영훈", "윤수", "동욱", "태호"];

members2.forEach((member) => {
  console.log(`${member}님이 입장하였습니다.`);
  members2.push("태양"); // 배열 크기 변경
});
console.log(members2); // ["영훈", "윤수", "동욱", "태호", "태양", "태양", "태양", "태양"]

console.log("=====================");

const members3 = ["영훈", "윤수", "동욱", "태호"];

members3.forEach((member) => {
  console.log(`${member}님이 입장하였습니다.`);
  members3.pop(); // 배열 크기 축소
});
console.log(members3); // ["영훈", "윤수"]
