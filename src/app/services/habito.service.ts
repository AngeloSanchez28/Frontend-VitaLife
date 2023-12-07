import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habito } from '../models/habito';
import {UsuarioService} from "./usuario.service";

@Injectable({
    providedIn: 'root'
})
export class HabitoService {

    private apiUrl = 'http://ec2-54-198-239-231.compute-1.amazonaws.com/habitos/agregar';

    constructor(
        private http: HttpClient,
        private usuarioService: UsuarioService
    ) {}

    agregarHabito(nuevoHabito: Habito): Observable<Habito> {
        const url = `${this.apiUrl}`;
        const headers = this.createHeaders();

        return this.http.post<Habito>(url, nuevoHabito, { headers });
    }

    agregarHabitoGrupo(nuevoHabitoGrupo: Habito): Observable<Habito> {
        const url = `${this.apiUrl}`;
        const headers = this.createHeaders();

        return this.http.post<Habito>(url, nuevoHabitoGrupo, { headers });
    }

    private createHeaders(): HttpHeaders {
        const token = this.usuarioService.getToken();
        return new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
    }
}
