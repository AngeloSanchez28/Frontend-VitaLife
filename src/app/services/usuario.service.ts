import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import {environment} from "../../environments/environment"; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private username: string | undefined;
  constructor(private http: HttpClient) {}

  login(user: Login): Observable<any> {
      this.username = user.username;
    return this.http.post(`${environment.host}/usuario/login`, user);
  }

  getUsername(): string | undefined {
        return this.username;
  }

}
