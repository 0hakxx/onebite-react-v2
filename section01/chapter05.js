// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;   // 양의 무한
let mInf = -Infinity; // -> 음의 무한

let nan = NaN; // 연산이 실패했을 경우의 반환 값 ex. 1 + "hello"
alert(1 * "hello");   // 연산 불가하므로 Nan 경고창

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation; // 문자열 + 문자열

let introduceText = `${myName}은 ${myLocation}에 거주합니다`; // 백틱(`) 사용 시 변수 사용하여 동적으로 사용 가능

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
