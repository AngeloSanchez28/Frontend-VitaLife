import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= 'https://100.24.28.180/usuario/verperfil/1';
  private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OKQD43tsjM4Rm0zJbFTa9VZIhZzPvdLXrXKsz5CxSWzxtl9TW8FuWiwN7YoI28SDPGWhJb3Kh34CxKiLrDi2ZYx1e+HAzDTEmETAZV7i+CCDYJnOFHhF8Lrqwdsq/GhrqFr1ql7P0bj9tDNXVxmM1zXKSmLYeDfEowgUNCjjc0od87fbK9RpxIyW9XJu31im/AAu5rFnIgwR/GP2/VA5V+iZtO29PtLWbD6FSeaX0W5sg==';

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
