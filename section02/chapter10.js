// 1. Date 객체 생성 (2가지 방법)
// 현재 시간 기준으로 생성
let date1 = new Date();
// 직접 날짜 지정 (월은 0부터 시작)
// 1 = 2월을 의미함
let date2 = new Date(1997, 1, 7, 23, 59, 59);
// → 1997년 2월 7일 23:59:59

// 2. 타임스탬프 (Timestamp)
// 1970-01-01 00:00:00 기준으로부터 지난 시간(ms)
let ts1 = date1.getTime(); // 숫자(ms)로 변환
let date4 = new Date(ts1); // 다시 Date 객체로 변환

// 3. 날짜/시간 요소 추출
let year = date1.getFullYear(); // 연도 (예: 2026)
let month = date1.getMonth() + 1; // 월 (0~11이라 +1 필요 ⚠️)
let date = date1.getDate(); // 일
let hour = date1.getHours(); // 시
let minute = date1.getMinutes(); // 분
let seconds = date1.getSeconds(); // 초

// 4. 날짜/시간 수정
// 기존 date1 값을 직접 변경함 (원본 바뀜 ⚠️)
date1.setFullYear(2023);
date1.setMonth(2); // 3월 (0부터 시작이라 ⚠️)
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

// 5. 다양한 형식으로 출력
// 사람이 읽기 쉬운 날짜 문자열
console.log(date1.toDateString());
// "Thu Mar 30 2023"

// 지역 기준 날짜 + 시간 (한국 기준이면 한국 형식)
console.log(date1.toLocaleString());
// 예: "2023. 3. 30. 오후 11:59:59"