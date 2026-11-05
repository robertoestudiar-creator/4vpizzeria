import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.html',
  styleUrl: './search-button.scss',
})

export class SearchButton {
  label = input.required<string>();
  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
