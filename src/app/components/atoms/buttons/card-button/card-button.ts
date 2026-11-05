import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.html',
  styleUrl: './card-button.scss',
})
export class CardButton {
  label = input.required<string>();
  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
