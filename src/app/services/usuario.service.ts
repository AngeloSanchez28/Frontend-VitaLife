import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= 'http://100.24.28.180/usuario/verperfil/1';
  private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OKQD43tsjM4Rm0zJbFTa9VZIhZzPvdLXrXKsz5CxSWzxtl9TW8FuWiwN7YoI28SDPH2lmmHSlpnwf9hY916IjPVpnmpZx7Pc8H+yFwyDDJQw/nOlxTkmU7tmIJ+NZAyKLI5EYmkGGFxDmCnnAud02ybuvEPFV8A9u7WPdmP8gDnRTeKTY3lmbBclNuyU5J0Mh6SkO9opmonwJbLIOEiyD7Od+Tq+ax599xbv0EZBjv/Vw==';

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
