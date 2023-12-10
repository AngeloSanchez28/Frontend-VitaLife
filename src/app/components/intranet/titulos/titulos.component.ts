import {Component, OnInit} from '@angular/core';
import {TituloService} from "../../../services/titulo.service";
import {Titulo} from "../../../models/titulo";
import {MostrarUsuarioService} from "../../../services/mostrar-usuario.service";

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})

export class TitulosComponent implements OnInit {
  titulos: Titulo[] = [];
  username: string = 'NombreUsuario';
  correo: string = 'Correo';

  constructor(private tituloService: TituloService,  private mostrarUsuarioService: MostrarUsuarioService  ) {}

  ngOnInit(): void {
    this.ObtenerUsuario();
    this.tituloService.getTitulos().subscribe((titulos) => {
      this.titulos = titulos;
    });
  }

  getNivelImagen(nivel: string): string {

    if (nivel === 'Oro') {
      return '../assets/oro.png';
    } else if (nivel === 'Plata') {
      return '../assets/plata.png';
    } else if (nivel === 'Bronce') {
      return '../assets/bronce.png';
    } else {
      // Devuelve una imagen por defecto o maneja el caso según tu lógica
      return '../assets/default.png';
    }
  }

  getProgresoPorcentaje(progreso: number | null, limite: number | null): string {
    if (progreso === null || limite === null || limite === 0) {
      return '0%';
    }

    const porcentaje = (progreso / limite) * 100;
    return `${porcentaje}%`;
  }

  ObtenerUsuario(): void {

    this.mostrarUsuarioService.getObtenerDatos().subscribe(response => {
      console.log(response);
      if (response) {
        this.username = response.username; // Ajusta esto según la estructura real
        this.correo = response.correo; // Ajusta esto según la estructura real
      }
    }, error => {
      console.error('Error al obtener datos:', error);
    });


  }

}
