"use strict";
class Car {
    constructor(car) {
        this.car = car;
        this.car.model;
        this.car.year;
        this.car.price;
    }
    getPrice() {
        return this.car.price;
    }
    getModel() {
        return this.car.model;
    }
    getYear() {
        return this.car.year;
    }
}
const car = new Car({
    model: 'Ford',
    year: 2020,
    price: 2000
});
console.log(car.getPrice());
console.log(car.getModel());
console.log(car.getYear());
