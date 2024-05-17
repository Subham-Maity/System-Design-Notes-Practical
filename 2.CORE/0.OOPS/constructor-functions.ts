class Person {
    name: string;
    age: number;

    //special method used to initialize an object's properties when it is created.
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`);
    }
}

const john = new Person('John', 30);
john.greet();