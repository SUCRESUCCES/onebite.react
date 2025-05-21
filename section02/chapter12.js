// 비동기 작업 처리하기 1. 콜백 함수

// function add(a, b, callback) {
//   setTimeout(() => {
//     const sum = a + b;
//     callback(sum);
//   }, 3000);
// }

// add(1, 2, (value) => {
//   console.log(value);
// });

// 비동기 작업을 하는 함수의 결과 값을 이 함수 외부에서 이용하고 싶다면
// 콜백 함수를 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownFood) => {
    console.log(cooldownFood);

    freezeFood(cooldownFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
