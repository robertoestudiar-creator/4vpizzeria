import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.html',
  styleUrl: './radio-option.scss',
})
export class RadioOption {
  inputId = input.required<string>();
  name = input.required<string>();
  label = input.required<string>();
  checked = input<boolean>(false);
  selected = output<void>();

  onChange(): void {
    this.selected.emit();
  }
}
