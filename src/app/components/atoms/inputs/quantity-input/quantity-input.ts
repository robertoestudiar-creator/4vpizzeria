import { Component, input, output } from '@angular/core';
import { MAX_QUANTITY, MIN_QUANTITY } from '../../../../models/cart';

@Component({
  selector: 'app-quantity-input',
  templateUrl: './quantity-input.html',
  styleUrl: './quantity-input.scss',
})
export class QuantityInput {
  value = input<number>(MIN_QUANTITY);
  valueChange = output<number>();
  protected readonly min = MIN_QUANTITY;
  protected readonly max = MAX_QUANTITY;

  protected onChange(field: HTMLInputElement): void {
    const typed = Math.trunc(Number(field.value));
    const quantity = Number.isNaN(typed) ? this.min : Math.min(this.max, Math.max(this.min, typed));
    field.value = String(quantity);
    this.valueChange.emit(quantity);
  }
}
