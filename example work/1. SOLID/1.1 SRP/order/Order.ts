import {Product} from "./Product";
export class Order {
    product: Product [] = []

    //Some method to change the product

    addProduct(product: Product) {
        this.product.push(product)
    }

    getProduct() {
        return this.product
    }
}