import { Component, OnInit, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OrderSummary } from '../../organisms/order-summary/order-summary';
import { DeliveryForm } from '../../organisms/delivery-form/delivery-form';
import { Product } from '../../../models/product';
import { ProductRepository } from '../../../repositories/product-repository';

@Component({
  selector: 'app-formulario-page',
  imports: [RouterLink, OrderSummary, DeliveryForm],
  templateUrl: './index.html',
  styleUrl: './styles.scss',
})
export class FormularioPage implements OnInit {
  private readonly summary = viewChild.required(OrderSummary);

  protected readonly items = signal<Product[]>([]);
  protected readonly thanks = signal(false);

  constructor(private productRepository: ProductRepository) {}

  ngOnInit(): void {
    this.items.set(this.productRepository.findByCategory('pizza'));
  }

  protected onPaid(): void {
    this.items.set([]);
    this.thanks.set(true);
    this.summary().focus();
  }
}
