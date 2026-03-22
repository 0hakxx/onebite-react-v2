// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 반환값: 추가된 후의 배열 길이
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// arr1 = [1,2,3,4,5,6,7]
// newLength = 7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거
// 반환값: 제거된 요소
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// arr2 = [1,2]
// poppedItem = 3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거
// 반환값 : 제거된 요소
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// arr3 = [2,3]
// shiftedItem = 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
// 반환값: 추가된 후의 배열 길이
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// arr4 = [0,1,2,3]
// newLength2 = 4

// 5. slice
// 배열을 잘라서 새로운 배열 반환 (원본 유지)
// slice(start, end) → start부터 end 전까지
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
// [3,4,5] (index 2 ~ 4)
let sliced2 = arr5.slice(2);
// [3,4,5] (index 2부터 끝까지)
let sliced3 = arr5.slice(-3);
// [3,4,5] (뒤에서 3개)

// 6. concat
// 두 배열을 이어붙여 새로운 배열 생성 (원본 유지)
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
// [1,2,3,4]
console.log(concatedArr);
