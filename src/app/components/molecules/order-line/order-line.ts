import { Component, input } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-order-line',
  templateUrl: './order-line.html',
  styleUrl: './order-line.scss',
  host: { class: 'list-group-item d-flex justify-content-between' },
})
export class OrderLine {
  product = input.required<Product>();
}
