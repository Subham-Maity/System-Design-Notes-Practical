1. How many data types are in JavaScript?
> 7 Datatypes - 
> String. Number. Bigint. Boolean. Undefined. Null. Symbol. Object.
2. What is the difference between var, let, and const? 
> Variables are used to store data. 

| Keyword | Scope           | Re-declaration | Re-assignment | Initialization                                                              |
|---------|-----------------|----------------|---------------|-----------------------------------------------------------------------------|
| var     | Function/Global | Yes            | Yes           | Can be accessed before declaration (hoisted with default value `undefined`) |
| let     | Block           | No             | Yes           | Not hoisted, throws error if accessed before declaration                    |
| const   | Block           | No             | No            | Not hoisted, throws error if accessed before declaration                    |

- var

```ts
function example(){
    if(true){
        var count = 10
        console.log(count)
    }
    console.log(count) //still can access
}

example()
```
- let

```ts
function example(){
    if(true){
        let count = 10
        console.log(count)
        count = 20 // re assignment
        console.log(count)
    }
    console.log(count)//can't access
}

example()

```

- const

```ts
function example(){
    if(true){
        const count = 10
        console.log(count)
    }
    console.log(count) //can't access
}

example()
```