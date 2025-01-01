// JavaScript Object 내장 메서드 정리

// Object.keys, Object.values, Object.entries에 대한 설명
/**
 * Object.keys():
 *  - 객체의 모든 키를 문자열 배열로 반환합니다.
 *
 * Object.values():
 *  - 객체의 모든 값을 배열로 반환합니다.
 *
 * Object.entries():
 *  - 객체의 키와 값을 [key, value] 형태의 배열로 반환합니다.
 */

// 예제 객체
const data = {
  name: '코드잇',
  email: 'happy@codeit.com',
  address: '서울특별시 청계천로 100'
};

// Object.keys 사용 예시
const keys = Object.keys(data); // ['name', 'email', 'address']
keys.forEach((key) => {
  console.log(data[key]); // 각 키에 해당하는 값 출력
});

// 더 간단한 형태
Object.keys(data)
  .forEach((key) => {
    console.log(data[key]);
  });

// Object.values 사용 예시
Object.values(data) // ['코드잇', 'happy@codeit.com', '서울특별시 청계천로 100']
  .forEach((value) => {
    console.log(value); // 각 값을 출력
  });

// Object.entries 사용 예시
Object.entries(data) // [['name', '코드잇'], ['email', 'happy@codeit.com'], ['address', '서울특별시 청계천로 100']]
  .forEach(([key, value]) => {
    console.log(value); // 키와 값을 분해하여 값 출력
  });

// 참고: Destructuring 문법
/**
 * Object.entries() 결과의 각 요소를 [key, value]로 구조 분해 할당하여 사용하면 깔끔하게 코드 작성 가능.
 */
