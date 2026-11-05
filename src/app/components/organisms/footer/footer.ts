import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  title = input<string>('4vPizzeria');
  protected readonly year = new Date().getFullYear();
}
