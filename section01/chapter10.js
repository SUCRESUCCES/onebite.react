// 반복문
// for (초기식; 조건식; 증감식) {}

for (let idx = 1; idx < 10; idx++) {
  // 반복의 특정 회차를 건너뛰는 방법 : 조건문과 continue
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);

  // 중간에 강제로 종료하는 방법 : 조건문과 break
  if (idx >= 5) {
    break;
  }
}
