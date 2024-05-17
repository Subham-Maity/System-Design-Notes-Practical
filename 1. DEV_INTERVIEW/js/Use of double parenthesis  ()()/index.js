
//or you can do it like this
function xs () {
    let as = "subham"
    function ys () {
        console.log(as)
    }
    return ys; // return the function y, not the result of calling y()
}

xs()(); // call the function returned by x()


