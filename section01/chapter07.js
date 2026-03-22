// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
++num8;        // 11 (전위 연산)
alert(num8++); // 11 (후위 연산) +1 은 다음 Line에서 적용
alert(num8);   // 12

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// 6. 비교 연산자
// == 을 사용 시 값의 자료형까지는 비교 안함
// === 을 사용 시 값의 자료형까지 비교 함
let comp1 = 1 === "1"; // false
alert(comp1);
let comp2 = 1 == "1"; // true
alert(comp2);
let comp3 = 1 !== 2;

let comp4 = 2 > 1;
let comp5 = 2 < 1;

let comp6 = 2 >= 2;
let comp7 = 2 <= 2;
