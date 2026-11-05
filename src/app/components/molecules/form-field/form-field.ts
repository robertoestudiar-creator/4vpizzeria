import { Component, input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextInput } from '../../atoms/inputs/text-input/text-input';
import { ErrorMessage } from '../../atoms/typography/error-message/error-message';

@Component({
  selector: 'app-form-field',
  imports: [TextInput, ErrorMessage],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  label = input.required<string>();
  inputId = input.required<string>();
  type = input<string>('text');
  control = input.required<FormControl<string>>();
  error = input<string>('');
}
