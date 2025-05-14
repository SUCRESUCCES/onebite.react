// 1. 변수
let age;
// console.log(age); // undefined

age = 30;
// console.log(age); // 30

// 2. 상수 : 변하지 않는 값, 선언과 동시에 초기화 필수
const birth = "1997.01.07";
birth = "123"; // Assignment to constant variable.

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $name;
// let 2name; 불가

// 3-3. 예약어를 사용할 수 없다.
// let let // let은 예약어라 사용 불가능

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
// 누가 봐도 알기 쉽게 변수 명명
