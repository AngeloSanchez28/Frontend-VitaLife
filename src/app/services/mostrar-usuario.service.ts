import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResponse} from "../models/LoginResponse";
import {UsuarioService} from "./usuario.service";

@Injectable({
  providedIn: 'root'
})
export class MostrarUsuarioService {
  private apiUrl = 'http://ec2-54-161-49-236.compute-1.amazonaws.com/usuario/verperfil/10';
  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  getObtenerDatos(): Observable<LoginResponse> { // Cambiado de Observable<LoginResponse[]>
    const url = `${this.apiUrl}`;
    const headers = {
      Authorization: `Bearer ${this.usuarioService.getToken()}`,
    };
    return this.http.get<LoginResponse>(url, { headers }); // Cambiado para esperar un objeto en lugar de un array
  }
}
