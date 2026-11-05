import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/organisms/header/header';
import { Footer } from './components/organisms/footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}
