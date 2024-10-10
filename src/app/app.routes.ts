import { Routes } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { RemesasComponent } from './pages/remesas/remesas.component';

export const routes: Routes = [
  { path: '', component: CalculadoraComponent }, // Página principal
  { path: 'remesas', component: RemesasComponent }, // Página "Sobre nosotros"
  { path: '**', redirectTo: '' } // Redirige a la página principal si la ruta no existe
];