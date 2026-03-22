// 1. 단락 평가 개념 확인용 함수
function returnFalse() {
  console.log("returnFalse 실행");
  return false;
}

function returnTrue() {
  console.log("returnTrue 실행");
  return true;
}

// 2. && (AND) 동작 확인
// 왼쪽이 false → 뒤 실행 안함
console.log(returnFalse() && returnTrue());
// 뒤 returnTrue는 아예 실행 안됨
// 결과: false

// 왼쪽이 true → 뒤 실행
console.log(returnTrue() && returnFalse());
// 실행:
// returnTrue 실행 → true
// returnFalse 실행 → false
// 결과: false


// 3. || (OR) 동작 확인
// 왼쪽이 true → 뒤 실행 안함
console.log(returnTrue() || returnFalse());
// 뒤 returnFalse 실행 안됨
// 결과: true

// 왼쪽이 false → 뒤 실행
console.log(returnFalse() || returnTrue());
// 실행:
// returnFalse 실행 → false
// returnTrue 실행 → true
// 결과: true

// 4. 실전 활용
function printName(person) {
  // ✔ person이 있을 때만 name 접근
  // ✔ person이 없으면 person.name 실행 안 해서 undefined/null 접근 에러 방지
  const name = person && person.name;
  // ✔ name이 없으면 기본값 사용
  console.log(name || "person의 값이 없음");
}

// 5. 실행 테스트
// case 1: person 없음
printName();
// 실행:
// person && person.name → undefined → 멈춤
// name || "person의 값이 없음"
// 출력: person의 값이 없음

// case 2: 정상 값
printName({ name: "이정환" });
// 실행:
// person && person.name → "이정환"
// "이정환" || 기본값
// 출력: 이정환