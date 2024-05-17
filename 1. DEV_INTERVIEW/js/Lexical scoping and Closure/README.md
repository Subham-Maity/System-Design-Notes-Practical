## Javascript 

###  Exact answer for Interview

**Lexical Scoping (in simple words):**
> Variable access based on their position in code, inner functions can access outer variables, but outer cannot access inner.

**Closure (in simple words):**
> Inner function can remember and access variables from outer function, even after outer function has finished executing.


###  Lexical scoping and Closure
#### Lexical scoping 
```js
//but if we declare inside the scope we can access it
function outer() {
    const user_name = "Xam";

    function inner () {
        console.log(user_name)
    }
    inner()
}
//you can't access user_name outside the scope
console.log(user_name)
outer()
```

In JavaScript, every function has access to variables defined within its own scope, as well as variables defined in the outer (parent) function scope, and so on, all the way up to the global scope.


- The `outer` function creates a new lexical scope and a new memory context.
- Inside `outer`, the `user_name` variable is defined and assigned the value `"Xam"`.
- The `inner` function is defined within the scope of `outer`, so it has access to `user_name` through lexical scope.
- When `inner` is called, it can access `user_name` because it has an inner memory context that "remembers" the variables from its outer scope (in this case, `outer`).
- However, when trying to `console.log(user_name)` outside of `outer`, it throws an error because `user_name` is not defined in the global scope.
- When `outer()` is called, it creates a new memory context for `outer`, executes the code inside, and logs `"Xam"` to the console when `inner` is called.

In summary:

- Inner functions have access to variables from their outer scopes due to lexical scope.
- Inner functions maintain an inner memory context that "remembers" the variables from their outer scopes.
- Variables defined within a function are not accessible outside that function's scope.

#### **Closure**
```js
//if we declare outside the scope we can't access it

function displayName () {
    const name = "Xam";
}
console.log(name)

//but if we declare inside the scope we can access it
function outer() {
    const user_name = "Xam";

    function inner () {
        let inner_name = "inner function";
        console.log(user_name)
    }
    function inner2 () {
        console.log(user_name)
        //can't access inner_name 
        console.log(inner_name)
    }
    inner()
    inner2()
}
//you can't access user_name outside the scope
console.log(user_name)
outer()
```
- `inner_name` is declared within the `inner` function's scope.
- The `outer` function tries to `console.log(inner_name)`, but it cannot access `inner_name` because it is not defined within the `outer` function's scope.
- Only the `inner` function can access `inner_name` because it is declared within its scope.
- Similarly, `inner2` cannot access `inner_name` because it is not within the scope of `inner`.

Variables are only accessible within the scope they are declared and any nested scopes within that scope. Outer scopes cannot access variables declared in inner scopes.

- Closure

```js
function makeFunc () {
    const name = "Xam";
    function displayName () {
        console.log(name)
    }
    return displayName()
}

const myFunc = makeFunc()
myFunc()
```
This code demonstrates the concept of closures in JavaScript. A closure is created when a nested function has access to variables from an outer (enclosing) function, even after the outer function has finished executing.

- The `makeFunc` function declares a variable `name` and an inner function `displayName`.
- `displayName` has access to the `name` variable from its outer scope (the `makeFunc` function).
- `makeFunc` returns the `displayName` function itself, not the result of calling it.
- When `const myFunc = makeFunc()` is executed, it assigns the `displayName` function to `myFunc`.
- Even though `makeFunc` has finished executing, the `displayName` function still has access to the `name` variable due to closure.
- When `myFunc()` is called, it logs `"Xam"` to the console, because it has access to the `name` variable from its outer (enclosing) scope, which was `makeFunc`.

In essence, the `displayName` function "closes over" (or remembers) the `name` variable from its outer scope, even after `makeFunc` has finished executing. This is possible because of the way JavaScript handles memory and scope chain.

The key points are:
- `displayName` has access to variables from its outer scope, even after the outer function has finished executing.
- This is because it "closes over" those variables and keeps them in memory, creating a closure.
- Closures enable data privacy and encapsulation, as well as the creation of stateful functions.


#### Real World Example 

If I give you more colors it won't follow the dry principle

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<button id="orange">Orange</button>
<button id="green">Green</button>
</body>
<script src="index.js"></script>
<script>
    document.getElementById("orange").onclick = function ()
    {
        document.body.style.backgroundColor = `orange`
    }
    document.getElementById("green").onclick = function ()
    {
        document.body.style.backgroundColor = `green`
    }
</script>
</html>

```
```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<button id="orange">Orange</button>
<button id="green">Green</button>
</body>
<script src="index.js"></script>
<script>
    function clickHandler(color){
        // document.body.style.backgroundColor = `green`
       return  function (){
            document.body.style.backgroundColor = `${color}`
        }
    }

    document.getElementById('orange').onclick = clickHandler(`orange`)
    document.getElementById('green').onclick = clickHandler(`green`)

</script>
</html>

```
In the second example, the concept of closures is used to create a more reusable and DRY (Don't Repeat Yourself) solution for changing the background color of the document body.

Here's how it works:

1. The `clickHandler` function takes a `color` parameter and returns a new function.
2. The returned function has access to the `color` parameter from its outer scope (the `clickHandler` function), due to closure.
3. When `clickHandler('orange')` is called, it returns a new function that has access to the `color` parameter with the value `'orange'`.
4. Similarly, when `clickHandler('green')` is called, it returns a new function that has access to the `color` parameter with the value `'green'`.
5. These returned functions are assigned as the `onclick` event handlers for the respective buttons.
6. When the "Orange" button is clicked, the function returned by `clickHandler('orange')` is executed, and it sets the `document.body.style.backgroundColor` to `'orange'` using the `color` value it has access to through closure.
7. When the "Green" button is clicked, the function returned by `clickHandler('green')` is executed, and it sets the `document.body.style.backgroundColor` to `'green'` using the `color` value it has access to through closure.

The closure in this example allows the returned functions to "remember" the `color` value they were created with, even after the `clickHandler` function has finished executing. This way, a single function (`clickHandler`) can be used to generate multiple functions, each with its own "remembered" `color` value, making the code more reusable and following the DRY principle.

Without closures, you would need to create separate functions for each color, or have a single function that takes the color as an argument, which would violate the DRY principle if you have many colors.