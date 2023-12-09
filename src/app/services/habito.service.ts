import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habito } from '../models/habito';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HabitoService {

    constructor(private http: HttpClient) {
    }

    agregarHabito(nuevoHabito: Habito): Observable<Habito> {
        const token = localStorage.getItem('token');
        console.log(`token: ${token}`)
        const url = `${environment.host}/habitos/agregar`;
        const headers = new HttpHeaders({
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`,  // Usar la variable local 'token'
        });

        return this.http.post<Habito>(url, nuevoHabito, { headers });
    }

    agregarHabitoGrupo(nuevoHabitoGrupo: Habito): Observable<Habito> {
        const token = localStorage.getItem('token');
        console.log(`token: ${token}`)
        const url = `${environment.host}/habitos/agregar`;
        const headers = new HttpHeaders({
            'Content-Type': `application/json`,
            Authorization: `Bearer ${token}`,  // Usar la variable local 'token'
        });

        return this.http.post<Habito>(url, nuevoHabitoGrupo, { headers });
    }
}
