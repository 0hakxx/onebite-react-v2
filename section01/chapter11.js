// 함수
let area1 = getArea(10, 20);
alert(area1); // 10 * 20 = 200

let area2 = getArea(30, 20);
alert(area2); // 30 * 20 = 600

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// -> 호이스팅으로 인해 다른 언어와 달리 JS는 함수 구현부가 호출부보다 아래에 있어도 오류 발생하지 않음
// -> 함수 구현부를 최상단으로 끌어올리기 때문임
function getArea(width, height) {
  function another() {
    // 중첩 함수
    alert("another");
  }

  another();
  let area = width * height;

  return area;
}
