// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}

funcA();
// console.log(b); // Error -> 지역 스코프 접근

if (true) {
  let c = 1; // if 문일지라도 {} 블록 내이므로 지역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1; // for 문일지라도 {} 블록 내이므로 지역 스코프
}

funcB();
