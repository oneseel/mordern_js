// Parameter
// - 함수를 호출할 때 값을 전달하는 방법
function greet(user = 'default') {
  console.log(`Hello, ${user}`);
}

// Argument: 'JavaScript', 'World'
// - 함수를 호출할 때 전달하는 값
greet('JavaScript'); // Hello, JavaScript
greet('World');      // Hello, World
greet();             // Hello, default

// 여러 개의 매개변수와 기본값 설정
function introduce(user = "Codeit", hobby = "coding") {
  console.log(`${user} likes ${hobby}`);
}

introduce();                        // Codeit likes coding
introduce(undefined, "traveling"); // Codeit likes traveling

// 기본값을 다른 매개변수를 활용해 설정
function calculate(a, b = a + 3) {
  console.log(`a: ${a}, b: ${b}`);
}

calculate(5); // a: 5, b: 8
calculate(10, 20); // a: 10, b: 20
