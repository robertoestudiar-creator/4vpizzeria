import { Component, signal } from '@angular/core';
import { Navbar } from '../../organisms/navbar/navbar';
import { ProductGrid } from '../../organisms/product-grid/product-grid';
import { Category } from '../../../models/product';
import { CartLine } from '../../../models/cart';
import { CartService } from '../../../services/cart-service';

@Component({
  selector: 'app-menu-page',
  imports: [Navbar, ProductGrid],
  templateUrl: './index.html',
  styleUrl: './styles.scss',
})
export class MenuPage {
  protected activeCategory = signal<Category>('pizza');

  constructor(protected cartService: CartService) {}

  protected selectCategory(category: Category): void {
    this.activeCategory.set(category);
  }

  protected addToCart(line: CartLine): void {
    this.cartService.addLine(line);
  }
}
