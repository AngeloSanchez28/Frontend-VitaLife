import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResponse} from "../models/LoginResponse";
import {UsuarioService} from "./usuario.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MostrarUsuarioService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

  getObtenerDatos(): Observable<LoginResponse> { // Cambiado de Observable<LoginResponse[]>
    const token = localStorage.getItem('token');
    const username = this.usuarioService.getUsername();
    const url = `${environment.host}/usuario/verperfil/${username}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<LoginResponse>(url, { headers }); // Cambiado para esperar un objeto en lugar de un array
  }

}
