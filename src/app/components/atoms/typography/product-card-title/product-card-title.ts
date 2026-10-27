import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-product-card-title',
  templateUrl: './product-card-title.html',
  styleUrl: './product-card-title.scss',
})

export class ProductCardTitle {
  text = input.required<string>();
  color = input<string>('#d62828');
  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
