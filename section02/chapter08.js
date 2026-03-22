// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});
// 출력:
// 0 2
// 1 4
// 2 6

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2); // doubledArr = [2, 4, 6]
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드 (없으면 -1)
let arr3 = [2, 2, 2];
let index1 = arr3.indexOf(2);  // 0 (첫 번째로 발견된 값의 인덱스를 반환)
let index2 = arr3.indexOf(20); // -1

// ⚠️ 객체는 indexOf로 못 찾음 (참조값 비교 때문)
let objectArr = [
  { name: "이정환" },
  { name: "홍길동" },
];
// console.log(objectArr.indexOf({ name: "이정환" })); // 출력: -1 (같은 내용이어도 다른 객체라서 실패)
// 👉 객체는 findIndex로 찾아야 함
// console.log(objectArr.findIndex((item) => item.name === "이정환")); // 출력: 0

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드 (없으면 -1)
let arr4 = [1, 2, 3];
// 실패 케이스 (조건 만족 없음)
const findedIndex = arr4.findIndex((item) => item === 999);
console.log(findedIndex); // 출력: -1
// 성공 케이스 (조건 만족 있음)
const findedIndex2 = arr4.findIndex((item) => item === 2);
console.log(findedIndex2); // 출력: 1
// 조건식 활용 (응용)
const findedIndex3 = arr4.findIndex((item) => item > 1);
console.log(findedIndex3); // 출력: 1 (처음 만족하는 값: 2)

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 인덱스(위치)가 아닌 요소를 그대로 반환
let arr5 = [
  { name: "이정환" },
  { name: "홍길동" },
];
const finded = arr5.find(
  (item) => item.name === "이정환"
);
console.log(finded); // 출력: { name: "이정환" }
