import {Product} from "../Product";


export class PricingCalculator {
    calculatePricing(products: Product[]): number {
        return products.reduce((acc, product) => acc + product.price, 0);
    }
}