import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Login } from '../models/login'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://ec2-54-198-239-231.compute-1.amazonaws.com/usuario/login'; // Reemplaza con la URL correcta
  private authLocalStorageKey = 'AUTH_TOKEN';

  constructor(private http: HttpClient) {}

  login(user: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user).pipe(
        tap((response: any) => {
          // Almacena el token en el almacenamiento local al autenticarse
          if (response && response.token) {
            this.setToken(response.token);
          }
        })
    );
  }

  logout(): void {
    // Elimina el token del almacenamiento local al cerrar sesión
    this.removeToken();
  }

  isAuthenticated(): boolean {
    // Verifica si hay un token en el almacenamiento local para determinar si el usuario está autenticado
    return !!this.getToken();
  }

  private setToken(token: string): void {
    localStorage.setItem(this.authLocalStorageKey, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(this.authLocalStorageKey);
  }

  private removeToken(): void {
    localStorage.removeItem(this.authLocalStorageKey);
  }
}
