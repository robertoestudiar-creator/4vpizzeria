import { Component, input, output, signal } from '@angular/core';
import { BUTTON_LOCK_MS } from '../button-lock';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss',
})
export class CardButton {
  label = input.required<string>();
  clicked = output<void>();
  protected readonly locked = signal(false);

  onClick(): void {
    if (this.locked()) {
      return;
    }
    this.locked.set(true);
    this.clicked.emit();
    setTimeout(() => this.locked.set(false), BUTTON_LOCK_MS);
  }
}
