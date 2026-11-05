import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarButton } from '../../atoms/buttons/navbar-button/navbar-button';
import { CartButton } from '../../molecules/cart-button/cart-button';
import { SearchBar } from '../../molecules/search-bar/search-bar';
import { CATEGORIES, Category } from '../../../models/product';

@Component({
  imports: [RouterLink, RouterLinkActive, NavbarButton, CartButton, SearchBar],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeCategory = input<Category | null>(null);
  showFilters = input<boolean>(true);
  cartCount = input<number>(0);
  categorySelected = output<Category>();
  ingredientSearch = output<string>();
  protected readonly categories = CATEGORIES;

  protected selectCategory(category: Category): void {
    this.categorySelected.emit(category);
  }

  protected searchIngredient(ingredient: string): void {
    this.ingredientSearch.emit(ingredient);
  }
}
