export const PAYMENT_METHODS = [
    { id: 'card', label: 'Tarjeta' },
    { id: 'bizum', label: 'Bizum' },
] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number]['id'];
