// Destructuring.js
// 확장 표현식
// ES6 버전에서 추가된 object 타입의 사용 방식

console.log('----- ES5 -----');
var x = 0;
var y = 0;
var obj = {x: x, y: y}; // ES5) x: x --> 키이름: 변수명
console.log(obj);

// object 타입 생성 시 대입 연산자 오른쪽에서 바로 키와 값을 설정하여 object 타입에 데이터를 추가하는 것이 가능
var randomKeyString = 'other';
var combined = {};

combined['one' + randomKeyString] = 'some value';
console.log(combined);

console.log('\n----- ES5 -----');
var obj2 = {
  methodA: function () { console.log('A');},
  methodB: function () { return 0;}
};
console.log(obj2);
obj2.methodA();
obj2.methodB();




console.log('\n----- ES6 -----');
var x = x;
var y = y;
// object 생성 시 키값을 설정하지 않으면 변수명이 키값으로 설정됨
var obj = {x, y}; // ES5) x --> 키이름, 변수명
console.log(obj);

var randomKeyString = 'other';
var combined = {['one' + randomKeyString]: 'some value'};
console.log(combined);


console.log('\n----- ES6 -----');

var obj2 = {
  methodA() { console.log('A');},
  methodB() { return 0;}
}
console.log(obj2);
obj2.methodA();
obj2.methodB();



console.log('\n----- 구조분해할당 -----');

console.log('\n----- ES5 -----');
var list = [0, 1];
var item1 = list[0];
var item2 = list[1];
var item3 = list[2] || -1;
console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // -1

// 데이터 스왑시 임시변수(tmp) 필요
var temp = item2;
item2 = item1;
item1 = temp;
console.log(item1); // 1
console.log(item2); // 0

var obj = {
  key1: 'one',
  key2: 'two'
};

var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = key1;
console.log(key1);  // one
console.log(key2);  // two
console.log(key3);  // default key3 value
console.log(newKey1); // one


console.log('\n----- ES6 -----');

var list = [0, 1];
// 대입 연산자 왼쪽에 [] 를 사용하여 그 안에 배열을 쓰듯이 변수명을 입력하면
// 대입연산자 오른쪽의 데이터를 하나씩 꺼내어 내입 연산자 왼쪽의 변수명에 각각 저장됨
var [item1, item2, item3 = 1] = list; // = var [item1, item2, item3 = 1] = [0, 1]
console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // 1

// 확장 표현식을 사용하여 임시 변수 없이 2개의 변ㅅ누의 값을 서로 변경함
[item2, item1] = [item1, item2];
console.log(item1); // 1
console.log(item2); // 0

// 배열의 확장 표현식과 동일하게 object 타입에서도 사용이 가능함
// 대입 연산자 왼쪽에 {} 을 사용하고 변수명을 입력하면, 대입 연산자 오른쪽의 object 타입의 키와 같은 변수명에 데이터를 저장함
// 키 이름 생략 시, 변수명을 키 이름으로 사용하는 법칙 때문임
// : <- 기호를 사용 시 새로운 변수명으로 적용
// = <- 기호를 사용 시 기본값으로 설정
var {key1: newKey1, key2, key3 = 'default key3 value'} = obj; // obj = { key1: 'one', key2: 'two'}
console.log(newKey1); // one
console.log(key2);  // two
console.log(key3);  // default key3 value

var [item, ...otherItems] = [0, 1, 2];
console.log(item);  // 0
console.log(otherItems);  // [1, 2]

var {key1, ...others} = {key1: 'one', key2: 'two'};
console.log(key1);  // one
console.log(others);  // {key2: 'two'}

console.log('------------------- 복습 --------------------');

var x = 10;
var y = 10;
// object 생성 시, 키값을 설정하지 않으면 변수명이 키값으로 설정됨
var obj = {x, y};
console.log(obj); // { x: 10, y: 10 }

// object 타입 생성 시, 대입 연산자 오른쪽에서 바로 키와 값을 설정하여 object 타입에 데이터를 추가하는것이 가능
var randomKeyString = 'other';
var combined = {['one' + randomKeyString] : 'some value'};
console.log(combined);

// 데이터 집어넣을때는 익명함수 필요없이 멤버 메서드 쓰듯이 바로 쓰면 된다.

var obj2 = {
  methodA() {
    console.log('A');
    },
  methodB() {
    return 0;
  }
}
console.log(obj2);  // { methodA: [Function: methodA], methodB: [Function: methodB] }

// 구조분해할당
var list = [0, 1];
// 대입 연산자 왼쪽에 [] 를 사용하여 그 안에 배열을 쓰듯이 변수명을 입력하면
// 대입 연산자 오른쪽의 데이터를 하나씩 꺼내어 대입 연산자 왼쪽의 변수명에 각각 저장됨
var [item1, item2, item3 = 1] = list;
console.log(item1); // 0
console.log(item2); // 1
console.log(item3); // 1 : 대입할 값이 없을때는 배열에서 입력해준 기본값이 들어감

[item2, item1] = [item1, item2];
console.log(item1); // 1
console.log(item2); // 0

// 배열의 확장 표현식과 동일하게 object 타입에서도 사용이 가능함
// 대입 연산자 왼쪽에 {} 를 사용하고 변수명을 입력하면, 대입 연산자 오른쪽의 object 타입의
// 키와 같은 변수명에 데이터를 저장함
// 키 이름 생략 시, 변수명을 키 이름으로 사용하는 법칙 때문임
// : <- 기호를 사용 시 새로운 변수명으로 적용
// = <- 기호 사용 시 기본값으로 설정

var obj = {
  key1: 'one',
  key2: 'two'
};

var {key1: newKey1, key2: newKey2, key3 = 'default key3 value'} = obj;

console.log(newKey1); // one
console.log(newKey2); // two
console.log(key3);  // default key3 value

var [item, ...otherItems] = [0, 1, 2];
console.log(item);  //  0
console.log(otherItems);  // [ 1, 2 ]

var {key1, ...others} = {key1: 'one', key2: 'two'};
console.log(key1);  // one
console.log(others);  // {key2: 'two'}