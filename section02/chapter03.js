// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
// 배열의 순서대로 변수에 값을 꺼내서 담는다
// four = 4 → 해당 위치 값이 없으면 기본값 4 사용
let [one, two, three, four = 4] = arr;
console.log(one);   // 1
console.log(two);   // 2
console.log(three); // 3
console.log(four);  // 4 (arr에 4번째 값이 없어서 기본값 사용)

// 2. 객체의 구조 분해 할당
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};
// 객체는 "키 이름 기준"으로 값을 꺼낸다 (순서 상관 없음)
// age: myAge → age 값을 꺼내서 myAge라는 변수에 저장 (이름 변경)
// extra = "hello" → 해당 키가 없으면 기본값 사용
let {
  age: myAge,
  hobby,
  name,
  extra = "hello",
} = person;

console.log(myAge); // 27
console.log(hobby); // 테니스
console.log(name);  // 이정환
console.log(extra); // hello (person에 없어서 기본값 사용)

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 객체를 매개변수로 받으면서 바로 구조 분해
// person.name 이런 식으로 안 쓰고 바로 꺼내서 사용 가능
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};
// person 객체를 넣으면 자동으로 구조 분해됨
func(person);
// 출력: 이정환 27 테니스 undefined
// extra는 person에 없으므로 undefined
