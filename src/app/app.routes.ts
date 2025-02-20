import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a 'panel' en lugar de 'body'
  { path: '**', redirectTo: '' }
];
