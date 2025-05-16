// Spread 연산자와 Rest 매개변수

// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

// console.log(obj2);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one, two, ...rest) {
  // 추가로 매개변수 선언할 수 없음, ...rest(rest매개변수)가 마지막에 와야함
  console.log(rest);
}

funcB(...arr1);

// rest가 항상 마지막에 오는 이유 : 남을 걸 몽땅 담아야하기 때문에?
