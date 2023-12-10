import { Component, OnInit } from '@angular/core';
import { MostrarUsuarioService } from "../../../services/mostrar-usuario.service";

@Component({
  selector: 'app-navbar-intranet',
  templateUrl: './navbar-intranet.component.html',
  styleUrls: ['./navbar-intranet.component.scss']
})
export class NavbarIntranetComponent implements OnInit {
  username: string = 'NombreUsuario';
  puntos: number = 0;

  constructor(private mostrarUsuarioService: MostrarUsuarioService  ) { }

  ngOnInit(): void {
    this.getObtenerDatos();
  }

  getObtenerDatos(): void {
    this.mostrarUsuarioService.getObtenerDatos().subscribe(response => {
      console.log(response);
      if (response) {
        this.username = response.username; // Ajusta esto según la estructura real
        this.puntos = response.puntos; // Ajusta esto según la estructura real
      }
    }, error => {
      console.error('Error al obtener datos:', error);
    });

  }

}
