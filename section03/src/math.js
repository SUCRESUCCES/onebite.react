// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// CJS(Common JS 모듈 시스템)
// module.exports = {
//   add, // 이름이 같으면 생략가능
//   sub: sub,
// };

// ESM(ES 모듈 시스템)
// export { add, sub }; // 위에 함수 앞에 작성해줘도 됨

export default function multiply(a, b) {
  return a * b;
}
