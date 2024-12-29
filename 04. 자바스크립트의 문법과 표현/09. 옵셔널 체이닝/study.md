# JavaScript Optional Chaining (옵셔널 체이닝)

옵셔널 체이닝(Optional Chaining)은 JavaScript에서 객체의 특정 속성에 접근하거나 함수 호출을 할 때, 속성이나 함수가 존재하지 않아도 에러 없이 `undefined`를 반환하도록 해주는 문법입니다. 이 문법은 `?.` 연산자로 표현되며, 속성 접근 시 간결하고 안전한 코드를 작성할 수 있도록 돕습니다.

## **기본 문법**

```javascript
object?.property;
object?.[expression];
object?.method();
```

---

## **사용 사례**

### 1. 객체 속성 접근

객체가 중첩된 구조일 때 특정 속성을 안전하게 접근할 수 있습니다.

```javascript
const user = {
  name: "Alice",
  address: {
    city: "Seoul",
  },
};

console.log(user.address?.city); // "Seoul"
console.log(user.address?.country); // undefined
console.log(user.contact?.phone); // undefined (에러 발생하지 않음)
```

### 2. 배열 요소 접근

배열이 존재하지 않을 가능성을 처리할 수 있습니다.

```javascript
const data = null;
console.log(data?.[0]); // undefined
```

### 3. 함수 호출

객체에 메서드가 없을 때 에러를 방지합니다.

```javascript
const user = {
  greet: () => "Hello!",
};

console.log(user.greet?.()); // "Hello!"
console.log(user.sayGoodbye?.()); // undefined (에러 발생하지 않음)
```

### 4. DOM 요소 접근

DOM 객체가 존재하지 않을 가능성이 있을 때 유용합니다.

```javascript
const element = document.querySelector(".non-existent-class");
console.log(element?.textContent); // undefined
```

---

## **장점**

1. **에러 방지**: 객체 속성이나 메서드가 없더라도 에러를 발생시키지 않음.
2. **간결한 코드**: 중첩된 구조를 다룰 때 코드가 깔끔하고 읽기 쉬움.
3. **null/undefined 체크 생략**: 불필요한 조건문 없이 안전하게 접근 가능.

---

## **주의사항**

1. **`undefined` 반환**: 속성이나 메서드가 없으면 `undefined`를 반환합니다. 이를 명확히 이해해야 합니다.
2. **쓰기에는 사용 불가**: 옵셔널 체이닝은 읽기 전용으로만 사용할 수 있습니다.
   ```javascript
   const obj = {};
   obj?.property = "value"; // SyntaxError
   ```
3. **과도한 사용 주의**: 항상 객체의 구조를 이해하고 필요한 경우에만 사용해야 합니다.

---

## **결론**

옵셔널 체이닝은 안전하고 간결한 코드를 작성하는 데 매우 유용한 도구로, 특히 중첩된 데이터 구조나 불확실한 객체에 접근할 때 필수적입니다. 이를 통해 코드의 가독성과 유지보수성을 크게 향상시킬 수 있습니다.
