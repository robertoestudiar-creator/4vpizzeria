export type PaymentMethod = 'card' | 'bizum';

export class PaymentOption {

    public id: PaymentMethod;
    public label: string;

    constructor(id: PaymentMethod, label: string) {
        this.id = id;
        this.label = label;
    }
}

export const PAYMENT_METHODS: PaymentOption[] = [
    new PaymentOption('card', 'Tarjeta'),
    new PaymentOption('bizum', 'Bizum'),
];
