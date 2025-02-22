import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelComponent } from './components/panel/panel.component'; // Asegúrate de tener este componente
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// Simple AuthGuard para proteger la ruta del panel
const AuthGuard = () => {
  const router = inject(Router) as Router; // Asignación explícita de tipo
  const isAuthenticated = localStorage.getItem('token'); // Verificamos el token en localStorage

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};


export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent) },
  { path: 'panel', loadComponent: () => import('./components/panel/panel.component').then(m => m.PanelComponent), canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

