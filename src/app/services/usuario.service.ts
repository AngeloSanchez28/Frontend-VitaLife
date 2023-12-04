import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:8080/usuario/login'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) {}
  login(user: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
}
