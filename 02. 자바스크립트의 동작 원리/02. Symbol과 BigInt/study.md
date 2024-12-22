# Symbol과 BigInt

자바스크립트에서 추가된 **Symbol**과 **BigInt** 데이터 타입은 특정 상황에서 유용하게 사용됩니다. 활용 빈도는 높지 않지만, 이들의 특징을 이해하면 다양한 상황에 대처할 수 있습니다.

---

## Symbol

- **Symbol**은 **고유한 값**을 생성하기 위한 **기본형 데이터 타입**입니다.
- 주로 코드 내에서 유일한 식별자를 생성할 때 사용됩니다.

### 생성 방법

```javascript
const user = Symbol(); // 심볼 생성
const userWithDesc = Symbol('this is a user'); // 설명 추가 가능
```

### 주요 특징

1. **유일성 보장**: 동일한 설명을 가진 심볼이라도 서로 다른 값으로 간주됩니다.
   ```javascript
   const symbolA = Symbol('desc');
   const symbolB = Symbol('desc');
   console.log(symbolA === symbolB); // false
   ```
2. **비교 불가**: 심볼 값은 다른 어떤 값과도 같지 않습니다.
   ```javascript
   const user = Symbol('user');
   console.log(user === 'user'); // false
   console.log(user === Symbol('user')); // false
   ```

---

## BigInt

- **BigInt**는 자바스크립트에서 **매우 큰 정수**를 표현하기 위한 데이터 타입입니다.
- 안전한 정수 범위를 초과하는 값을 다룰 수 있습니다.
  - 안전한 정수 범위: `-(2**53 - 1)` ~ `2**53 - 1`

### 생성 방법

1. 숫자 뒤에 `n`을 붙여 생성
   ```javascript
   const bigNumber = 9007199254740993n;
   ```
2. `BigInt` 생성자를 사용
   ```javascript
   const bigNumber = BigInt('9007199254740993');
   ```

### 주요 특징

1. **큰 정수 표현**:
   - 기존 정수형(Number)의 한계를 극복하여 안전하게 큰 값을 다룰 수 있습니다.
   ```javascript
   console.log(9007199254740993n); // 9007199254740993n
   ```
2. **소수 불가**:
   - BigInt는 정수만 표현 가능하며, 소수는 사용할 수 없습니다.
   ```javascript
   console.log(1.5n); // SyntaxError
   ```
3. **BigInt끼리만 연산 가능**:
   - 서로 다른 데이터 타입 간 연산은 명시적인 타입 변환이 필요합니다.
   ```javascript
   console.log(3n * 2n); // 6n
   console.log(3n * 2); // TypeError
   ```

---

## 주의사항

- **Symbol**은 주로 객체 속성의 고유 키를 생성하는 데 유용합니다.
- **BigInt**는 암호학, 고정밀 계산, 큰 정수를 다루는 작업에 적합합니다.
- 두 데이터 타입 모두 특정 상황에서만 사용되므로 필요할 때 적절히 활용하면 좋습니다.

---

## 결론

Symbol과 BigInt는 자바스크립트의 데이터 타입을 확장하여 고유 식별자 생성과 큰 숫자 처리 문제를 해결합니다. 활용 빈도가 높지 않지만, 필요한 상황에서 적절히 활용하면 유용합니다.
