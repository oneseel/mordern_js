/**
 * 다음은 프론트엔드에서 사용하는 상태(state) 객체입니다. 구조분해를 사용하여 products와 loading 값을 추출하고, 나머지 속성은 otherState라는 객체에 저장하세요.
 */

const state = {
  products: ["Laptop", "Phone", "Tablet"],
  loading: true,
  error: null,
  lastUpdated: "2024-12-30",
};

const {products, loading, ...otherStage} = state;
