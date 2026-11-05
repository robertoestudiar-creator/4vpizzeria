import { Component, ElementRef, computed, input, viewChild } from '@angular/core';
import { OrderLine } from '../../molecules/order-line/order-line';
import { CartLine } from '../../../models/cart';

@Component({
  selector: 'app-order-summary',
  imports: [OrderLine],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
  lines = input.required<CartLine[]>();
  protected total = computed(() =>
    this.lines().reduce((sum, line) => sum + line.product.price * line.quantity, 0),
  );
  private readonly list = viewChild.required<ElementRef<HTMLElement>>('list');

  focus(): void {
    this.list().nativeElement.focus();
  }
}
