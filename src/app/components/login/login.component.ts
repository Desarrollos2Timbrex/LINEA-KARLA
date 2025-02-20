import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.usuario).subscribe(
      res => this.mensaje = '✅ Logueado con éxito!',
      err => this.mensaje = '❌ Error al iniciar sesión.'
    );
  }
}
