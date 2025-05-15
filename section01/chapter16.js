// 객체2

// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "얌",
  color: "orange",
};

animal.age = 8; // 추가
animal.type = "천사고양이"; // 수정
delete animal.color; // 삭제

// console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "밍",
  // 메서드 선언
  saytHi() {
    console.log("안녕!");
  },
};

person.saytHi();
person["saytHi"]();
