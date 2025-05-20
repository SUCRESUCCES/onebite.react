// 배열 메서드 2. 순회와 탐색

// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubleedArr = [];

arr1.forEach((item) => {
  doubleedArr.push(item * 2);
});

// console.log(doubleedArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);

// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);

let objectArr = [{ name: "얌" }, { name: "쪼밍" }];

// console.log(objectArr.indexOf({ name: "얌" })); // -1 출력
// indexOf는 특정 값을 배열에서 찾을 때 무조건 얕은 비교
// 객체값 찾지 못함

// console.log(objectArr.findIndex((item) => item.name === "얌")); // 0 출력
// 콜백 함수를 이용해 특정 프로퍼티의 값을 기준으로 비교시킬 수 있어
// 객체도 조건식을 통해 쉽게 찾아낼 수 있음

// console.log(index);

// 같은 값이 여러 개일 경우 첫번째 값 반환
// 존재하지 않는 값은 -1 반환

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];

// const findedIndex = arr4.findIndex((item) => {
//   if (item % 2 !== 0) return true;
// });
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0);

const findedIndex = arr4.findIndex((item) => item === 999);
// 배열에 존재하지 않는 값 : -1 반환

// console.log(findedIndex);

// 단순한 원시 타입의 값을 찾을 때 : indexOf
// 복잡한 객체 타입의 값을 찾을 때 : findIndex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "얌" }, { name: "숨니" }];

const finded = arr5.find((item) => item.name === "얌");

console.log(finded); // 요소 반환O, 인덱스 반환 X
