import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Importa CommonModule

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule], // ✅ Asegúrate de incluirlo aquí
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  // Variable para controlar la vista actual (cobertores o colchas)
  vistaActual: 'cobertores' | 'colchas' = 'cobertores';

  // Método para cambiar la vista
  cambiarVista(vista: 'cobertores' | 'colchas') {
    this.vistaActual = vista;
  }

  // Método para verificar qué botón está activo
  esActivo(vista: 'cobertores' | 'colchas'): boolean {
    return this.vistaActual === vista;
  }
}
