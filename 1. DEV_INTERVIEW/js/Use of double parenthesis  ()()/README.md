## Javascript 
```js

//or you can do it like this
function xs () {
    let as = "subham"
    function ys () {
        console.log(as)
    }
    return ys; // return the function y, not the result of calling y()
}

xs()(); // call the function returned by x()



```
The double parentheses `xs()()` in the provided code are used to execute the inner function (`ys`) that is returned by the outer function (`xs`).

Here's how it works:

1. `xs()` is called, which creates the `ys` function and returns it.
2. The second set of parentheses `()` is used to immediately call the function that was returned by `xs()`, which is `ys`.

So, `xs()()` is equivalent to:

```js
const temp = xs(); // temp now holds the ys function
temp(); // calling the ys function
```

This pattern is often used when working with closures, where an outer function returns an inner function that "closes over" (remembers) variables from the outer function's scope. The inner function can then be called later, even after the outer function has finished executing, and still have access to those variables through the closure.