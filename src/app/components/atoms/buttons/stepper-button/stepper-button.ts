import { Component, input, output, signal } from '@angular/core';
import { BUTTON_LOCK_MS } from '../button-lock';

@Component({
  selector: 'app-stepper-button',
  templateUrl: './stepper-button.html',
  styleUrl: './stepper-button.scss',
})
export class StepperButton {
  label = input.required<string>();
  ariaLabel = input.required<string>();
  disabled = input<boolean>(false);
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
