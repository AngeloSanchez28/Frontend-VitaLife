import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from "../../../services/usuario.service";

@Component({
    selector: 'app-iniciar-sesion',
    templateUrl: './iniciar-sesion.component.html',
    styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
    mostrarPassword: boolean = false;
    loginForm: FormGroup;
    formularioIncompleto: boolean = false;

    constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
        this.loginForm = this.formBuilder.group({
            usuario: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(7)]],
        });


        this.loginForm.valueChanges.subscribe(() => {
            this.formularioIncompleto = false;
        });
    }


    toggleMostrarPassword() {
        this.mostrarPassword = !this.mostrarPassword;
    }

    onSubmit()  {
        // Solo establecer formularioIncompleto si el formulario es inválido
        this.formularioIncompleto = this.loginForm.invalid;

        if (this.loginForm.invalid) {
            // No hacer nada más si el formulario es inválido
            return;
        }

        // El formulario es válido, proceder con la autenticación
        const user = {
            username: this.loginForm.value.usuario,
            password: this.loginForm.value.password,
        };
        console.log(user);

        // Llamar al método de inicio de sesión en el servicio
        this.usuarioService.login(user).subscribe(
            (response) => {
                console.log(response);
                localStorage.setItem('token', response.token);
                // Autenticación exitosa, redirigir al usuario
                this.router.navigate(['/intranet/index']);
            },
            (error) => {
                console.error('Error en el inicio de sesión', error);
            }
        );
    }

}
