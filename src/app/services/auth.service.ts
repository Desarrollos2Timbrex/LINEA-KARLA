import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3001'; // URL del backend Node.js

  constructor(private http: HttpClient) {}

  // Registrar usuario
  register(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, usuario);
  }

  // Loguear usuario
  login(usuario: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, usuario);
  }
}
