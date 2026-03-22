// 1. 변수
let age;

alert(age); // Undefined 경고창
age = 30;
alert(age); // 30 경고창

// 2. 상수
// 상수는 값이 변하지 못 함 변할 경우 에러 발생
// 또한 초기화 필수
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.
// let let;

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
