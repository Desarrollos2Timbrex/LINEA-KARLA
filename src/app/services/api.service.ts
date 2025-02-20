import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:3001/usuarios';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  // Agregar un nuevo usuario
  addUsuario(usuario: any): Observable<any> {
    return this.http.post(this.API_URL, usuario);
  }
}

