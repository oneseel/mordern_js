# 데이터 타입

자바스크립트는 **유연한 데이터 타입**을 지원하며, 상황에 따라 데이터 타입이 동적으로 변할 수 있습니다.

---

## 기본형 (Primitive Types)

1. **`number`**: 숫자 타입 (정수, 실수 포함)
2. **`string`**: 문자열 타입
3. **`boolean`**: 논리 값 (`true` / `false`)
4. **`null`**: 값이 없음을 명시적으로 나타냄
5. **`undefined`**: 값이 할당되지 않은 상태를 나타냄
6. **`symbol`** (ES2015): 유일한 값을 생성할 때 사용
7. **`bigint`** (ES2020): 매우 큰 정수를 다룰 때 사용

---

## 참조형 (Reference Types)

1. **`object`**: 여러 값을 담는 복합 데이터 타입
   - 객체 (`{}`)
   - 배열 (`[]`)
   - 함수 (`function`)
   - 날짜 (`Date`)
   - 정규표현식 (`RegExp`)

---

## 데이터 타입의 유연성

자바스크립트는 **동적 타이핑(dynamic typing)** 언어로, 변수에 저장된 데이터 타입은 실행 중 변경될 수 있습니다. 예를 들어:

```javascript
let variable = 42;       // number
variable = "Hello";      // string
variable = true;         // boolean
```

이러한 특성으로 인해 개발자는 변수 타입을 명확히 이해하고 코드를 작성해야 합니다.

---

### 결론

자바스크립트의 데이터 타입은 기본형과 참조형으로 나뉩니다. 최신 ECMAScript 표준에 따라 새로운 타입들이 추가되었으며, 유연한 동적 타이핑으로 다양한 상황에서 활용될 수 있습니다.
