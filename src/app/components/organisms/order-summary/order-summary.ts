import { Component, ElementRef, computed, input, viewChild } from '@angular/core';
import { OrderLine } from '../../molecules/order-line/order-line';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-order-summary',
  imports: [OrderLine],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
  items = input.required<Product[]>();
  protected total = computed(() => this.items().reduce((sum, product) => sum + product.price, 0));
  private readonly list = viewChild.required<ElementRef<HTMLElement>>('list');

  focus(): void {
    this.list().nativeElement.focus();
  }
}
