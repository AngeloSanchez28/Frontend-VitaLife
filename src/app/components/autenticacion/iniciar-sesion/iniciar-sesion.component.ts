import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
  mostrarPassword: boolean = false;
  loginForm: FormGroup;

  toggleMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
      // Puedes agregar más campos si es necesario
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      // Manejar la lógica para cuando el formulario no es válido
      return;
    }
  }
}
