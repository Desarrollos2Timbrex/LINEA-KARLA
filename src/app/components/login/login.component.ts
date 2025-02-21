import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario = {
    usuario: '',
    contrasena: ''
  };

  mensaje: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.usuario).subscribe({
      next: (res) => {
        this.mensaje = '✅ Logueado con éxito!';

        // Guardar token o sesión (simplificado con localStorage)
        localStorage.setItem('token', 'mock-token'); // Aquí deberías guardar un token real si lo manejas

        // Redirigir al panel
        this.router.navigate(['/panel']);
      },
      error: () => this.mensaje = '❌ Error al iniciar sesión.'
    });
  }
}

