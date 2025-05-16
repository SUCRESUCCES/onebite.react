// JavaScript에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다

// Truthy & Falsy
// 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징

// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big Integer 잘안씀

// if (!f4) {
//   console.log("falsy");
// }

// 2. Truty한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; // 배열
let t4 = {}; // 객체
let t5 = () => {}; // 함수

// if (t4) {
//   console.log("Truty");
// }

// 3. 활용 사례

function printName(person) {
  if (!person) {
    // (person === undefined || person === null)
    // undefined와 null 모두 falsy한 값이니가 !연산자 사용
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "쪼얌" };
printName(person);
