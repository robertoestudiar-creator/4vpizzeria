import { Component, input, output } from '@angular/core';
import { NavbarButton } from '../../atoms/buttons/navbar-button/navbar-button';
import { Category } from '../../../models/product';

@Component({
  imports: [NavbarButton],
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeCategory = input.required<Category>();
  categorySelected = output<Category>();

  protected selectCategory(category: Category): void {
    this.categorySelected.emit(category);
  }
}
