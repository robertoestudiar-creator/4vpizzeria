import { Product } from './product';

export const MIN_QUANTITY = 1;
export const MAX_QUANTITY = 99;

export class CartLine {

    public product: Product;
    public quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}
