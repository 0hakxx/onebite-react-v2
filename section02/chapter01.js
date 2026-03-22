// 1. Falsy한 값
// -> 7가지
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;
console.log("=== Falsy 예시 ===");
if (undefined)  console.log("실행 안됨");
if (null)       console.log("실행 안됨");
if (0)          console.log("실행 안됨");
if ("")         console.log("실행 안됨");
if (NaN)        console.log("실행 안됨");

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};
console.log("=== Truthy 예시 ===");
if ("hello")    console.log("실행됨");
if (123)        console.log("실행됨");
if ([])         console.log("실행됨");
if ({})         console.log("실행됨");

// 3. 활용 사례
function printName(person) {
  if (!person) { // Falsy 체크 (undefined, null 방어)
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);     // "이정환"
printName();           // "person의 값이 없음"
printName(null); // "person의 값이 없음"
