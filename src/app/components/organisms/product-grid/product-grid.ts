import { Component, computed, inject, input, signal } from '@angular/core';
import { ProductCard } from '../../molecules/product-card/product-card';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { Category } from '../../../models/product';
import { ProductRepository } from '../../../repositories/product-repository';

@Component({
  selector: 'app-product-grid',
  imports: [ProductCard, SearchBar],
  templateUrl: './product-grid.html',
  styleUrl: './product-grid.scss',
})

export class ProductGrid {
  private readonly productRepository = inject(ProductRepository);

  category = input.required<Category>();
  protected searchTerm = signal('');

  protected visibleProducts = computed(() =>
    this.productRepository
      .findByCategory(this.category())
      .filter((product) => product.name.toLowerCase().includes(this.searchTerm().toLowerCase())),
  );

  protected onSearch(term: string): void {
    this.searchTerm.set(term);
  }
}
