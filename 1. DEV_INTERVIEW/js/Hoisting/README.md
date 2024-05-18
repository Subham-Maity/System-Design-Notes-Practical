###  Exact answer for Interview

**Hoisting in JavaScript:**
> Hoisting in JavaScript is a behavior where variables and function declarations are moved to the top of their respective scopes before code execution.
```js
greet()

function greet(){
    console.log("Good Morning")
}
//Output : Good Morning
```

- > In JavaScript, variable hoisting only hoists the declarations, not the initializations.


### Explanation:


Explanation:

1. Variable Hoisting:
    - Variable declarations are hoisted to the top of their scope (global or function scope), but not their assignments.
    - Variables are initialized with `undefined` during hoisting.

Example:
```js
console.log(x); // Output: undefined
var x = 5;
```
Interpreted as:
```js
var x; // Declaration is hoisted
console.log(x); // Output: undefined
x = 5; // Assignment happens later
```

2. Function Hoisting:
    - Function declarations are fully hoisted, including their function body.
    - Function expressions (assigned to variables) are not hoisted; only the variable declaration is hoisted.

Example:
```js
console.log(myFunc()); // Output: "Hello!"

function myFunc() {
  return "Hello!";
}

console.log(myVar()); // TypeError: myVar is not a function
var myVar = function() {
  return "World!";
}
```

- Points to remember:
    - Hoisting happens during the compilation phase, before code execution.
    - Use strict mode to avoid accidental creation of global variables.
    - To avoid confusion, it's a good practice to declare variables at the top of their respective scopes.
    - Function expressions are not hoisted as functions; they are treated as variable declarations during hoisting.

Hoisting is a mechanism that helps ensure variables and functions are available throughout their scope, but it can also lead to unexpected behavior if not understood properly. It's essential to understand hoisting to write more predictable and maintainable JavaScript code.


