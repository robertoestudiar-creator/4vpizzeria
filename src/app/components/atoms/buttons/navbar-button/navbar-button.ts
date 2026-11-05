import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.html',
  styleUrl: './navbar-button.scss',
})

export class NavbarButton {
  label = input.required<string>();
  active = input<boolean>(false);
  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
