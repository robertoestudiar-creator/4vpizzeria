import { Component, computed, input, signal } from '@angular/core';
import { ProductCard } from '../../molecules/product-card/product-card';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { Category, Product } from '../../../models/product';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, SearchBar],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})

export class ProductGrid {
  protected products: Product[] = [
    new Product(
      'Pizza barbacoa',
      ['Carne picada', 'Bacon', 'Cebolla', 'Salsa barbacoa'],
      'https://imgs.search.brave.com/d4VODFHO-xd0Dt554I-EqKqDvobgDmT-edy7kZIur7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2VyLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS9pbWcvYi9SMjl2/WjJ4bC9BVnZYc0Vo/aEp0WFRoeHlQVWpH/SWZ4YVVUcjhRVGJJ/bnZJN1piLVRuVVVH/azZpbmdXLWpGWVJs/cDZBdHZlV3ZRbW4w/T3ZSWEhNTjgzUXM0/ZmtZX0ttOFJoQU9Z/Zy1TZlVFdkF2TWQ0/V3R1Z0hwR2RTUTVk/TVNoeXBoZW5oeXBo/ZW5VMWFTV2h5cGhl/bmh5cGhlbnVGZHFQ/M1pVbi1NSU12eU1N/MkVDaUJvZVZBRFJ1/eFVvUk1wNHZfMDJQ/ZFJ3enhTXzFuV3dS/TXVsSTVhWUFIYktV/LVNGbi0vdzY0MC1o/NDI2L3BpenphLWJh/cmJhY29hLTAyLmpw/Zw',
      11.5,
      'pizza',
    ),
    new Product(
      'Pizza margarita',
      ['Tomate', 'Mozzarella', 'Albahaca'],
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Margherita_pizza_on_plate.jpg/960px-Margherita_pizza_on_plate.jpg',
      8,
      'pizza',
    ),
    new Product(
      'Pizza cuatro quesos',
      ['Mozzarella', 'Gorgonzola', 'Parmesano', 'Emmental'],
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg/960px-Pizza_quattro_formaggi_at_restaurant%2C_Chalk_Farm_Road%2C_London.jpg',
      10.5,
      'pizza',
    ),
    new Product(
      'Pizza hawaiana',
      ['Jamón york', 'Piña', 'Mozzarella'],
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Hawaiian_pizza_1.jpg/960px-Hawaiian_pizza_1.jpg',
      9.5,
      'pizza',
    ),
    new Product(
      'Pizza carbonara',
      ['Nata', 'Bacon', 'Champiñones', 'Cebolla'],
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pizza_carbonara_-_Italiamos.jpg/960px-Pizza_carbonara_-_Italiamos.jpg',
      10,
      'pizza',
    ),
    new Product(
      'Pizza vegetal',
      ['Pimiento', 'Cebolla', 'Champiñones', 'Aceitunas'],
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vegetarian_Pizza.jpg/960px-Vegetarian_Pizza.jpg',
      9,
      'pizza',
    ),
    new Product(
      'Agua',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Glass_of_water.jpg?width=640',
      1.5,
      'drink',
    ),
    new Product(
      'Zumo de naranja',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Orange_juice_1.jpg?width=640',
      2.5,
      'drink',
    ),
    new Product(
      'Cerveza',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Beer_glass.jpg?width=640',
      3,
      'drink',
    ),
    new Product(
      'Tiramisú',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tiramisu.jpg?width=640',
      4.5,
      'dessert',
    ),
    new Product(
      'Tarta de queso',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cheesecake.jpg?width=640',
      4.5,
      'dessert',
    ),
    new Product(
      'Panna cotta',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Panna_cotta.jpg?width=640',
      4,
      'dessert',
    ),
    new Product(
      'Brownie',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Brownie.jpg?width=640',
      3.5,
      'dessert',
    ),
    new Product(
      '2x1',
      [],
      'https://commons.wikimedia.org/wiki/Special:FilePath/Brownie.jpg?width=640',
      10,
      'offers',
    ),
  ];

  category = input.required<Category>();
  protected searchTerm = signal('');

  protected visibleProducts = computed(() =>
    this.products.filter(
      (product) =>
        product.category === this.category() &&
        product.name.toLowerCase().includes(this.searchTerm().toLowerCase()),
    ),
  );

  protected onSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
