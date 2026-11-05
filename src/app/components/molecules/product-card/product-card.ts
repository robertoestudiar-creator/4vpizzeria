import { Component, input, output, signal } from '@angular/core';
import { CardButton } from '../../atoms/buttons/card-button/card-button';
import { ProductCardTitle } from '../../atoms/typography/product-card-title/product-card-title';
import { QuantitySelector } from '../quantity-selector/quantity-selector';
import { Product } from '../../../models/product';
import { CartLine, MIN_QUANTITY } from '../../../models/cart';

@Component({
  selector: 'app-product-card',
  imports: [CardButton, ProductCardTitle, QuantitySelector],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  product = input.required<Product>();
  added = output<CartLine>();
  protected readonly quantity = signal(MIN_QUANTITY);

  protected changeQuantity(quantity: number): void {
    this.quantity.set(quantity);
  }

  protected addToOrder(): void {
    this.added.emit(new CartLine(this.product(), this.quantity()));
    this.quantity.set(MIN_QUANTITY);
  }
}
