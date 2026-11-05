import { Component, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderSummary } from '../../organisms/order-summary/order-summary';
import { DeliveryForm } from '../../organisms/delivery-form/delivery-form';
import { CartService } from '../../../services/cart-service';

@Component({
  selector: 'app-formulario-page',
  imports: [RouterLink, OrderSummary, DeliveryForm],
  templateUrl: './index.html',
  styleUrl: './styles.scss',
})
export class FormularioPage {
  private readonly summary = viewChild.required(OrderSummary);
  protected readonly thanks = signal(false);

  constructor(protected cartService: CartService) {}

  protected onPaid(): void {
    this.cartService.clear();
    this.thanks.set(true);
    this.summary().focus();
  }
}
