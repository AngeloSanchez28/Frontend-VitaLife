import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Login } from '../models/login'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://ec2-54-161-49-236.compute-1.amazonaws.com/usuario/login'; // Reemplaza con la URL correcta
  private token: string | null = null;

  constructor(private http: HttpClient) {}
  login(user: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }
}
