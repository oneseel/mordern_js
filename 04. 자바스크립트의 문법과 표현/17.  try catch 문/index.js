// try catch 문
try {
  // 코드
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}

// try-catch 문 예제
try {
  // 정상적으로 실행될 코드
  console.log("에러 전");

  const codeit = "코드잇"; // 상수 선언 및 초기화
  console.log(codeit);

  // const 변수에 재할당 시도 (에러 발생)
  codeit = "codeit";

  const language = "JavaScript";
  console.log(language); // 실행되지 않음 (이전에 에러 발생)
} catch (error) {
  // 에러가 발생했을 때 실행될 코드
  console.log("에러 후");
  console.error(error);       // 에러 객체 전체 출력
  console.log(error.name);    // 에러 이름 출력
  console.log(error.message); // 에러 메시지 출력
}

// Note:
// try 블록 내에서 에러가 발생하면 해당 시점 이후의 코드는 실행되지 않습니다.
