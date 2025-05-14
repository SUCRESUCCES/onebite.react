// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
// console.log(num6); // 21
let num7 = (1 + 2) * 10;
// console.log(num7); // 30

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 20; // num8 = num8 + 20;
// console.log(num8); // 30
num8 -= 20;
// console.log(num8); // 10
num8 *= 20;
num8 /= 20;
num8 %= 20;

// 4. 증감 연산자
let num9 = 10;
++num9;
num9++;
// console.log(num9++); // 10 후위 연산
// console.log(num9); // 11
// console.log(++num9); // 12 전위 연산

// 5. 논리 연산자
let or = true || false; //true

let and = true && false; //false

let not = !true; // false

// console.log(or, and, not);

// 6. 비교 연산자
let comp1 = 1 === 2; // === 동등비교연산자 : 자료형까지 비교
let comp2 = 1 !== 2;
// console.log(comp1, comp2); // false, true

let comp3 = 2 > 1; // true
let comp4 = 2 < 1; // false
// console.log(comp3, comp4);

let comp5 = 2 >= 2; // true
let comp6 = 2 <= 2; // true
// console.log(comp5, comp6);
