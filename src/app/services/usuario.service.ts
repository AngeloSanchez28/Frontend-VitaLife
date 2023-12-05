import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl= '';
  private token = 'Mp9ox0pHtshkmgptH/c3xA9yEOqhLONVyeiStw8l5OJCYM3dneA07IloOPlPxzaZPGruQ1kBLb1f3HbCIH4FAlvj+96LfWIJUEtPG6oFD8Jy/ScsWMKdMvztkHA8fSanct4QV/xoUAutWwMuOr1a8reuooX4ThvVpowGe1VmZoGBbTDnqmRE4rEC5KjqHCTpZUIGOHGo8Ha6FxsvwjfydBivXX/NVC1In4WGTicD/fQQy6CeA0B/eE+SkHX6TXrSS1gPaqAggmM39X7poEosKw==';

  constructor(private http: HttpClient) {}


}
