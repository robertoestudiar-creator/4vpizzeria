import { Component, input, output } from '@angular/core';
import { NavbarButton } from '../../atoms/buttons/navbar-button/navbar-button';
import { CartButton } from '../../molecules/cart-button/cart-button';
import { CATEGORIES, Category } from '../../../models/product';

@Component({
  imports: [NavbarButton, CartButton],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeCategory = input.required<Category>();
  cartCount = input<number>(0);
  categorySelected = output<Category>();
  protected readonly categories = CATEGORIES;

  protected selectCategory(category: Category): void {
    this.categorySelected.emit(category);
  }
}
