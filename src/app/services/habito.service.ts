import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Habito} from "../models/habito";


@Injectable({
  providedIn: 'root'
})
export class HabitoService {

    private apiUrl= 'http://localhost:8080/habitos/agregar';
    private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OJCYM3dneA07IloOPlPxzaZPGruQ1kBLb1f3HbCIH4FAlvj+96LfWIJUEtPG6oFD8KiT81fqrPHPGh+yBH6B37wOsvT9zge3Lz479qBcg9vrMpOLqbO4eG2773dfK4WzePrraKd4qngwmG3EDFwPMkJb4/S1+9buWOkz/0dqcGBBgY9dByfMq3sY08qVwdcZgFVSAnJDdTgkFj5F4UqUj8J5p5D/lbH0vkg7lxjjfrQPw==';
  constructor(private http: HttpClient) { }

    agregarHabito(nuevoHabito: Habito): Observable<Habito> {
        const url = `${this.apiUrl}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
        });

        return this.http.post<Habito>(url, nuevoHabito, { headers });
    }

  agregarHabitoGrupo(nuevoHabitoGrupo: Habito): Observable<Habito> {
    const url = `${this.apiUrl}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.post<Habito>(url, nuevoHabitoGrupo, { headers });
  }
}
