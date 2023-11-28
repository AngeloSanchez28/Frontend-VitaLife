import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= 'http://localhost:8080/api/usuario';
  private token = '';
  constructor(private http: HttpClient) { }
}
