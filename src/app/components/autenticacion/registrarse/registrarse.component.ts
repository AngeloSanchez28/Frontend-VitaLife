import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {RegistrarusuarioService} from "../../../services/registrarusuario.service";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['registrarse.component.scss']
})
export class RegistrarseComponent {
  miFormulario: FormGroup;
  mostrarPassword: boolean = false;
  mostrarPasswordConfirmation: boolean = false;
  formularioIncompleto: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: RegistrarusuarioService) {
    this.miFormulario = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      password_confirmation: [''],
      email: ['', [Validators.required, Validators.email]],
    }, { validator: this.passwordMatchValidator });

    // Listener para resetear el mensaje de advertencia cuando hay cambios en el formulario
    this.miFormulario.valueChanges.subscribe(() => {
      this.formularioIncompleto = false;
    });
  }


  passwordMatchValidator(fg: FormGroup): { [key: string]: any } | null {
    const password = fg.get('password')!.value;
    const passwordConfirmation = fg.get('password_confirmation')!.value;
    return password === passwordConfirmation ? null : { 'mismatch': true };
  }

  toggleMostrarPassword() {
    this.mostrarPassword = !this.mostrarPassword;
  }

  toggleMostrarPasswordConfirmation() {
    this.mostrarPasswordConfirmation = !this.mostrarPasswordConfirmation;
  }

  onSubmit() {
    if (this.miFormulario.invalid) {
      this.formularioIncompleto = true;
    } else {
      const usuarioData = {
        usuario: this.miFormulario.value.usuario,
        correo: this.miFormulario.value.email,
        contrasena: this.miFormulario.value.password,
          puntos: 0,
      };

        this.usuarioService.registrarUsuario(usuarioData).subscribe(
            (response) => {
                console.log('Respuesta del servidor:', response);
              this.router.navigate(['/autenticacion/iniciar-sesion']);

            },
            (error) => {
                console.error('Error al registrar el usuario', error);
            }
        );

    }
  }

}


