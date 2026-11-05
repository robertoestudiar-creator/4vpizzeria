import { Component, input, output } from '@angular/core';
import { StepperButton } from '../../atoms/buttons/stepper-button/stepper-button';
import { QuantityInput } from '../../atoms/inputs/quantity-input/quantity-input';
import { MAX_QUANTITY, MIN_QUANTITY } from '../../../models/cart';

@Component({
  selector: 'app-quantity-selector',
  imports: [StepperButton, QuantityInput],
  templateUrl: './quantity-selector.html',
  styleUrl: './quantity-selector.scss',
})
export class QuantitySelector {
  quantity = input<number>(MIN_QUANTITY);
  quantityChange = output<number>();
  protected readonly min = MIN_QUANTITY;
  protected readonly max = MAX_QUANTITY;

  protected decrease(): void {
    this.quantityChange.emit(Math.max(this.min, this.quantity() - 1));
  }

  protected increase(): void {
    this.quantityChange.emit(Math.min(this.max, this.quantity() + 1));
  }

  protected setQuantity(quantity: number): void {
    this.quantityChange.emit(quantity);
  }
}
