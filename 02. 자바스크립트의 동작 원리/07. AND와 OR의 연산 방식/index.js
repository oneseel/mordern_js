// AND(&&)와 OR(||) 연산 정리

// AND (&&) 연산자
// - 왼쪽 값이 false인 경우, 왼쪽 값을 반환
// - 왼쪽 값이 true인 경우, 오른쪽 값을 반환
console.log(true && true);      // true
console.log(true && false);     // false
console.log(false && true);     // false
console.log(false && false);    // false

// OR (||) 연산자
// - 왼쪽 값이 true인 경우, 왼쪽 값을 반환
// - 왼쪽 값이 false인 경우, 오른쪽 값을 반환
console.log(true || true);      // true
console.log(true || false);     // true
console.log(false || true);     // true
console.log(false || false);    // false

// 활용
console.log("Codeit" && "JavaScript");  // "JavaScript"
console.log(null && undefined);   // null
console.log("0" && NaN);          // NaN
console.log(0 || true);           // true 
console.log({} || 123);           // {}

// 심화
function print(value) {
  const message = value || "Codeit";
  console.log(message);
}

print();             // Codeit
print("JavaScript"); // JavaScript

// 연산자 우선순위는 AND(&&)가 OR(||)보다 높다.
console.log(true || false && false);    // true
console.log((true || false) && false);  // false

console.log("Codeit" || NaN && false);  // "Codeit"
console.log(("Codeit" || NaN) && false);  // false