import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Habito} from "../models/habito";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Titulo} from "../models/titulo";

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  constructor(private http: HttpClient) { }

  getTitulos(): Observable<Titulo[]> {
    const token = localStorage.getItem('token');
    console.log(`token: ${token}`)
    const url = `${environment.host}/titulos/vertitulos`;
    const headers = new HttpHeaders({
      'Content-Type': `application/json`,
      Authorization: `Bearer ${token}`,  // Usar la variable local 'token'
    });

    return this.http.get<Titulo[]>(url,{ headers });
  }

}
