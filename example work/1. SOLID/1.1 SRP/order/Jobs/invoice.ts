import {Product} from "../Product";


export class Invoice {

    generateInvoice(product: Product[] , amount: number) {
        console.log(`
        Invoice Date : ${new Date().toLocaleString()}
        _____________________________
        
        Product Name\t\t\tPrice
        `);

        product.forEach((product:Product)=> {
            console.log(`${product.name}\t\t\t${product.price}`)
        });

        console.log(`_____________________________`);
        console.log(`Total Price : ${amount}`)
    }
}