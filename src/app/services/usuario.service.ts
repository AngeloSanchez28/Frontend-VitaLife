import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= '';
  private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OJCYM3dneA07IloOPlPxzaZPGruQ1kBLb1f3HbCIH4FAlvj+96LfWIJUEtPG6oFD8Jy/ScsWMKdMvztkHA8fSanct4QV/xoUAutWwMuOr1a8reuooX4ThvVpowGe1VmZoGBbTDnqmRE4rEC5KjqHCTpZUIGOHGo8Ha6FxsvwjfydBivXX/NVC1In4WGTicD/fQQy6CeA0B/eE+SkHX6TXrSS1gPaqAggmM39X7poEosKw==';

  constructor(private http: HttpClient) {}


  private apiUrl = 'http://localhost:8080/usuario/login'; // Reemplaza con la URL correcta

  constructor(private http: HttpClient) {}
  login(user: Login): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
}
