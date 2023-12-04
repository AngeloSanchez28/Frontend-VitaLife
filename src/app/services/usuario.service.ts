import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= '';
  private token = '';

  constructor(private http: HttpClient) {}

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}`;
    console.log(url);
    console.log(this.token);
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<Usuario>(url, { headers });
  }

}
