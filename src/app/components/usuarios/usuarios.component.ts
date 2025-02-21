import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-usuarios',
    imports: [CommonModule, FormsModule],
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  nuevoUsuario = {
    Usuario: '',
    Contrasena: '',
    Apellido_paterno: '',
    Apellido_materno: '',
    Correo: '',
    Numero: null,
    Activo: true
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.apiService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    }, error => {
      console.error('❌ Error al cargar usuarios:', error);
    });
  }

  agregarUsuario() {
    this.apiService.addUsuario(this.nuevoUsuario).subscribe(() => {
      this.cargarUsuarios();
      this.nuevoUsuario = {
        Usuario: '',
        Contrasena: '',
        Apellido_paterno: '',
        Apellido_materno: '',
        Correo: '',
        Numero: null,
        Activo: true
      };
    }, error => {
      console.error('❌ Error al agregar usuario:', error);
    });
  }
}
