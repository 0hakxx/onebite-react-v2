// 5가지 배열 변형 메서드
// 1. filter
// 조건을 만족하는 요소들만 "골라서" 새로운 배열 반환 (원본 유지)
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter(
  (item) => item.hobby === "테니스"
);
// tennisPeople = [
//   { name: "이정환", hobby: "테니스" },
//   { name: "김효빈", hobby: "테니스" }
// ]


// 2. map
// 모든 요소를 변형해서 "새로운 배열" 반환 (원본 유지)
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
// mapResult1 = [2, 4, 6]

// 특정 값만 추출할 때도 사용
let names = arr1.map((item) => item.name);
// names = ["이정환", "김효빈", "홍길동"]

// 3. sort
// 배열을 정렬 (⚠️ 원본 변경됨)
// 문자열은 기본적으로 "사전순(유니코드 기준)"으로 정렬됨
let arr4 = ["a", "c", "b"];
arr4.sort();
// arr4 = ["a", "b", "c"]

// 숫자는 기본 정렬이 문자열 기준이라 직접 비교 필요
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    return -1; // a를 앞으로 (내림차순)
  } else if (a < b) {
    return 1; // b를 앞으로
  } else {
    return 0;
  }
});
// arr3 = [10, 5, 3]

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 "새로운 배열" 반환 (원본 유지)
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();
// sorted = ["a", "b", "c"]
// arr5 = ["c", "a", "b"] (변경 없음)

// 5. join
// 배열을 하나의 문자열로 합침
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");
// "hi im winterlood"
console.log(joined);