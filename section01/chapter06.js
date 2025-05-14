// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // num이 String으로 형변환
// console.log(result); // 1020
// console.log(typeof result); // string

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시

// -> 문자열 -> 숫자 // Number
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1); // 20
// console.log(typeof strToNum1); // number

let str2 = "10개";
let strToNum2 = Number(str2);
// console.log(strToNum2); // Nan 수치연산 실패

// parseInt : 문자열이 있어도 가능 근데 숫자가 앞에 있어야함
let str3 = "10개";
let strToNum3 = parseInt(str2);
// console.log(strToNum3); // 10

// -> 숫자 -> 문자열 : String
let num1 = 20;
let numToStr1 = String(num1);
// console.log(numToStr1 + " 입니다"); // 20입니다
