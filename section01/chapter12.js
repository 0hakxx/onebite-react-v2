// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}
let varA = funcA;   // 함수도 변수에 담을 수 있다.
alert(varA);        // 변수에 담긴 함수 코드(정의)가 출력된다.
varA();             // 변수 이름으로 funcA 함수를 호출할 수 있다.

let varB = function funcB () { // 함수를 만들면서 바로 변수에 넣을 수 있다.
  console.log("funcB");
  // 이 함수 안에서는 funcB() 이름으로 자기 자신을 호출할 수 있다.
};
varB();
// funcB(); // 바깥(외부)에서는 funcB라는 이름이 존재하지 않으므로 직접 호출할 수 없다.

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

alert(varC(10));
