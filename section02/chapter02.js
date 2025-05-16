// 단락평가

// function returnFalse() {
//   console.log("Fasle 함수");
//   return false;
// }

// function returnTrue() {
//   console.log("True 함수");
//   return true;
// }

// console.log(returnFalse() && returnTrue()); // False 함수, false
// True 함수가 아예 출력이 안됨 (단락평가 실행됨)

// console.log(returnTrue() && returnFalse());
// True 함수가 출력됨 (첫번째 함수가 True이기 때문에 단락평가가 실행되지않음)

// console.log(returnTrue() || returnFalse());
// // False 함수 출력되지 않음 (단락평가 실행됨)

//////////////////////////////////////////////////////////////////

// function returnFalse() {
//   console.log("Fasle 함수");
//   return undefined; // Falsy한 값
// }

// function returnTrue() {
//   console.log("True 함수");
//   return 10; // Truty한 값
// }

// console.log(returnFalse() && returnTrue());

//////////////////////////////////////////////////////////////////

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); // undefined
printName({ name: "쪼얌" });

// Truty || Truty : 앞의 Truty값 반환
// Truty && Truty : 뒤의 Truty값 반환
