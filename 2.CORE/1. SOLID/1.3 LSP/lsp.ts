class BaseBird {
    makeSound() {}
}

class Bird extends BaseBird {
    fly() {
        console.log("Bird fly");
    }
    makeSound() {}
}

class Sparrow extends Bird {
    makeSound() {
        console.log("Sparrow sound");
    }
}

class Penguin extends BaseBird {
    makeSound() {
        console.log('Penguin sound');
    }
}

function makeBirdFly(bird: Bird) {
    bird.fly();
}

function tryToMakeBirdFly(bird: BaseBird) {
    if ("fly" in bird) {
        (bird as Bird).fly();
    } else {
        console.log(`${bird.constructor.name} cannot fly.`);
    }
}

// LSP says: objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
makeBirdFly(new Bird()); // Bird fly
makeBirdFly(new Sparrow()); // Bird fly
tryToMakeBirdFly(new Penguin()); // Penguin cannot fly.