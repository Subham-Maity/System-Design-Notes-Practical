//but if we declare inside the scope we can access it
function outer() {
    const user_name = "Xam";
     //also outer function can't access inner_name
    console.log(inner_name)
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



function makeFunc () {
    const name = "Xam";
    function displayName () {
        console.log(name)
    }
    return displayName()
}

const myFunc = makeFunc()
myFunc()


function x () {
    let a = "subham"
    function y () {
        console.log(a)
    }
    return y; // return the function y, not the result of calling y()
}
const myFuncs = x();

myFuncs();

//or you can do it like this
function xs () {
    let as = "subham"
    function ys () {
        console.log(as)
    }
    return ys; // return the function y, not the result of calling y()
}

xs()(); // call the function returned by x()


