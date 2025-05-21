// 비동기 작업 처리하기 2. Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

// Promise
// - 비동기 작업 실행
// - 비동기 작업 상태 관리
// - 비동기 직업 결과 저장
// - 비동기 작업 병렬 실행
// - 비동기 작업 다시 실행
// ...등..

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// then 메서드
// -> 그 후에

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Promise의 Chaining : then과 catch 연달아서 사용하는 문법

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

// Executor 함수에서
// Resolve 호출 : 성공
// Reject 호출 : 프로미스의 비동기 작업 실패
// 둘 다 인수로 프로미스의 결과 값 전달 가능
