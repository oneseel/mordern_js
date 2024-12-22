# `typeof` 연산자

자바스크립트에서 데이터 타입을 확인할 때 사용하는 연산자가 바로 **`typeof`** 입니다. `typeof` 연산자는 값의 데이터 타입을 문자열로 반환합니다.

---

## 사용법

`typeof` 연산자는 다음 두 가지 형태로 사용할 수 있습니다:

1. 공백(띄어쓰기) 사용:
   ```javascript
   typeof 값;
   ```
2. 함수처럼 괄호 사용:
   ```javascript
   typeof(값);
   ```

### 예제

```javascript
console.log(typeof 'Codeit');     // string
console.log(typeof Symbol());     // symbol
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof true);         // boolean
console.log(typeof(false));       // boolean
console.log(typeof 123);          // number
console.log(typeof NaN);          // number
console.log(typeof 456n);         // bigint
console.log(typeof undefined);    // undefined
```

---

## 주의사항

### 1. `null`의 타입이 `object`

`typeof null`을 실행하면 `object`가 반환됩니다. 이는 자바스크립트가 처음 설계될 때 발생한 오류로, ECMAScript에서 수정이 제안되었지만 호환성 문제로 그대로 유지되고 있습니다.

```javascript
console.log(typeof null); // object
```

### 2. 함수의 타입이 `function`

자바스크립트에서 함수는 객체로 취급되지만, `typeof` 연산자를 사용하면 `function`이 반환됩니다.

```javascript
function sayHi() {
  console.log('Hi!');
}

console.log(typeof sayHi); // function
```

이 점은 함수의 타입을 확인할 때 유용합니다.

---

## 결론

`typeof` 연산자는 값의 데이터 타입을 확인하는 데 유용하지만, 몇 가지 예외 사항(`null`과 함수)이 있으므로 주의가 필요합니다. 이러한 특성을 기억해 두면 자바스크립트의 동작을 더 잘 이해할 수 있습니다.
