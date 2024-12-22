# ECMAScript

## 자바스크립트 표준 명세서

ECMAScript(이하 ES)는 자바스크립트(JavaScript)의 표준 명세서로, 자바스크립트의 문법, 구조, 기능 등을 정의합니다. 이는 브라우저와 다양한 자바스크립트 실행 환경에서 일관된 동작을 보장합니다.

---

## ECMAScript의 정의

ECMAScript는 자바스크립트라는 프로그래밍 언어의 표준을 의미합니다. 이 표준은 국제적인 비영리 표준화 단체인 ECMA 인터내셔널에 의해 관리되며, 표준 문서인 "ECMA-262"로 정의됩니다. 이를 기반으로 각 브라우저와 환경에서 자바스크립트를 구현합니다.

---

## 모던 자바스크립트란?

**모던 자바스크립트**는 현시점에서 사용하기 적합한 최신 ECMAScript 표준을 준수하는 자바스크립트를 의미합니다. 최신 브라우저 및 실행 환경에서 지원되는 기능들을 포함하며, 일반적으로 다음을 포함합니다:

1. **ES6(ECMAScript 2015) 이후의 기능들**:
   - `let`, `const` 키워드
   - 화살표 함수 (`=>`)
   - 클래스 (`class`)
   - 모듈 (`import/export`)
   - 템플릿 리터럴 (`` `${}` ``)

2. **향후 버전의 추가 기능들**:
   - `async/await` 비동기 처리 방식
   - 새로운 자료구조 (예: `Map`, `Set`)
   - 선택적 체이닝 (`?.`) 및 널 병합 연산자 (`??`)
   
3. **개선된 성능 및 개발 경험**:
   - Babel, Webpack 등 도구를 통해 구버전 브라우저 호환성 확보
   - 최신 표준을 반영한 린트(Lint) 및 타입 검사 도구 지원

---

## ECMAScript의 발전

ECMAScript는 지속적으로 발전하고 있으며, 매년 새로운 버전이 출시됩니다. 주요 버전과 특징은 다음과 같습니다:

- **ES5 (2009)**: 초기 자바스크립트의 안정화 버전, 배열 메서드 (`map`, `filter`) 도입
- **ES6 (2015)**: 자바스크립트의 대대적인 업데이트, 주요 현대 문법 추가
- **ES7 (2016) 이후**: 매년 새로운 기능이 점진적으로 추가

---

## 활용 방안

모던 자바스크립트를 사용하려면 다음 사항을 고려하세요:

- **최신 브라우저 사용**: 최신 브라우저는 대부분 모던 자바스크립트를 지원합니다.
- **빌드 도구 활용**: Babel과 같은 도구를 사용하여 구버전 브라우저에서도 실행 가능하도록 변환할 수 있습니다.
- **정기적 학습**: 새로운 표준과 기능에 대한 학습을 통해 생산성을 향상시킬 수 있습니다.

---

## Javascript와 ECMAScript 차이

JavaScript와 ECMAScript는 밀접한 관계에 있지만 분명한 차이가 있습니다:

1. **JavaScript**:
   - 프로그래밍 언어로, 웹 브라우저에서 실행되는 스크립팅 언어입니다.
   - ECMAScript 표준을 기반으로 구현되며, 브라우저 환경에서 동작하는 기능들을 포함합니다.
   - DOM 조작, 브라우저 API 등은 ECMAScript가 아닌 JavaScript 엔진의 독자적인 기능입니다.

2. **ECMAScript**:
   - JavaScript의 표준 명세로, 프로그래밍 언어의 기본 문법과 동작을 정의합니다.
   - ECMAScript는 JavaScript 외에도 JScript(Microsoft) 및 ActionScript(Adobe)와 같은 다른 언어에서도 사용됩니다.
   - JavaScript는 ECMAScript를 구현한 가장 널리 사용되는 언어입니다.

결론적으로, ECMAScript는 JavaScript의 동작을 정의하는 표준이며, JavaScript는 이를 구현한 언어로 추가적인 웹 관련 기능을 포함합니다.

---

## 관련 문서

- 공식 문서: **[ECMA-International 공식 ECMA-262 문서](https://ecma-international.org/publications-and-standards/standards/ecma-262/)**
- 진행 현황: **[위키백과 - ECMAScript](https://ko.wikipedia.org/wiki/ECMAScript)**
- 브라우저 지원 현황: **[한눈에 확인하는 호환성 테이블](https://compat-table.github.io/compat-table/es6/)**, **[문법 검색으로 확인하는 호환성 테이블](https://caniuse.com/)**

---

## 결론

ECMAScript는 자바스크립트의 발전을 주도하는 표준입니다. 이를 이해하고 활용하면 현대 웹 개발에서 더욱 효율적이고 강력한 자바스크립트 코드를 작성할 수 있습니다.
