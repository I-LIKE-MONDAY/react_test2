// ArrayMethod.js
// ES6에서 배열 관련 함수가 추가됨
// forEach() 와 map() 은 반환값이 있냐 없냐의 차이

// forEach() : 지정한 배열의 요소에 callBack으로 지정한 함수의 내용을 실햄하는 함수, 반환값이 없음
// 사용법 :
// 배열명.forEach(콜백함수(현재값이 저장될 변수, 현재 index, 현재 배열 내용) {
//    실행할 소스코드
// })



const fruits = ['사과', '배', '복숭아'];
console.log('원본 배열 : ' + fruits); // 사과,배,복숭아

// 기존 방식
console.log('\n----- for문 사용 시 -----');
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
  // 사과
  // 배
  // 복숭아
}

console.log('\n----- for ~ in 문 사용 시 -----');
for (const item in fruits) {
  // 값이 아니라 key 를 넣기때문에 item을 넣어줘야함
  console.log(fruits[item])
  // 사과
  // 배
  // 복숭아
}


// forEach() 사용 방식
console.log('\n----- forEach 문 사용 시 -----');
fruits.forEach(function (item) {
  console.log(item);
  // 사과
  // 배
  // 복숭아
})


console.log('\n----- forEach 문 매개변수 여러개 -----');
fruits.forEach(function (item, index){
  console.log(`index : ${index}, value: ${item}`);
  // index : 0, value: 사과
  // index : 1, value: 배
  // index : 2, value: 복숭아
})


// 현재 배열 내용 값 넣기 예시
fruits.forEach(function (item, index, arrName) {
  console.log(`current array : ${arrName}, index : ${index}, value : ${item}`);
  // current array : 사과,배,복숭아, index : 0, value : 사과
  // current array : 사과,배,복숭아, index : 1, value : 배
  // current array : 사과,배,복숭아, index : 2, value : 복숭아
});


// map() : forEach 와 같이 지정한 배열의 요소에 callBack으로 지정한 함수의 내용을 실행하고 그 결과값을 배열로 반환하는 함수
// 사용법 :
// 배열명.map(콜백함수(현재값이 저장될 변수, 현재 index, 현재 배열 내용) {
//    실행할 소스코드
//    return 반환값
// })

console.log('\n----- map 사용 -----\n');
const numbers = [4, 9, 16, 25];
console.log(`원본 배열 : `);
console.log(numbers); // [ 4, 9, 16, 25 ]

let data = numbers.map(function (item) {
  console.log(`현재 값 : ${item}`);  // 4 9 16 25
  return item * 2;
});

console.log(`map 사용 후 데이터 :`);
console.log(data);  //[ 8, 18, 32, 50 ]


console.log('\n----- map() 에서 매개변수 여러개 -----\n');

data = numbers.map(function (item, index) {
  console.log(`index : ${index}, value : ${item}`);
  // index : 0, value : 4
  // index : 1, value : 9
  // index : 2, value : 16
  // index : 3, value : 25

  return item * 2;
});
console.log('map 사용 후 데이터 : ');
console.log(data);  // [ 8, 18, 32, 50 ]

data = numbers.map(function (item, index, current) {
  console.log(`current array : ${current}, index : ${index}, value : ${item}`);
  // current array : 4,9,16,25, index : 0, value : 4
  // current array : 4,9,16,25, index : 1, value : 9
  // current array : 4,9,16,25, index : 2, value : 16
  // current array : 4,9,16,25, index : 3, value : 25

  return item * 2;
});
console.log('map 사용 후 데이터 : ');
console.log(data);  // [ 8, 18, 32, 50 ]


