import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirige a 'panel' en lugar de 'body'
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];
 