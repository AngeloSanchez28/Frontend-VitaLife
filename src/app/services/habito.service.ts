import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Habito} from "../models/habito";

@Injectable({
  providedIn: 'root'
})
export class HabitoService {

    private apiUrl= 'http://localhost:8080/api/habito';
    private token = '';
  constructor(private http: HttpClient) { }

    getAllHabitosByUser(): Observable<Habito[]> {
        const url = `${this.apiUrl}`;
        const headers = new HttpHeaders({
            Authorization: `Bearer ${this.token}`,
        });

        return this.http.get<Habito[]>(url, { headers });
    }
}
