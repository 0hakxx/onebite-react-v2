// 1. 기본 예제: 두 수를 더해 3초 뒤에 출력하는 함수
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b; // 비동기적으로 계산 수행
    callback(sum);     // 계산 결과를 콜백 함수로 전달
  }, 3000);
}

add(1, 2, (value) => {
  console.log(`더하기 결과 : ${value}`); // 3초 뒤 출력: 3
});

// 2. 비동기 흐름 예제: 음식을 주문하고 처리하는 상황
// orderFood: 주문이 완료될 때까지 3초 후에 음식을 전달하는 함수
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";           // 3초 뒤에 "떡볶이"라는 음식이 준비됨
    callback(food);                      // 준비된 음식을 콜백 함수로 전달
  }, 3000);
}

// cooldownFood: 음식을 식히는 역할 (2초 소요)
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;   // 주어진 음식을 식힌 형태로 만듦
    callback(cooldownedFood);                     // 식힌 음식을 콜백으로 전달
  }, 2000);
}

// freezeFood: 음식을 냉동하는 역할 (1.5초 소요)
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;    // 주어진 음식을 냉동된 형태로 만듦
    callback(freezedFood);                   // 냉동된 음식을 콜백으로 전달
  }, 1500);
}

// [실행] 음식을 주문 → 식히기 → 냉동하기 순서로 비동기 처리 (콜백 지옥의 예시)
console.log("주문 시작!");
orderFood((food) => {
  console.log(food);                          // 출력: "떡볶이" (3초 시점)

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);              // 출력: "식은 떡볶이" (5초 시점)

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);               // 출력: "냉동된 식은 떡볶이" (6.5초 시점)
    });
  });
});

/**
 * [실행 순서 및 시간 흐름]
 * 0초   : "주문 시작!" 출력 및 orderFood 시작
 * 3초   : "떡볶이" 출력 (3000ms 경과) -> cooldownFood 시작
 * 5초   : "식은 떡볶이" 출력 (3000ms + 2000ms 경과) -> freezeFood 시작
 * 6.5초 : "냉동된 식은 떡볶이" 출력 (3000ms + 2000ms + 1500ms 경과)
 */