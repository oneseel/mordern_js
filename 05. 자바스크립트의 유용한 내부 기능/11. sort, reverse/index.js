// JavaScript sort와 reverse 정리

// sort에 대한 설명
/**
 * sort:
 *  - 배열의 요소를 정렬하는 메서드입니다.
 *  - 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬합니다.
 *  - 숫자를 정렬할 때는 콜백 함수를 전달해야 올바른 결과를 얻을 수 있습니다.
 *  - 원본 배열을 변경한다는 점에 주의해야 합니다.
 */

// sort 사용 예시
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

// 기본 정렬 (유니코드 순서)
letters.sort();
numbers.sort();

console.log(letters); // ["A", "B", "C", "D", "E"]
console.log(numbers); // [1, 10, 21, 36000, 4]

// 숫자 정렬을 위한 콜백 함수 사용
const numbersForSort = [1, 10, 4, 21, 36000];

// 오름차순 정렬
numbersForSort.sort((a, b) => a - b);
console.log(numbersForSort); // [1, 4, 10, 21, 36000]

// 내림차순 정렬
numbersForSort.sort((a, b) => b - a);
console.log(numbersForSort); // [36000, 21, 10, 4, 1]

// 정렬 전 데이터를 유지하려면 복사본 사용
const originalNumbers = [...numbersForSort];
console.log(originalNumbers); // [36000, 21, 10, 4, 1]

// reverse에 대한 설명
/**
 * reverse:
 *  - 배열의 순서를 뒤집는 메서드입니다.
 *  - 원본 배열을 변경합니다.
 *  - 추가적인 파라미터가 없으며, 단순히 메서드를 호출하면 됩니다.
 */

// reverse 사용 예시
const lettersForReverse = ['a', 'c', 'b'];
const numbersForReverse = [421, 721, 353];

lettersForReverse.reverse();
numbersForReverse.reverse();

console.log(lettersForReverse); // ["b", "c", "a"]
console.log(numbersForReverse); // [353, 721, 421]

// 주의 사항
/**
 * sort와 reverse는 모두 원본 배열을 변경합니다.
 * 정렬이나 뒤집기 이전 데이터를 보존하려면 배열을 복사한 후 작업하세요.
 */
