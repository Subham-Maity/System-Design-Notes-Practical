###  Exact answer for Interview

**Execution context (in simple words):**
> Execution context in JavaScript is the environment where the JavaScript code is run.This container holds all the information your JavaScript code needs to run at a specific time

**Call stack (in simple words):**
> Call stack is a data structure that keeps track of multiple execution contexts created during code execution.

### Explanation:
#### Global Execution Context

1. **Global Execution Context**:
    - Created when the JavaScript code starts running.
    - It contains global variables and functions.
2. **Function Execution Context**:
    - Created when a function is called.
    - It contains local variables, arguments, and the function's `this`.
3. **Creation Phase**:
    - Variables and functions are set up in memory.
    - Variables are `undefined` initially.
4. **Execution Phase**:
    - Code is executed line by line.
    - Variables get their values.

### Example Code:
```javascript
// Global Execution Context
var name = "Rahul"; // 'name' is a global variable

function greet() { // 'greet' is a global function
    // Function Execution Context
    var message = "Hello, " + name; // 'message' is a local variable
    console.log(message);
}

greet(); // Function 'greet' is called, creating a new Function Execution Context
```

In the example:
- When the script runs, the global execution context is created.
- Variables `name` and function `greet` are set up in memory.
- When `greet` is called, a new execution context is created for the function.
- Inside `greet`, the variable `message` is created and the `console.log` line is executed.

#### Call stack