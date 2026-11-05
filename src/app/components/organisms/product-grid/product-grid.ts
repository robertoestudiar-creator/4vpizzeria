import { Component, computed, input, output } from '@angular/core';
import { ProductCard } from '../../molecules/product-card/product-card';
import { Category } from '../../../models/product';
import { ProductRepository } from '../../../repositories/product-repository';
import { CartLine } from '../../../models/cart';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})

export class ProductGrid {
  constructor(private productRepository: ProductRepository) {}

  category = input.required<Category>();
  ingredient = input<string>('');
  productAdded = output<CartLine>();

  protected visibleProducts = computed(() => {
    const ingredient = this.ingredient().toLowerCase();
    return this.productRepository
      .findByCategory(this.category())
      .filter(
        (product) =>
          ingredient === '' || product.ingredients.some((name) => name.toLowerCase().includes(ingredient)),
      );
  });

  protected onAdded(line: CartLine): void {
    this.productAdded.emit(line);
  }
}
