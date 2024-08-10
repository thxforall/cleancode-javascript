function myF(x, y) {
  this.x = x;
  this.y = y;
}
class MyC {}
const str = new String('hello world');

// primitive & reference
console.log(typeof 'string');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof new Date());
console.log(typeof myF);
console.log(typeof MyC);
console.log(typeof str);
console.log(typeof null); // object... bug

// 동적으로 변하는 언어이기 때문에 타입도 동적이다.
const f = new myF(1, 3);
const p = {
  x: 3,
  y: 5,
};

console.log(f instanceof myF);
console.log(p instanceof myF);
console.log(myF instanceof Function);
console.log(myF instanceof Object);
console.log([1, 2, 3] instanceof Array);

console.log(Object.prototype.toString.call(new String('hello')));
