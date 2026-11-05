import { Component, input } from '@angular/core';
import { CartLine } from '../../../models/cart';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.html',
  styleUrl: './order-line.scss',
})
export class OrderLine {
  line = input.required<CartLine>();
}
