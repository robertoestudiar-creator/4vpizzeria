export type Category = 'pizza' | 'drink' | 'dessert' | 'news';

export class CategoryOption {

    public id: Category;
    public label: string;

    constructor(id: Category, label: string) {
        this.id = id;
        this.label = label;
    }
}

export const CATEGORIES: CategoryOption[] = [
    new CategoryOption('pizza', 'Pizzas'),
    new CategoryOption('drink', 'Bebidas'),
    new CategoryOption('dessert', 'Postres'),
    new CategoryOption('news', 'Novedades'),
];

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
