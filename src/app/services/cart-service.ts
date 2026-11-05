import { Injectable, computed, signal } from '@angular/core';
import { CartLine } from '../models/cart';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly lines = signal<CartLine[]>([]);
  readonly cartLines = this.lines.asReadonly();
  readonly count = computed(() => this.lines().reduce((total, line) => total + line.quantity, 0));

  addLine(line: CartLine): void {
    const lines = this.lines();
    const existing = lines.find((current) => current.product === line.product);
    if (existing) {
      this.lines.set(
        lines.map((current) =>
          current === existing ? new CartLine(current.product, current.quantity + line.quantity) : current,
        ),
      );
    } else {
      this.lines.set([...lines, line]);
    }
  }

  clear(): void {
    this.lines.set([]);
  }
}
