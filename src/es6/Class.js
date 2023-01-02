// Class.js
// ES6 부터는 자바스크립트에서도 Class 키워드를 지원함
// constructor(매개변수) : 자바스크립트 클래스의 생성자, 자바스크립트의 생성자는 이름을 지정할 수 없음
// extends : 자바스크립트의 클래스도 상속을 지원함

// 클래스 선언
class Shape {

  // 정적 멤버, 클래스명.정적멤버명 으로 사용
  static create(x, y) {
    return new Shape(x, y);
  }

  // 멤버변수 선언 - let, const 등 안붙여도 되는 이유 : 여기서 name 은 '키' 이다!
  name = 'Shape';

  // 생성자, 이름은 constructor 로 고정임
  // 생성자에서 this.변수명 을 입력 시, 멤버 변수가 선언됨
  constructor(x, y) { // 데이터타입은 안써도 자동으로 인식함(자바스크립트의 장점)
    this.move(x, y);  // this : 객체 자기 자신을 의미함
  }

  move(x, y) {  // 키 이름 안써도 됨 사실은 move(x: x, y: y)
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

var s = new Shape(10, 20);
s.area();
s.move(100, 200);
console.log(s.name);
console.log(s.x); // 100
console.log(s.y); // 200

var s1 = Shape.create(0, 0);
s1.area();
s1.move(10, 20);
console.log(s1.name);
console.log(s1.x);  // 10
console.log(s1.y);  // 20

// 상속(extends)
class Circle extends Shape {

  constructor(x, y, radius) {
    // 부모
    super(x, y);
    // 멤버변수 생성
    this.radius = radius;
  }

  area() {
    if (this.radius === 0) {
      return super.area();
    }
    return this.radius * this.radius;  // 10 * 10
  }
}

var c = new Circle(0, 0, 10);
console.log(c.area());  // 100

console.log('--------------------- 복습 ----------------------');

// 클래스 선언
class Shape2 {
  // 정적 멤버, 클래스명.정적명버명 으로 사용
  static create(x, y) {
    return new Shape(x, y);
  }

  // 멤버변수 선언 - let, const 등 안붙여도 되는 이유 : 여기서 name 은 '키'이다!
  name = 'Shape';

  // 생성자, 이름은 constructor 로 고정된다.
  // 생성자에서 this.변수명을 입력 시, 멤버 변수가 선언됨.
  constructor(x, y) { // 데이터 타입은 안써도 자동으로 인식함(자바스크립트의 장점!)
    this.move(x, y);  // this : 객체 자기 자신을 의미함
  }

  move(x, y) {  // 키 이름 안써도 됨. 사실은 move(x: x, y: y)
    this.x = x;
    this.y = y;
  }

  area() {
    return 0;
  }
}

var s = new Shape2(20, 30);
s.area();
s.move(200, 300);
console.log(s.name);  // 'Shape'
console.log(s.x); // 200  : this.x 라는 말은 현재 클래스의 x 값을 의미
console.log(s.y); // 300  : this.y 라는 말은 현재 클래스의 y 값을 의미



