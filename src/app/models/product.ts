export type Category = 'pizza' | 'drink' | 'dessert'|'offers'|'news';

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
