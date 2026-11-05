import { Component, input, output } from '@angular/core';
import { RadioOption } from '../../atoms/inputs/radio-option/radio-option';
import { PAYMENT_METHODS, PaymentMethod } from '../../../models/order';

@Component({
  selector: 'app-payment-method-picker',
  imports: [RadioOption],
  templateUrl: './payment-method-picker.html',
  styleUrl: './payment-method-picker.scss',
})
export class PaymentMethodPicker {
  method = input<PaymentMethod | null>(null);
  methodChange = output<PaymentMethod>();
  protected readonly methods = PAYMENT_METHODS;

  protected selectMethod(method: PaymentMethod): void {
    this.methodChange.emit(method);
  }
}
