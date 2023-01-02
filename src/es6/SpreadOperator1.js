// SpreadOperator1.js

// 전개 연산자 ( ... )
// 나열형 자료를 추출하거나 연결할 때 사용
// 배열, 객체, 변수명 앞에 ... 기호를 사용하여 사용
// 배열 객체 함 수 인자 표현식( [ ] ) 안에서만 동작함

console.log('----- ES5 -----');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
// 배열의 각 요소를 하나씩 추출하여 새로운 배열에 대입
console.log(combined);  // [ 'one', 'two', 'three', 'four' ]

// array1 배열에 concat으로 array2 배열 붙이기
var combined = array1.concat(array2);
console.log(combined);  // [ 'one', 'two', 'three', 'four' ]

// 빈 배열에 concat 으로 배열 2개 붙이기
var combined = [].concat(array1, array2);
console.log(combined);  // [ 'one', 'two', 'three', 'four' ]

console.log(array1);  // [ 'one', 'two' ]
var first = array1[0];
var second = array1[1];
// array1의 2번 index의 값이 없으면 기본적으로 false가 뜨지만 || 연산자를 넣어서 기본값 설정을 해주면 false일때 empty가 출력됨
var three = array1[2] || 'empty';
console.log(first);   // one
console.log(second);  // two
console.log(three);   // empty

console.log('----- ES6 -----');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

// array1이 가진 모든것, array2가 가진 모든것 을 집어넣어서 하나의 배열로 생성
var combined = [...array1, ...array2];
console.log(combined); // [ 'one', 'two', 'three', 'four' ]

// array1의 첫번째, 두번째, 세번째 요소가 각각 first, second, three 라는 변수에 들어감
// 하지만 array1에는 세번째 요소가 없으므로 '= empty' 로 기본값 설정해준 empty 가 들어감
// ...others는 남아있는 데이터 모두를 의미하지만 현재 배열에서는 남은것이 없으므로 빈 배열이 others라는 변수에 들어감
var [first, second, three = 'empty', ...others] =array1;
console.log(first); // one
console.log(second);  // two
console.log(three); // empty
console.log(others);  // []

// 잘못 사용한 예
// var wrongArr = ...array1; <- 대괄호( [] ) 안에서만 전개연산자 사용할 수 있음!

// 전개연산자를 이용한 데이터 스와핑 간략화
var [first, second] = [second, first];

// 데이터 스와핑의 기존 방식(매우 번거로움!)
var first = 10;
var second = 20;
var tmp = 0;

tmp = first;
first = second;
second = tmp;

console.log('-----------------------연습------------------------');

var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [...array1, ...array2];
console.log(combined);  // [ 'one', 'two', 'three', 'four' ]

var [first, second, three = 'empty', ...others] = array1;
console.log(first); // one
console.log(second);  // two
console.log(three); // empty
console.log(others);  // []

// 전개연산자는 대괄호 안에서만 사용할 수 있음!

// 전개연산자를 이용한 스와핑 간략화

var [first, second] = [second, first];
console.log(first); // two
console.log(second);  // one
console.log(three); // empty
console.log(others);  // []

