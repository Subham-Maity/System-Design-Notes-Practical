import {Product, Order, PricingCalculator, Invoice ,PaymentProcessor} from "./order";


const product1 = new Product("1","Laptop", 200000);
const product2 = new Product("2","Phone", 60000);
const product3 = new Product("3", "Car", 8000000);

const order = new Order();



order.addProduct(product1);
order.addProduct(product2);
order.addProduct(product3);


const pricingCalculator = new PricingCalculator();
const total = pricingCalculator.calculatePricing(order.getProduct());

const invoice = new Invoice();
invoice.generateInvoice(order.getProduct(), total);

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(order);
