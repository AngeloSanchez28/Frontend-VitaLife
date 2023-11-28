import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= 'http://localhost:8080/api/habito';
  private token = '';

  constructor(private http: HttpClient) {}

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.apiUrl}/usuarios/${id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<Usuario>(url);
  }

}
