// 함수 표현식과 화살표 함수

// 1. 함수 표현식

let varA = funcA;
// console.log(varA);
// varB();

function funcA() {
  console.log("funcA");
}

// 익명함수
let varB = function () {
  console.log("funcB");
};

// 함수표현식은 호이스팅이 되지 않음

// 2. 화살표 함수
let varC = () => {
  return 1;
};

// console.log(varC());

// 한 줄이라면 중괄호와 return 생략 가능
let varD = () => 2;
// console.log(varD());

// 매개변수 필요시
let varE = (value) => value + 1;

// console.log(varE(10)); // 11

// 추가 작업 필요시
let varF = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varF(10));
