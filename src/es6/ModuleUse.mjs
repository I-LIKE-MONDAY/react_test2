// ModuleUse.mjs

import {name, job, gender, getInfo} from "./MyMod1.mjs";
import {num1, num2, sum} from "./MyMod2.mjs";
import sub from "./MyMod2.mjs";

console.log(name);  // 아이유
console.log(gender);  // 여성
console.log(job); // 가수
getInfo();  // 이름 : 아이유, 성별 : 여성, 직업 : 가수

console.log(`첫번째 숫자 : ${num1} + 두번째 숫자 : ${num2}의 값 : ${sum()}`); // 첫번째 숫자 : 10 + 두번째 숫자 : 20의 값 : 30
console.log(`sub() 실행 : ${sub()}`); // -10