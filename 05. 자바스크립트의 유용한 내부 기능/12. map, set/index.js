// JavaScript Map과 Set 정리

// Map에 대한 설명
/**
 * Map:
 *  - 이름이 있는 데이터를 저장할 수 있는 데이터 구조입니다.
 *  - 다양한 자료형을 key로 사용할 수 있습니다.
 *  - 메서드를 통해 값을 추가하거나 접근합니다.
 *
 * 주요 메서드와 프로퍼티:
 *  - map.set(key, value): key를 이용해 value를 추가합니다.
 *  - map.get(key): key에 해당하는 값을 반환합니다. (없으면 undefined)
 *  - map.has(key): key가 존재하면 true, 아니면 false를 반환합니다.
 *  - map.delete(key): key에 해당하는 값을 삭제합니다.
 *  - map.clear(): 모든 요소를 제거합니다.
 *  - map.size: 요소의 개수를 반환하는 프로퍼티.
 */

// Map 사용 예시
const codeit = new Map();

// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

// Set에 대한 설명
/**
 * Set:
 *  - 여러 값을 순서대로 저장하는 데이터 구조입니다.
 *  - 중복 값을 허용하지 않습니다.
 *  - 메서드를 통해 값을 추가하거나 제거합니다.
 *
 * 주요 메서드와 프로퍼티:
 *  - set.add(value): 값을 추가합니다.
 *  - set.has(value): 값이 존재하면 true, 아니면 false를 반환합니다.
 *  - set.delete(value): 값을 제거합니다.
 *  - set.clear(): 모든 요소를 제거합니다.
 *  - set.size: 요소의 개수를 반환하는 프로퍼티.
 */

// Set 사용 예시
const members = new Set();

// add 메소드
members.add('영훈');
members.add('윤수');
members.add('동욱');
members.add('태호');

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

// Set의 중복 제거 예시
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);
console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}

// Set 요소 순회 예시
const membersForLoop = new Set(['영훈', '윤수', '동욱', '태호']);
for (const member of membersForLoop) {
  console.log(member); // 각 멤버를 순서대로 출력
}
