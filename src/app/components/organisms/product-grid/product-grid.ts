import { Component, computed, input, output, signal } from '@angular/core';
import { ProductCard } from '../../molecules/product-card/product-card';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { Category } from '../../../models/product';
import { ProductRepository } from '../../../repositories/product-repository';
import { CartLine } from '../../../models/cart';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, SearchBar],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})

export class ProductGrid {
  constructor(private productRepository: ProductRepository) {}

  category = input.required<Category>();
  productAdded = output<CartLine>();
  protected searchTerm = signal('');

  protected visibleProducts = computed(() =>
    this.productRepository
      .findByCategory(this.category())
      .filter((product) => product.name.toLowerCase().includes(this.searchTerm().toLowerCase())),
  );

  protected onSearch(term: string): void {
    this.searchTerm.set(term);
  }

  protected onAdded(line: CartLine): void {
    this.productAdded.emit(line);
  }
}
