import { Component, input } from '@angular/core';

@Component({
  selector: 'app-product-card-title',
  templateUrl: './product-card-title.html',
  styleUrl: './product-card-title.scss',
})

export class ProductCardTitle {
  text = input.required<string>();
}
