console.log(hoistedVar); // Output: undefined
var hoistedVar = 'This is hoisted';

/** How to work 
var hoistedVar;
console.log(hoistedVar); // Output: undefined
hoistedVar = 'This is hoisted';
*/

console.log(hoistedLet); // ReferenceError: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'This is hoisted';

console.log(hoistedConst); // ReferenceError: Cannot access 'hoistedConst' before initialization
const hoistedConst = 'This is hoisted';

/** How to work 
let hoistedLet;
console.log(hoistedLet); // ReferenceError
hoistedLet = 'This is hoisted';

const hoistedConst;
console.log(hoistedConst); // ReferenceError
hoistedConst = 'This is hoisted';
*/

console.log(greet()); // Output: Hello, world!

function greet() {
  return 'Hello, world!';
}

/** How to work
function greet() {
  return 'Hello, world!';
}
console.log(greet()); // Output: Hello, world!
*/

console.log(greet()); // TypeError: greet is not a function

var greet = function () {
  return 'Hello, world!';
};

/** How to work 
var greet;
console.log(greet()); // TypeError: greet is not a function
greet = function() {
    return 'Hello, world!';
};
*/

console.log(greet()); // ReferenceError: Cannot access 'greet' before initialization

let greet = function () {
  return 'Hello, world!';
};

/** How to work
let greet;
console.log(greet()); // ReferenceError
greet = function() {
    return 'Hello, world!';
};
*/
