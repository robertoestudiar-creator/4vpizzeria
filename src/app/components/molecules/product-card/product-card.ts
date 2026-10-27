import { Component, input } from '@angular/core';
import { CardButton } from '../../atoms/buttons/card-button/card-button';
import { ProductCardTitle } from '../../atoms/typography/product-card-title/product-card-title';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [CardButton, ProductCardTitle],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();

  protected addToOrder(): void {
    console.log('Botón pulsado:', this.product().name);
  }
}
