import { Component, input, model } from '@angular/core';
import {SearchButton} from '../../atoms/buttons/search-button/search-button';

@Component({
  selector: 'app-search-bar',
  imports: [SearchButton], 
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  inputId = input<string>('search');
  type = input<string>('text');
  value = model<string>('');
} 
