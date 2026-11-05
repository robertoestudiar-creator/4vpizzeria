import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardButton } from '../../atoms/buttons/card-button/card-button';
import { FormField } from '../../molecules/form-field/form-field';

@Component({
  selector: 'app-order-form',
  imports: [FormField, CardButton],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
})
export class OrderForm {
  protected readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    phone: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
  });

  protected submit(): void {
    console.log('Pedido:', this.form.getRawValue());
  }
}
