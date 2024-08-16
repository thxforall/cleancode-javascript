## If

---

## List

1. [Value, Expression, Statement](#value-expression-statement)
2. [Ternary operator](#ternary-operator)
3. [Truthy & Falsy](#truthy--falsy)
4. [Short-Circuit Evaluation](#short-circuit-evaluation)
5. [Else If](#else-if)
6. [Else](#else)
7. [Negative Condition](#negative-condition)
8. [Default Case](#default-case)
9. [Explicit Operator](#explicit-operator)
10. [Nullish Coalescing Operator](#nullish-coalescing-operator)
11. [De Morgan’s Laws](#de-morgans-laws)

---

#### Value, Expression, Statement

> JavaScript syntax plays a crucial role in ensuring that your code is clear, maintainable, and error-free. This becomes even more evident when working with JSX in React, which is ultimately transformed into JavaScript code. By understanding this transformation process, you can appreciate why adhering to proper syntax is so important.

1. **JSX Ultimately Transforms into JavaScript**

> JSX is an extension of JavaScript that allows you to write HTML-like syntax within your JavaScript code, particularly in React. However, since browsers cannot directly interpret JSX, it must be transformed into JavaScript code that the browser can execute. This transformation is handled by tools like Babel. Understanding this process highlights the importance of JavaScript syntax because JSX is essentially JavaScript under the hood.

```jsx
// JSX code
const element = <h1>Hello, world!</h1>;

// Transformed JavaScript code
const element = React.createElement('h1', null, 'Hello, world!');
```

2. **Distinguishing Between Expressions and Statements**

> In JSX, you can only use JavaScript expressions, not statements. Expressions evaluate to a single value, whereas statements perform actions and control the flow of the program.

**Important Points:**

- **Conditional Rendering:** Use ternary operators (`condition ? trueExpression : falseExpression`) or logical `&&` operators for conditional rendering within JSX.

```jsx
const isLoggedIn = true;
return (
  <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}</div>
);
```

- **Looping Through Elements:** Use the `map()` function to iterate over arrays and render multiple elements in JSX.

```jsx
const items = ['Item1', 'Item2', 'Item3'];
return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

3. **Avoiding Confusion Between JavaScript and JSX Syntax**

> JSX looks similar to HTML, but it follows JavaScript syntax rules. Misunderstanding this can lead to errors.

**Important Points:**

- **Class Attribute:** Use `className` instead of `class` in JSX, because `class` is a reserved keyword in JavaScript.

```jsx
return <div className="container">Hello World</div>;
```

- **Inline Styles:** Use objects for inline styles in JSX, and remember to use camelCase for CSS properties.

```jsx
return (
  <div style={{ backgroundColor: 'red', fontSize: '20px' }}>Styled Text</div>
);
```

#### Ternary operator

### Ternary Operator: My Own Rules

> The ternary operator is a concise way to perform conditional logic in JavaScript. It allows you to evaluate a condition and return one of two values based on the outcome. However, while it can make code shorter and more readable, it's important to use it judiciously to avoid overcomplicating your code. Here are some guidelines and considerations for using the ternary operator, along with a comparison to `switch/case` statements.

1. **Basic Structure of Ternary Operator**

> The ternary operator in JavaScript follows this basic structure:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
const isAdult = age >= 18 ? 'Yes' : 'No';
```

2. **Using Ternary Operator: My Own Rules**

> To keep your code clean and maintainable, consider these rules when using the ternary operator:

**Keep It Simple:**

- Use the ternary operator for simple, straightforward conditions. If the logic becomes complex or nested, consider using `if/else` or `switch/case` instead.

```javascript
// Good use
const status = isLoggedIn ? 'Welcome' : 'Please log in';

// Bad use (too complex)
const message =
  age < 18 ? (hasPermission ? 'Granted' : 'Denied') : 'Adult access';
```

**Avoid Nested Ternary Operators:**

- Nesting ternary operators can make the code hard to read and understand. If you find yourself nesting ternary operators, it's usually a sign that the logic should be refactored.

```javascript
// Avoid this
const result = condition1 ? (condition2 ? value1 : value2) : value3;

// Prefer this
let result;
if (condition1) {
  result = condition2 ? value1 : value2;
} else {
  result = value3;
}
```

**Consider Readability Over Conciseness:**

- While the ternary operator is useful for making code concise, readability should always come first. If the ternary operator makes the code harder to understand, it's better to use a full `if/else` statement.

```javascript
// Ternary operator is appropriate
const message = isError ? 'An error occurred' : 'Operation successful';

// `if/else` might be better for complex logic
let message;
if (isError) {
  message = 'An error occurred';
} else if (isWarning) {
  message = 'This is a warning';
} else {
  message = 'Operation successful';
}
```

3. **Ternary Operator vs. `switch/case`**

**Ternary Operator:**

- Best suited for simple conditions with two possible outcomes.
- Keeps the code concise but can become unreadable if overused or nested.

```javascript
const role = userType === 'admin' ? 'Admin Access' : 'User Access';
```

- **`switch/case`:**

> Best used when you have multiple conditions that lead to different outcomes. It provides a more structured way to handle multiple cases and can be more readable than a series of nested ternary operators.

```javascript
switch (userType) {
  case 'admin':
    console.log('Admin Access');
    break;
  case 'editor':
    console.log('Editor Access');
    break;
  case 'viewer':
    console.log('Viewer Access');
    break;
  default:
    console.log('No Access');
}
```

- **Pros of `switch/case`:** More readable when dealing with multiple conditions.
- **Cons of `switch/case`:** Slightly more verbose, but clarity often outweighs conciseness in complex logic.

4. **Avoiding Over-Simplification**

> Using the ternary operator to excessively simplify code can lead to confusion and maintenance challenges. Always balance between conciseness and clarity.

```javascript
// Overly simplified ternary operator
const level = score > 90 ? 'A' : score > 80 ? 'B' : score > 70 ? 'C' : 'D';

// Better to use `if/else` or `switch/case`
let level;
if (score > 90) {
  level = 'A';
} else if (score > 80) {
  level = 'B';
} else if (score > 70) {
  level = 'C';
} else {
  level = 'D';
}
```

#### Truthy & Falsy

#### Short-Circuit Evaluation

#### Else If

#### Else

#### Early Return

#### Negative Condition

#### Default Case

#### Explicit Operator

#### Nullish Coalescing Operator

#### De Morgan’s Laws
