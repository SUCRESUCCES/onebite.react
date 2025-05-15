// 함수선언

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// greeting(); // 함수호출( 꼭 ()를 붙여서 호출)
// console.log("호출 후");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// getArea();

// 값을 입력해 받아주기

let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
// (선언문을 호출문보다 아래에 두어도
//  내부적으로 호이스팅 되어져 실행하기 떄문에 오류가 발생하지 않음)

function getArea(width, height) {
  // 매개변수

  // 중첩 함수 : 함수 내부에 다른 함수 만들기 가능
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area; // 반환값
  console.log("hello"); // return을 반환하고 함수가 종료됨. 그래서 이 값은 나오지 않음
}
