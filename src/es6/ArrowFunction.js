// ArrowFunction.js

// 화살표 함수 : ES6 버전부터 사용되는 함수를 선언하는 새로운 방식
// ES5 버전의 익명함수를 사용하여 함수를 생성하는 방식에서 변경되어 function 키워드를 생략하고,
// 매개변수와 코드블럭 사이에 '=>' 기호를 사용하는 방식
// 소스코드가 반환값 한 줄일 경우 코드블럭을 생략할 수 있음
// 매개변수가 1개인 경우, 매개변수의 괄호를 생략할 수 있음
//
// 사용법 1 :
// 변수명 = (매개변수1, 매개변수2, ...) => {
//    실행할 소스코드
//    return 반환값
// }
//
// 사용법 2 : 리턴 키워드, 중괄호 생략
// 변수명 = (매개변수1, 매개변수2, ...) => 반환값;
//
// 사용법 3 :
// 변수명 = 매개변수 => 반환값;
//
// 사용법 4 :
// 변수명 = () => 반환값;


// 기존 함수 선언 방식 1
function es5Func1(a, b) {
  console.log(a + b);
  return a + b;
}

// 기존 함수 선언 방식 2
var es5Func2 = function (a, b) {
  console.log(a + b);
  return a + b;
}

es5Func1(10, 20); // 30
es5Func2(100, 200); // 300
let data = es5Func1(10, 20) // 30
console.log(data);  // 30
data = es5Func2(100, 200); // 300
console.log(data);  // 300


console.log('\n----- es6 방식 -----')
// 화살표 함수 선언
const es6Func1 = (a, b) => {
  console.log(a + b);
  return a + b;
}

data = es6Func1(10, 20);  // 30
console.log(`리턴 받은 값 : ${data}`);  // 30


// 생략 방법 1
// 생략 전
const es6Func22 = (a, b) => {
  return a + b
}
// --> 생략 후
const es6Func2 = (a, b) =>  a + b;
data = es6Func2(100, 200);
console.log(`리턴 받은 값 : ${data}`); // 300


const es6Func3 = (a, b) => console.log(a + b);
es6Func3(10, 20);


// 매개변수가 1개일때 : 소괄호도 생략가능
const es6Func4 = (a) => a * 2;
data = es6Func4(10);
console.log(`리턴 받은 값 : ${data}`);

const es6Func5 = a => a * 2;
data = es6Func5(10);
console.log(`리턴 받은 값 : ${data}`);


// 매개변수가 없을때 : = => 와 같이 아예 생략은 안되고 = () => 와 같이 사용
const es6Func6 = () => console.log('esFunc5() 실행');
es6Func6();