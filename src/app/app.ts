import { Component, signal } from '@angular/core';
import { Navbar } from './components/organisms/navbar/navbar';
import { ProductGrid } from './components/organisms/product-grid/product-grid';
import { OrderForm } from './components/organisms/order-form/order-form';
import { Category } from './models/product';

@Component({
  imports: [Navbar, ProductGrid, OrderForm],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected activeCategory = signal<Category>('pizza');

  protected selectCategory(category: Category): void {
    this.activeCategory.set(category);
  }
}
