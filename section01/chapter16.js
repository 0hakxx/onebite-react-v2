// 1. 상수 객체
// 상수 변수는 값 변경 불가능하지만, 상수 객체는 추가/수정/삭제 가능함
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
// ❌ 불가능 (참조 자체 변경!)
// animal = {};  // TypeError!

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함
const person = {
  name: "이정환",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
