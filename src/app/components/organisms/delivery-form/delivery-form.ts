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

  get time() {
    return this.form.controls.time;
  }

  get address() {
    return this.form.controls.address;
  }

  get paymentMethod() {
    return this.form.controls.paymentMethod;
  }

  get card() {
    return this.form.controls.card;
  }

  get phone() {
    return this.form.controls.phone;
  }

  protected selectMethod(method: PaymentMethod): void {
    this.paymentMethod.setValue(method);
    if (method === 'card') {
      this.card.enable();
      this.phone.disable();
    } else {
      this.phone.enable();
      this.card.disable();
    }
  }

  protected pay(): void {
    this.submitted.set(true);
    this.form.markAllAsTouched();
    if (this.form.invalid || !this.canPay()) {
      return;
    }
    this.paid.emit();
    this.form.reset();
    this.card.disable();
    this.phone.disable();
    this.submitted.set(false);
  }
}
