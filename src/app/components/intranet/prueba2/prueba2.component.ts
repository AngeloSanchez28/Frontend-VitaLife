import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../../../models/usuario";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.scss']
})
export class Prueba2Component implements OnInit {
  @Input() usuarioId: number=0;
  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuario(this.usuarioId)
        .subscribe(usuario => this.usuario = usuario);
  }
}
