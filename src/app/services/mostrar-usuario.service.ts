import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginResponse} from "../models/LoginResponse";

@Injectable({
  providedIn: 'root'
})
export class MostrarUsuarioService {
  private apiUrl = 'http://localhost:8080/usuario/verperfil/10';
  private token = "Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OJ3LRsTvwNifKoL0NAIozCzrdTlMPNUyKc+1u9Oy0JmloLzemc/Fah6I8a4Ei4vYnsf0y8i59On/++AJFJVQhbt+sVB8A2ramZjygW946lOPjD6rPl78QV2GJ7UE14Ra57xFRDAbCdxlauAiae/smmbQ+N+zgYgaLeHBqZoGmTFhFAWZVVYg6Oa3gOxbVSrU1WQRc+GLz6X4WiUbxwF7CQWRjrcWLS4VKfR0kZGjVx2fm0E5xt1qQ7wABMfFxB66JE="
  constructor(private http: HttpClient) {}

  getObtenerDatos(): Observable<LoginResponse> { // Cambiado de Observable<LoginResponse[]>
    const url = `${this.apiUrl}`;
    const headers = {
      Authorization: `Bearer ${this.token}`,
    };
    return this.http.get<LoginResponse>(url, { headers }); // Cambiado para esperar un objeto en lugar de un array
  }
}
