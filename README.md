# cleancode-javascript

cleancode-javascript-udemy

---

#### List

1. [What is JavaScript?](#what-is-javascript)
2. [Variables](#variables)

---

## What is JavaScript?

#### Thinking about clean code

- Clean Code for JavaScript[https://github.com/ryanmcdermott/clean-code-javascript]
- Is the Clean Code Book absolute?[https://www.youtube.com/watch?v=th7n1rmlO4I]
- JavaScript Style Guide
  - AirBnB[https://github.com/airbnb/javascript]
  - Google[https://google.github.io/styleguide/jsguide.html]
  - ECMA[https://ecma-international.org/]
  - Prettier[https://prettier.io/]
  - ESLint[https://eslint.org/]

#### JavaScript is 'Monkey patch'

> A monkey patch is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program)

Monkey Patching Example
// Original function in a library
function greet() {
console.log('Hello, world!');
}

// Monkey patching the function
greet = function() {
console.log('Hello, clean code!');
};

// Calling the patched function
greet(); // Output: Hello, clean code!

> Clean Code Alternative: Instead of monkey patching, create a new function or use inheritance to extend functionality. This maintains the original behavior and adds new features in a clean way.

// Original function in a library
function greet() {
console.log('Hello, world!');
}

// Extending functionality without monkey patching
function greetWithCleanCode() {
greet();
console.log('Hello, clean code!');
}

// Calling the new function
greetWithCleanCode();
// Output:
// Hello, world!
// Hello, clean code!

#### What are the anti-patterns?

> [Anti-Patterns Examples](anti-patterns.md)
> Anti-patterns are common responses to recurring problems that are usually ineffective and counterproductive. Learning to recognize and avoid them is crucial for writing clean code.

---

## Variables

#### Don't use 'var'

> Using let and const instead of var helps avoid issues with scope and hoisting.

  // Bad
  var count = 1;

  // Good
  let count = 1;
  const MAX_COUNT = 10;

#### Scope

> Understanding variable scope is essential for writing predictable and bug-free code.

  function example() {
  let localVariable = 'I am local';
  if (true) {
  let blockScoped = 'I am block scoped';
  console.log(blockScoped); // Output: I am block scoped
  }
  console.log(localVariable); // Output: I am local
  // console.log(blockScoped); // Error: blockScoped is not defined
  }

  example();

#### Global Scope

> Minimize the use of global variables to avoid conflicts and unexpected behavior.

  // Bad: Global variable
  var globalCount = 0;

  // Good: Encapsulated variable
  function incrementCount() {
  let count = 0;
  count++;
  return count;
  }

  incrementCount(); // 1
  incrementCount(); // 1 (no conflict with previous call)

#### Temporary Variables

> Use descriptive names for temporary variables and avoid unnecessary ones.

  // Bad: Global variable
  var globalCount = 0;

  // Good: Encapsulated variable
  function incrementCount() {
      let count = 0;
      count++;
      return count;
  }

  incrementCount(); // 1
  incrementCount(); // 1 (no conflict with previous call)

#### Hoisting
> Hoisting is JavaScript’s behavior of moving declarations to the top of their scope. Understanding hoisting helps prevent bugs.

  // Bad
  console.log(hoistedVar); // Output: undefined
  var hoistedVar = 'This is hoisted';

  // Good
  let notHoistedVar;
  console.log(notHoistedVar); // Output: undefined
  notHoistedVar = 'This is not hoisted';

---

##
