import { Component, input, output } from '@angular/core';
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
  placeholder = input<string>('Busca por ingrediente');
  search = output<string>();

  protected onSearch(term: string): void {
    this.search.emit(term.trim());
  }
}
