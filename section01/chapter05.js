// 1. Number Type

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); // 모듈러

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

// console.log(1 * "hello"); // NaN : 불가능한 수치연산

// 2. String Type
let myName = "밍";
let myLocation = "파주";
let introudce = myName + myLocation;

// ` 템플릿 리터럴 문법 : 중괄호를 통해서 변수의 값을 동적으로 문자열에 포함시킬 수 있다.
let introudceText = `${myName}은 ${myLocation}에 거주합니다`;
// console.log(introudceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type : 변수 초기화 되지 않음, 존재X
let none;
console.log(none);
