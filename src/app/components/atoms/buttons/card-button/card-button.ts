import { Component, input, output, signal } from '@angular/core';
import { runLocked } from '../button-lock';

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
    runLocked(this.locked, () => this.clicked.emit());
  }
}
