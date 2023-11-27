import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  miFormulario: FormGroup;
  mostrarPassword: boolean = false;
  mostrarPasswordConfirmation: boolean = false;
  formularioIncompleto: boolean = false;
  nombreArchivo: string = ''; // Variable para almacenar el nombre del archivo


  noEspacioInicial(control: FormControl): { [key: string]: any } | null {
    const esPrimerCaracterEspacio = control.value ? control.value.startsWith(' ') : false;
    return esPrimerCaracterEspacio ? { 'espacioInicial': true } : null;
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.nombreArchivo = file.name; // Guarda el nombre del archivo
    }
  }

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.miFormulario = this.formBuilder.group({
      nombre_apellido: ['', [Validators.required, this.noEspacioInicial]],
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: [''],
      email: ['', [Validators.required, Validators.email]],
      foto: [null, Validators.required],
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
      this.formularioIncompleto = true; // Muestra el mensaje de advertencia
    } else {
      this.formularioIncompleto = false;

      // Suponiendo que el procesamiento del formulario fue exitoso, redirigir al usuario a la página de inicio de sesión
      this.router.navigate(['login']); // Asegúrate de reemplazar '/ruta-inicio-sesion' con la ruta correcta
    }
  }

}


