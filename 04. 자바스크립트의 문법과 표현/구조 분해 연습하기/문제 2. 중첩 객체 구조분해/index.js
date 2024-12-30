/**
 * 다음 객체에서 city와 postalCode를 추출하여 각각 변수에 저장하세요.
 */

const location = {
  country: "Korea",
  details: {
    city: "Seoul",
    postalCode: "12345",
  },
};

const {details: {city, postalCode}} = location;
