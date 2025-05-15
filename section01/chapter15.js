// 객체
// 원시타입이 아닌 객체 타입의 자료형
// 여러가지 값을 동시에 저장할 수 있는 자료형

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "얌", // key : value
  age: 8,
  hobby: "애교 부리기",
  job: "마녀 고양이",
  extra: {},
  10: 20,
  "like ming": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"]; // 문자열로 작성해줘야함
// console.log(age);

let property = "hobby";
let hobby = person[property];
// console.log(hobby);

// 동적으로 변화시키면서 꺼내와야 할 때 : 괄호 표기법
// 간결하게 사용할 때 : 점 표기법

// 3.2 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "치킨";

// 3.3 프로퍼티를 수정하는 방법
person.job = "귀염둥이";

// 3.4 프로퍼티를 삭제하는 방법
delete person.favoriteFood;
delete person["job"];

// console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); // true
console.log(result2); // false
