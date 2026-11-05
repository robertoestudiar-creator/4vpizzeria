export const CATEGORIES = [
    { id: 'pizza', label: 'Pizzas' },
    { id: 'drink', label: 'Bebidas' },
    { id: 'dessert', label: 'Postres' },
    { id: 'offers', label: 'Ofertas' },
    { id: 'news', label: 'Novedades' },
] as const;

export type Category = (typeof CATEGORIES)[number]['id'];

export class Product {

    public name: string;
    public ingredients: string[];
    public imageUrl: string;
    public price: number;
    public category: Category;

    constructor(name: string, ingredients: string[], imageUrl: string, price: number, category: Category) {
        this.name = name;
        this.ingredients = ingredients;
        this.imageUrl = imageUrl;
        this.price=price;
        this.category = category;
    }
}
