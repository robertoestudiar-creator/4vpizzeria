import { Routes } from '@angular/router';
import { MenuPage } from './components/pages/menu/scripts';
import { FormularioPage } from './components/pages/formulario/scripts';

export const routes: Routes = [
  { path: '', component: MenuPage },
  { path: 'formulario', component: FormularioPage },
];
