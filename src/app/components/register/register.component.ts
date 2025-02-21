import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuario = {
    usuario: '',
    contrasena: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo: '',
    numero: '',
    activo: true
  };

  mensaje: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.usuario).subscribe({
      next: () => this.mensaje = '✅ Registro exitoso!',
      error: () => this.mensaje = '❌ Error al registrar usuario.'
    });
  }
}
