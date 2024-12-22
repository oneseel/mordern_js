# Truthy와 Falsy 값

자바스크립트에서는 조건문 등에서 값이 **참(true)**으로 평가되는지, **거짓(false)**으로 평가되는지가 중요합니다. 이를 구분하는 기준으로 **Truthy**와 **Falsy** 값이 있습니다.

---

## Falsy 값

Falsy 값은 논리적 평가에서 **거짓(false)**으로 간주되는 값들입니다. 다음은 자바스크립트에서 Falsy로 평가되는 값들입니다:

- `false`
- `null`
- `undefined`
- `NaN`
- `0`
- `''` (빈 문자열)

### 예제
```javascript
if (!false) console.log('false는 Falsy입니다.');
if (!null) console.log('null은 Falsy입니다.');
if (!undefined) console.log('undefined는 Falsy입니다.');
if (!NaN) console.log('NaN은 Falsy입니다.');
if (!0) console.log('0은 Falsy입니다.');
if (!'') console.log('빈 문자열은 Falsy입니다.');
```

---

## Truthy 값

Falsy에 해당하지 않는 모든 값은 **Truthy**로 평가됩니다. 즉, 대부분의 값은 논리적 평가에서 참(true)으로 간주됩니다.

### 주의할 점
- **빈 배열 (`[]`)**과 **빈 객체 (`{}`)**도 Truthy로 평가됩니다.

### 예제
```javascript
if (true) console.log('true는 Truthy입니다.');
if ([]) console.log('빈 배열은 Truthy입니다.');
if ({}) console.log('빈 객체는 Truthy입니다.');
if ('Codeit') console.log('문자열은 Truthy입니다.');
if (123) console.log('숫자는 Truthy입니다.');
```

---

## 결론

Truthy와 Falsy는 조건문 작성 시 자주 사용되며, 이를 정확히 이해하면 예기치 않은 동작을 방지할 수 있습니다. 특히 **빈 배열**과 **빈 객체**는 Truthy라는 점을 기억해 두세요!
