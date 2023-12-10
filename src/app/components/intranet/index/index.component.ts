import {Component, OnInit} from '@angular/core';
import {HabitoService} from "../../../services/habito.service";
import {Habito} from "../../../models/habito";
import {MostrarUsuarioService} from "../../../services/mostrar-usuario.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    username: string = 'NombreUsuario';
    correo: string = 'Correo';

    ngOnInit(): void {
        this.ObtenerUsuario();
    }

  constructor( private habitoService: HabitoService, private mostrarUsuarioService: MostrarUsuarioService  ) {

    this.habitoPersonal2 = null;
    this.formuPersonal2 = null;
    this.habitoPersonal3 = null;
    this.formuPersonal3 = null;
  }

  public showModal: boolean = false;

  public habitosAgregados: string[] = [];
  public nuevoHabito: string = "";
  public indiceHabitoAgregado: number | null = null;
  showModalAprobado: boolean = false;
  showModalPerder: boolean = false;


  public habitosEnGrupo: string[] = [];
  public nuevoHabitoEnGrupo: string = "";
  public indiceHabitoEnGrupoActual: number | null = null;
  showModalFelicidades: boolean = false;
  showModalPerdida: boolean = false;
  tipoMensajeModal: 'felicidades' | 'perdida' | null = null;


  public botonActivo: number | null = null;

  public habitosEstablecidos: string[] = ["Dormir 8 horas", "Comer las 3 comidas al día", "Tomar 9 vasos al día", "Limitar el consumo de alcohol y tabaco", "Realizar 30 minutos de actividad física"];
  public indiceHabitoEstablecido: number | null = null;


    agregarHabito(form: any) {
        const nuevoHabitoValor = this.nuevoHabito; // Almacenar el valor en una variable local

        console.log("Nuevo Hábito:", nuevoHabitoValor);

        if (nuevoHabitoValor && nuevoHabitoValor.trim() !== "") {
            // Construir el objeto Habito
            const nuevoHabito: Habito = {
                nombreHabito: nuevoHabitoValor, // Usar la variable local aquí
                puntosrecompensahabito: 10,
                tipohabito: 'Personalizado'
            };

            // Llamar al servicio para agregar el hábito en la base de datos
            this.habitoService.agregarHabito(nuevoHabito).subscribe(
                response => {
                    console.log('Hábito agregado exitosamente:', response);

                    // Agregar el hábito al array local 'habitosAgregados'
                    this.habitosAgregados.push(nuevoHabitoValor);

                    // Limpiar la variable para el próximo input
                    this.nuevoHabito = "";

                    // Resetea el formulario para limpiar los campos
                    form.resetForm();

                    const responseObject = { success: true, message: 'Hábito agregado exitosamente' };
                    // Puedes realizar otras acciones después de agregar el hábito si es necesario
                    return responseObject;
                },
                error => {
                    console.error('Error al agregar hábito:', error);
                    const errorResponse = { success: false, message: 'Error al agregar hábito' };
                    // Puedes manejar el error aquí si lo necesitas
                    return errorResponse;
                }
            );
        }
    }


    agregarHabitoEnGrupo(form: any) {
        const nuevoHabitoValor = this.nuevoHabitoEnGrupo; // Almacenar el valor en una variable local

        console.log("Nuevo Hábito:", nuevoHabitoValor);

        if (nuevoHabitoValor && nuevoHabitoValor.trim() !== "") {
            // Construir el objeto Habito
            const nuevoHabitoEnGrupo: Habito = {
                nombreHabito: nuevoHabitoValor, // Usar la variable local aquí
                puntosrecompensahabito: 10,
                tipohabito: 'En Grupo'
            };

            // Llamar al servicio para agregar el hábito en el grupo en la base de datos
            this.habitoService.agregarHabitoGrupo(nuevoHabitoEnGrupo).subscribe(
                response => {
                    console.log('Hábito en Grupo agregado exitosamente:', response);

                    // Agregar el hábito al array local 'habitosEnGrupo'
                    this.habitosEnGrupo.push(nuevoHabitoValor);

                    // Limpiar la variable para el próximo input
                    this.nuevoHabitoEnGrupo = "";

                    // Resetea el formulario para limpiar los campos
                    form.resetForm();

                    const responseObject = { success: true, message: 'Hábito en Grupo agregado exitosamente' };
                    // Puedes realizar otras acciones después de agregar el hábito si es necesario
                    return responseObject;
                },
                error => {
                    console.error('Error al agregar hábito en Grupo:', error);
                    const errorResponse = { success: false, message: 'Error al agregar hábito en Grupo' };
                    // Puedes manejar el error aquí si lo necesitas
                    return errorResponse;
                }
            );
        }
    }

    mostrarModal(indiceHabito: number, tipoMensaje: 'felicidades' | 'perdida') {
        this.showModal = !this.showModal;
        this.indiceHabitoEstablecido = indiceHabito;
        this.tipoMensajeModal = tipoMensaje;


    }

  mostrarModalAprobado(indiceHabito: number) {
    this.showModalAprobado = true;
    this.indiceHabitoAgregado = indiceHabito;
  }

  mostrarModalPerder(indiceHabito: number) {
    this.showModalPerder = true;
    this.indiceHabitoAgregado = indiceHabito;
  }

    mostrarModalFelicidades(indiceHabito: number) {
        this.showModalFelicidades = true;
        this.indiceHabitoEnGrupoActual = indiceHabito;
    }

    mostrarModalPerdida(indiceHabito: number) {
        this.showModalPerdida = true;
        this.indiceHabitoEnGrupoActual = indiceHabito;
    }

  eliminarHabitoPersonalizado() {
    if (this.indiceHabitoAgregado !== null) {
      this.habitosAgregados.splice(this.indiceHabitoAgregado, 1);
      this.showModalAprobado = false;
      this.showModalPerder = false;
      this.indiceHabitoAgregado = null;
    }
  }

  eliminarHabitoEnGrupo() {
    if (this.indiceHabitoEnGrupoActual !== null) {
      this.habitosEnGrupo.splice(this.indiceHabitoEnGrupoActual, 1);
      this.showModalFelicidades = false;
      this.showModalPerdida = false;
      this.indiceHabitoEnGrupoActual = null;
    }
  }

    borrarHabito() {
        if (this.indiceHabitoEstablecido !== null) {
            this.habitosEstablecidos.splice(this.indiceHabitoEstablecido, 1);
            this.showModal = false;
            this.indiceHabitoEstablecido = null;
        }
    }


  habitoPersonal2: HTMLFormElement | null;
  formuPersonal2: HTMLFormElement | null;
  habitoPersonal3: HTMLFormElement | null;
  formuPersonal3: HTMLFormElement | null;
  habito2(): void {
    this.botonActivo = 2;
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'block';
      minicontenedor1.style.display = 'none';
      minicontenedor3.style.display = 'none';
    }
  }

  habito1(): void {
    this.botonActivo = 1;
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'none';
      minicontenedor1.style.display = 'block';
      minicontenedor3.style.display = 'none';
    }
  }

  habito3(): void {
    this.botonActivo = 3;
    const minicontenedor2 = document.getElementById('minicontenedor2');
    const minicontenedor1 = document.getElementById('minicontenedor1');
    const minicontenedor3 = document.getElementById('minicontenedor3');
    if (minicontenedor2 && minicontenedor1 && minicontenedor3) {
      minicontenedor2.style.display = 'none';
      minicontenedor1.style.display = 'none';
      minicontenedor3.style.display = 'block';
    }
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

