import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.html',
  styleUrl: './text-input.scss',
})
export class TextInput {
  inputId = input.required<string>();
  type = input<string>('text');
  value = model<string>('');
}
