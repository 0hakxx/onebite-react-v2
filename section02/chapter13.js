/**
 * [앞의 chapter12.js 복습 및 확장]
 * ❌ 콜백 함수의 단점 (Callback Hell):
 * 1. 멸치 떼 같은 들여쓰기: 비동기 작업이 추가될수록 코드가 오른쪽으로 밀려남
 * 2. 에러 처리의 어려움: 각 콜백마다 에러를 확인하고 전파해야 하므로 코드가 지저분해짐.
 * 3. 비즈니스 로직 파악 불가: "주문->식히기->냉동" 흐름보다 복잡한 구조가 먼저 보임.
 */

// --- 1. Promise의 기초 상태(State) 이해하기 ---

// 예제 1: resolve/reject를 호출하지 않으면 영원히 대기(Pending)
const promise1 = new Promise(() => {
  setTimeout(() => { console.log("예제1: hi"); }, 2000);
});
console.log("예제1 초기상태:", promise1); // Pending, Result: undefined

// 예제 2: 성공(resolve) 호출 시 'Fulfilled' 상태로 변경 (전달값 없음)
const promise2 = new Promise((resolve) => {
  setTimeout(() => { resolve(); }, 2000);
});

// 예제 3: 성공(resolve) 시 결과값("hi") 전달
const promise3 = new Promise((resolve) => {
  setTimeout(() => { resolve("hi"); }, 2000);
});

// 예제 4: 실패(reject) 호출 시 'Rejected' 상태로 변경
const promise4 = new Promise((_, reject) => {
  setTimeout(() => { reject("왜 실패했는지 이유..."); }, 2000);
});

// 3초 뒤 상태 확인 (비동기 작업 완료 후)
setTimeout(() => {
  console.log("예제2 상태:", promise2); // Fulfilled, undefined
  console.log("예제3 상태:", promise3); // Fulfilled, "hi"
  console.log("예제4 상태:", promise4); // Rejected, "왜 실패했는지 이유..."
}, 3000);


// --- 2. 콜백 지옥을 해결하는 Promise 체이닝 (Solution) ---

/**
 * ✅ Promise의 장점:
 * 1. 비동기 작업을 수직으로 나열하여 가독성을 높임.
 * 2. .then() 체이닝으로 데이터를 부드럽게 넘김.
 * 3. .catch() 하나로 에러를 통합 관리함.
 */

function add10(num) {
  // return new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        console.log(`[계산 중...] ${num} + 10`);
        resolve(num + 10);
      } else {
        reject("입력값이 숫자가 아닙니다!");
      }
    }, 2000);
  });
}

// chapter12.js의 중첩 작업을 Promise로 깔끔하게 펼치기
add10(0)
    .then((result) => {
      console.log("1차 결과:", result); // 10
      return add10(result); // 다음 작업을 위해 Promise 반환
    })
    .then((result) => {
      console.log("2차 결과:", result); // 20
      return add10(undefined);  // 의도적으로 에러 발생 테스트 (undefined 전달)
    })
    .then((result) => {
      console.log("3차 결과:", result); // 실행되지 않음
    })
    .catch((error) => { // catch
      // 위 체인 어디서든 발생한 에러를 여기서 잡음
      console.error("❌ 작업 중단:", error);
    });

/**
 * [전체 실행 흐름 요약]
 * 0초 : 시작 및 상태 예제들 실행
 * 2초 : add10(0) 성공 -> "10" 출력 및 다음 연산
 * 4초 : add10(10) 성공 -> "20" 출력 및 다음 연산(undefined)
 * 6초 : add10(undefined) 실패 -> catch 블록 실행 ("입력값이 숫자가 아닙니다!")
 */