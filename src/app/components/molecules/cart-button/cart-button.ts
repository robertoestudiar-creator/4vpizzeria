import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-button',
  imports: [RouterLink],
  templateUrl: './cart-button.html',
  styleUrl: './cart-button.scss',
})
export class CartButton {
  count = input<number>(0);
}
