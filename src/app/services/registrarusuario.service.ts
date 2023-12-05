import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class RegistrarusuarioService {
  private apiUrl = 'http://localhost:8080/usuario/registrar';  // Reemplaza con la URL de tu API

    constructor(private http: HttpClient) {}

    registrarUsuario(usuarioData: Usuario): Observable<any> {
        return this.http.post(`${this.apiUrl}`, usuarioData);
    }
}

