import { Component, input, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardButton } from '../../atoms/buttons/card-button/card-button';
import { ErrorMessage } from '../../atoms/typography/error-message/error-message';
import { FormField } from '../../molecules/form-field/form-field';
import { PaymentMethodPicker } from '../../molecules/payment-method-picker/payment-method-picker';
import { PaymentMethod } from '../../../models/order';

const TIME_PATTERN = /^([01]\d|2[0-3]):[0-5]\d$/;
const CARD_PATTERN = /^\d{16}$/;
const PHONE_PATTERN = /^\d{9}$/;

const ERROR_MESSAGES = {
  time: 'Introduce una hora válida (HH:MM)',
  address: 'Introduce la dirección completa',
  paymentMethod: 'Elige un método de pago',
  card: 'La tarjeta tiene que tener 16 dígitos',
  phone: 'El móvil tiene que tener 9 dígitos',
};

@Component({
  selector: 'app-delivery-form',
  imports: [ReactiveFormsModule, FormField, PaymentMethodPicker, CardButton, ErrorMessage],
  templateUrl: './delivery-form.html',
  styleUrl: './delivery-form.scss',
})
export class DeliveryForm {
  canPay = input<boolean>(true);
  paid = output<void>();

  protected readonly form = new FormGroup({
    time: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(TIME_PATTERN)],
    }),
    address: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    paymentMethod: new FormControl<PaymentMethod | null>(null, Validators.required),
    card: new FormControl(
      { value: '', disabled: true },
      { nonNullable: true, validators: [Validators.required, Validators.pattern(CARD_PATTERN)] },
    ),
    phone: new FormControl(
      { value: '', disabled: true },
      { nonNullable: true, validators: [Validators.required, Validators.pattern(PHONE_PATTERN)] },
    ),
  });
  protected readonly submitted = signal(false);

  protected errorFor(name: keyof typeof ERROR_MESSAGES): string {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.submitted()) ? ERROR_MESSAGES[name] : '';
  }

  protected selectMethod(method: PaymentMethod): void {
    const { paymentMethod, card, phone } = this.form.controls;
    paymentMethod.setValue(method);
    if (method === 'card') {
      card.enable();
      phone.disable();
    } else {
      phone.enable();
      card.disable();
    }
  }

  protected pay(): void {
    this.submitted.set(true);
    if (this.form.invalid || !this.canPay()) {
      return;
    }
    this.paid.emit();
    this.form.reset();
    this.form.controls.card.disable();
    this.form.controls.phone.disable();
    this.submitted.set(false);
  }
}
