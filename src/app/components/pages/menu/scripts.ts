import { Component, signal } from '@angular/core';
import { Navbar } from '../../organisms/navbar/navbar';
import { ProductGrid } from '../../organisms/product-grid/product-grid';
import { Category } from '../../../models/product';

@Component({
  selector: 'app-menu-page',
  imports: [Navbar, ProductGrid],
  templateUrl: './index.html',
  styleUrl: './styles.scss',
})
export class MenuPage {
  protected activeCategory = signal<Category>('pizza');

  protected selectCategory(category: Category): void {
    this.activeCategory.set(category);
  }
}
