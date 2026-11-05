import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  control = input.required<FormControl<string>>();
  invalid = input<boolean>(false);
}
