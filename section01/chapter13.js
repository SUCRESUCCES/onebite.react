// 콜백함수
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수

function main(value) {
  // console.log(1);
  // console.log(2);
  // value();
  // console.log("end");
}

// 콜백함수는 main함수가 언제든지 원하는 타이밍에 실행 시킬 수 있다.

// function sub() {
//   console.log("i am sub");
// }
// main(sub);

// 함수표현식 응용
main(() => {
  // console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

// function repeatDouble(count) {
//   for (let idx = 1; idx <= count; idx++) {
//     console.log(idx * 2);
//   }
// }

// repeatDouble(5); // 2, 4, 6, 8, 10

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, function (idx) {
  console.log(idx * 3);
});

// 콜백함수를 작성하면 중복 코드를 제거하고 간결히 작성 가능
// 화살표 함수 사용하면 더 간결하게 가능
