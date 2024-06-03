interface CarI  {
    model: string
    year: number
    price: number
}

class Car {
    constructor(private car:CarI) {
        this.car.model
        this.car.year
        this.car.price
    }

    getPrice() {
        return this.car.price
    }
    getModel() {
        return this.car.model
    }
    getYear() {
        return this.car.year
    }
}

const car = new Car({
    model: 'Ford',
    year: 2020,
    price: 2000
})

console.log(car.getPrice())
console.log(car.getModel())
console.log(car.getYear())
