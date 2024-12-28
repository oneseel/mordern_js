// Arguments 객체
// 1. 함수에 전달된 인수들을 포함하는 유사 배열 객체입니다.
// 2. 배열처럼 보이지만 실제 배열은 아니며 배열 메서드는 사용할 수 없습니다.
// 3. length 프로퍼티로 인수의 개수를 확인할 수 있으며, 인덱스를 통해 각 인수에 접근할 수 있습니다.
// 4. for...of 루프를 사용해 반복할 수 있습니다.

function printArguments(a, b, c) {
  console.log(a); // 첫 번째 인수
  console.log(b); // 두 번째 인수
  console.log(c); // 세 번째 인수
  console.log(arguments); // 전달된 모든 인수
  console.log("-------------");
}

printArguments(1, 2, 3);

// Arguments가 3개보다 많을 때: 초과된 인수는 무시
printArguments(1, 2, 3, 4, 5, 6);

// Arguments가 3개보다 적을 때: 부족한 인수는 undefined
printArguments(1, 2);

// Arguments 객체를 반복 처리하는 예제
function printArguments2(a, b, c) {
  for (const arg of arguments) {
    console.log(arg); // 각 인수를 출력
  }
  console.log("-------------");
}

printArguments2(1, 2, 3);
printArguments2(1, 2, 3, 4, 5, 6);
printArguments2(1, 2);
