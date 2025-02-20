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
    contraseña: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo: '',
    numero: '',
    activo: true
  };

  mensaje: string = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.usuario).subscribe(
      res => {
        this.mensaje = '✅ Registro exitoso!';
        console.log(res);
      },
      err => {
        this.mensaje = '❌ Error al registrar.';
        console.error(err);
      }
    );
  }
}

