import { Component, signal } from '@angular/core';
import { CardButton } from '../../atoms/buttons/card-button/card-button';
import { FormField } from '../../molecules/form-field/form-field';

@Component({
  selector: 'app-order-form',
  imports: [FormField, CardButton],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss',
})
export class OrderForm {
  protected name = signal('');
  protected phone = signal('');
  protected address = signal('');

  protected submit(): void {
    console.log('Pedido:', this.name(), this.phone(), this.address());
  }
}
