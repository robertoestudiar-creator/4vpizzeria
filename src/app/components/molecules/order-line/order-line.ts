import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.html',
  styleUrl: './order-line.scss',
})
export class OrderLine {
  product = input.required<Product>();
}
