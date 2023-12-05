import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../models/usuario";
import {UsuarioService} from "./usuario.service";

@Injectable({
  providedIn: 'root'
})
export class RegistrarusuarioService {
  private apiUrl = 'http://ec2-54-161-49-236.compute-1.amazonaws.com/usuario/registrar';  // Reemplaza con la URL de tu API

    constructor(private http: HttpClient, private usuarioService: UsuarioService) {}

    registrarUsuario(usuarioData: Usuario): Observable<any> {
        return this.http.post(`${this.usuarioService.getToken()}`, usuarioData);
    }
}

