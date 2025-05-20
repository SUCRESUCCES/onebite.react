// 배열 메서드 3. 배열 변형

// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "얌", hobby: "독서" },
  { name: "쪼밍", hobby: "독서" },
  { name: "숨니", hobby: "금거래" },
];

const readingPeople = arr1.filter((item) => item.hobby === "독서");

// console.log(readingPeople);

// 검색기능이나 카테고리 필터 기능으로 사용할 수 있음

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

// console.log(mapResult);

// arr1 배열에서 이름을 묶어서 배열로 추출

let names = arr1.map((item) => item.name);
// console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

// console.log(arr3);

// 숫자는 불가 대소비교가 안되고 사전순으로만 정렬되기 때문
// 숫자 비교하려면 콜백함수 넣어야함

let arr4 = [10, 3, 5];

// 오름차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // 양수 반환 : 작은 숫자 먼저 반환됨(오름차순) -> b, a 배치
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1; // 음수 반환 (오름차순 반환) -> a, b 배치
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0; // a, b 자리를 그대로 유지
  }
});

// console.log(arr4);

// 내림차순 정렬
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라
    return 1;
  } else {
    // 두 값의 자리를 바꾸지 마라
    return 0;
  }
});

// console.log(arr4);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// console.log(arr5);
// console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "yam"];
const joined = arr6.join(" "); // separator 구분자 설정하기 ,| 등등..
console.log(joined);
