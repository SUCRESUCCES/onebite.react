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
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
