import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product';

const IMAGES = 'https://thumb.wikimedia.org/wikipedia/commons/thumb';
const ORIGINALS = 'https://upload.wikimedia.org/wikipedia/commons';

@Injectable({ providedIn: 'root' })
export class ProductRepository {
  private readonly products: Product[] = [
    new Product(
      'Pizza barbacoa',
      ['Mozzarella', 'Pollo', 'Salsa barbacoa', 'Cebolla roja', 'Cilantro'],
      `${ORIGINALS}/6/60/BBQ_CHICKEN_PIZZA.jpg`,
      11.5,
      'pizza',
    ),
    new Product(
      'Pizza margarita',
      ['Tomate', 'Mozzarella', 'Albahaca', 'Aceite de oliva'],
      `${IMAGES}/4/46/Pizza-napoletana.jpg/960px-Pizza-napoletana.jpg`,
      8,
      'pizza',
    ),
    new Product(
      'Pizza cuatro quesos',
      ['Mozzarella', 'Gorgonzola', 'Parmesano', 'Emmental'],
      `${IMAGES}/c/c7/Four_cheese_pizza.jpg/960px-Four_cheese_pizza.jpg`,
      10.5,
      'pizza',
    ),
    new Product(
      'Pizza hawaiana',
      ['Tomate', 'Mozzarella', 'Jamón york', 'Piña'],
      `${IMAGES}/d/d1/Hawaiian_pizza_1.jpg/960px-Hawaiian_pizza_1.jpg`,
      9.5,
      'pizza',
    ),
    new Product(
      'Pizza carbonara',
      ['Nata', 'Mozzarella', 'Bacon', 'Champiñones', 'Cebolla'],
      `${IMAGES}/3/3b/Pizza_Carbonara_-_Dibocca.jpg/960px-Pizza_Carbonara_-_Dibocca.jpg`,
      10,
      'pizza',
    ),
    new Product(
      'Pizza vegetal',
      ['Tomate', 'Mozzarella', 'Rúcula', 'Tomate cherry'],
      `${IMAGES}/7/7b/Vegetarian-pizza-top.jpg/960px-Vegetarian-pizza-top.jpg`,
      9,
      'pizza',
    ),
    new Product(
      'Agua mineral',
      ['Agua mineral natural'],
      `${IMAGES}/9/94/Acqua_Panna_mineral_water_in_a_glass_bottle_-_20140408.jpg/960px-Acqua_Panna_mineral_water_in_a_glass_bottle_-_20140408.jpg`,
      1.5,
      'drink',
    ),
    new Product(
      'Zumo de naranja',
      ['Naranja natural'],
      `${IMAGES}/6/67/Orange_juice_1_edit1.jpg/960px-Orange_juice_1_edit1.jpg`,
      2.5,
      'drink',
    ),
    new Product(
      'Refresco de cola',
      ['Agua carbonatada', 'Azúcar', 'Cafeína', 'Limón'],
      `${IMAGES}/1/10/Glass_cola.jpg/960px-Glass_cola.jpg`,
      2.5,
      'drink',
    ),
    new Product(
      'Cerveza',
      ['Malta de cebada', 'Lúpulo', 'Agua'],
      `${IMAGES}/3/3b/Pint_of_beer_with_some_bread.jpg/960px-Pint_of_beer_with_some_bread.jpg`,
      3,
      'drink',
    ),
    new Product(
      'Tiramisú',
      ['Mascarpone', 'Café', 'Bizcochos de soletilla', 'Cacao'],
      `${IMAGES}/f/fb/Dessert_Tiramisu.jpg/960px-Dessert_Tiramisu.jpg`,
      4.5,
      'dessert',
    ),
    new Product(
      'Tarta de queso',
      ['Queso crema', 'Galleta', 'Huevo', 'Azúcar'],
      `${ORIGINALS}/d/db/Raised_slice_of_cheesecake.jpg`,
      4.5,
      'dessert',
    ),
    new Product(
      'Panna cotta',
      ['Nata', 'Azúcar', 'Vainilla', 'Caramelo'],
      `${IMAGES}/7/75/Panna_Cotta_with_caramel_sauce.jpg/960px-Panna_Cotta_with_caramel_sauce.jpg`,
      4,
      'dessert',
    ),
    new Product(
      'Brownie',
      ['Chocolate negro', 'Mantequilla', 'Nueces', 'Huevo'],
      `${IMAGES}/6/68/Chocolatebrownie.JPG/960px-Chocolatebrownie.JPG`,
      3.5,
      'dessert',
    ),
    new Product(
      'Pizza diávola',
      ['Tomate', 'Mozzarella', 'Salami picante', 'Orégano'],
      `${IMAGES}/8/8d/Pizza_Diavola_at_Alby%27s_Pizza.jpg/960px-Pizza_Diavola_at_Alby%27s_Pizza.jpg`,
      11,
      'news',
    ),
    new Product(
      'Pizza picante',
      ['Tomate', 'Mozzarella', 'Pepperoni', 'Jalapeños', 'Cebolla roja'],
      `${IMAGES}/3/3c/Pizza_diabolo_-_London%2C_UK.jpg/960px-Pizza_diabolo_-_London%2C_UK.jpg`,
      11.5,
      'news',
    ),
  ];

  findByCategory(category: Category): Product[] {
    return this.products.filter((product) => product.category === category);
  }
}
