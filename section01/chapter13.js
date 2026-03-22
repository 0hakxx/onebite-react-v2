// 1. 콜백함수 기본 - 함수를 다른 함수한테 전달하기
function main(value) {
  // value는 함수! 받은 함수를 그냥 실행함
  // value() : value 함수 실행 시 (인자 전달 안함)
  value();
}

main(() => {
  // 이 화살표 함수 전체가 main의 value 매개변수로 전달됨
  console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  // count번 반복하면서 callback 함수를 실행
  // 이번엔 idx 값을 callback한테 전달함!
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);      // idx 받음 → 1 2 3 4 5 출력
});

repeat(5, (idx) => {
  console.log(idx * 2);  // idx 받음 → 2 4 6 8 10 출력
});

repeat(5, (idx) => {
  console.log(idx * 3);  // idx 받음 → 3 6 9 12 15 출력
});
