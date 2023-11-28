import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= 'http://100.24.28.180/usuario/verperfil/1';
  private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OKQD43tsjM4Rm0zJbFTa9VZIhZzPvdLXrXKsz5CxSWzxtl9TW8FuWiwN7YoI28SDPE3aXcN7Yoo1oUO33jpE2NsJcWFw2vl2UmMeLBj+d2fvTkYY8KcRwp0UFitzt4GFidaaMqd/omCZDxae0i99VLlku8D1/VvlkuEQdj5ysQuDTDKQ027M5LnzEiRMQfOi8VNWL7OolDCRlQjq0kAvPKaslID4H6WpPUwLpIQkIACQg==';

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
