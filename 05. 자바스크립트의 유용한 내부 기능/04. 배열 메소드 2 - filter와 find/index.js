// JavaScript filter와 find 정리

// filter와 find에 대한 설명
/**
 * filter:
 *  - 배열의 각 요소에 대해 주어진 콜백 함수를 실행합니다.
 *  - 콜백 함수의 반환값이 true인 요소들만 모아 새로운 배열을 반환합니다.
 *  - 원본 배열은 변경되지 않습니다.
 *
 * find:
 *  - 배열의 각 요소에 대해 주어진 콜백 함수를 실행합니다.
 *  - 콜백 함수의 반환값이 true인 첫 번째 요소를 반환합니다.
 *  - 조건을 만족하는 요소를 찾으면 반복을 중단하며, 조건을 만족하지 못하면 undefined를 반환합니다.
 */

// 예제 코드

const devices = [
  { name: "GalaxyNote", brand: "Samsung" },
  { name: "MacbookPro", brand: "Apple" },
  { name: "ipad", brand: "Apple" },
  { name: "GalaxyWathch", brand: "Samsung" },
  { name: "iMac", brand: "Apple" },
  { name: "GalaxyBuds", brand: "Samsung" },
  { name: "Gram", brand: "LG" },
  { name: "GalaxyBook", brand: "Samsung" },
  { name: "SurfacePro", brand: "Microsoft" },
  { name: "ZenBook", brand: "Asus" },
  { name: "MacbookAir", brand: "Apple" },
];

// filter 사용 예시
const apples = devices.filter((el) => el.brand === "Apple");
console.log(apples);
/**
 * 결과:
 * [
 *   { name: "MacbookPro", brand: "Apple" },
 *   { name: "ipad", brand: "Apple" },
 *   { name: "iMac", brand: "Apple" },
 *   { name: "MacbookAir", brand: "Apple" },
 * ]
 */

// find 사용 예시
const myLaptop = devices.find((el) => el.name === "Gram");
console.log(myLaptop);
/**
 * 결과:
 * { name: "Gram", brand: "LG" }
 */

// filter와 find의 차이점
/**
 * filter:
 *  - 반환값이 배열입니다.
 *  - 조건을 만족하는 모든 요소를 반환합니다.
 *
 * find:
 *  - 반환값이 단일 값입니다.
 *  - 조건을 만족하는 첫 번째 요소를 반환하며, 요소를 찾는 즉시 반복이 중단됩니다.
 */
