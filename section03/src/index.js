// const moduleData = require("./math");
// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// 구조분해할당으로 하기 (CJS 모듈 시스템)
// const { add, sub } = require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// ESM
// import mul from "./math.js";
// import { add, sub } from "./math.js";
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
// node.modules의 randomColor라이브러리파일과 package-lock.json이 삭제됐을 경우 오류가 발생함
// package.json에 정보만 있어도 터미널에 npm i || npm install하면 다시 설치됨

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));
