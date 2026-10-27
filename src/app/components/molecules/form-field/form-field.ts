import { Component, input, model } from '@angular/core';
import { TextInput } from '../../atoms/inputs/text-input/text-input';

@Component({
  selector: 'app-form-field',
  imports: [TextInput],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  label = input.required<string>();
  inputId = input.required<string>();
  type = input<string>('text');
  value = model<string>('');
}
