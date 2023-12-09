import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from "../models/usuario";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrarusuarioService {

    constructor(private http: HttpClient) {}

    registrarUsuario(usuarioData: Usuario): Observable<any> {
        return this.http.post(`${environment.host}/usuario/registrar`, usuarioData);
    }
}

