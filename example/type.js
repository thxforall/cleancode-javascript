/** Type */
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

/** Undefined & NULL */

console.log(!null);
console.log(!!null);
console.log(null === false);
console.log(!null === true);

let varb = null;
let vara = null;
console.log(typeof vara);
console.log(typeof varb);
console.log(!undefined);
console.log(undefined == null);
console.log(undefined === null);
console.log(!undefined === !null);

/** Reduce eqeq */
console.log('1' == 1);
console.log('1' === 1);

/** Type Casting */
console.log(11 + 'string');
console.log(String(11 + 'string'));
console.log(!!'string');
console.log(Boolean(!!'string'));
console.log(!!'');
console.log(Boolean(!!''));
console.log(parseInt('9.999999', 10));
console.log(Number(parseInt('9.999999', 10)));

/** isNaN */
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.isIeger);
console.log(isNaN(123 + 'test'));
console.log(Number.isNaN(123 + 'test'));
