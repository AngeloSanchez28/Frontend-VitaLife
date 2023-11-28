import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  public showModal: boolean = false;
  showErrorModal: boolean = false;

  public habitosAgregados: string[] = [];
  public nuevoHabito: string = "";
  public indiceHabitoAgregado: number | null = null;
  showModalAprobado: boolean = false;
  showModalPerder: boolean = false;
  tipoMensaje: 'felicidades' | 'perdida' | null = null;


  public habitosEnGrupo: string[] = [];
  public nuevoHabitoEnGrupo: string = "";
  public indiceHabitoEnGrupoActual: number | null = null;
  showModalFelicidades: boolean = false;
  showModalPerdida: boolean = false;
  tipoMensajeModal: 'felicidades' | 'perdida' | null = null;

  public indiceHabitoActual: number | null = null;
  public botonActivo: number | null = null;

  public habitosEstablecidos: string[] = ["Dormir 8 horas", "Comer las 3 comidas al día", "Tomar 9 vasos al día", "Limitar el consumo de alcohol y tabaco", "Realizar 30 minutos de actividad física"];
  public indiceHabitoEstablecido: number | null = null;


  agregarHabito(form: any) {
    if (this.nuevoHabito.trim() !== "") {
      this.habitosAgregados.push(this.nuevoHabito);
      this.nuevoHabito = ""; // Limpia la variable para el próximo input
      form.resetForm(); // Resetea el formulario para limpiar los campos
    }
  }

  agregarHabitoEnGrupo(form: any) {
    if (this.nuevoHabitoEnGrupo.trim() !== "") {
      this.habitosEnGrupo.push(this.nuevoHabitoEnGrupo);
      this.nuevoHabitoEnGrupo = "";
      form.resetForm();
    }
  }

  mostrarModalAprobado(indiceHabito: number) {
    this.showModalAprobado = true;
    this.indiceHabitoAgregado = indiceHabito;
  }

  mostrarModalPerder(indiceHabito: number) {
    this.showModalPerder = true;
    this.indiceHabitoAgregado = indiceHabito;
  }

  eliminarHabitoPersonalizado() {
    if (this.indiceHabitoAgregado !== null) {
      this.habitosAgregados.splice(this.indiceHabitoAgregado, 1);
      this.showModalAprobado = false;
      this.showModalPerder = false;
      this.indiceHabitoAgregado = null;
    }
  }

  mostrarModal(indiceHabito: number, tipoMensaje: 'felicidades' | 'perdida') {
    this.showModal = !this.showModal;
    this.indiceHabitoEstablecido = indiceHabito;
    this.tipoMensajeModal = tipoMensaje;
  }


  borrarHabito() {
    if (this.indiceHabitoEstablecido !== null) {
      this.habitosEstablecidos.splice(this.indiceHabitoEstablecido, 1);
      this.showModal = false;
      this.indiceHabitoEstablecido = null;
    }
  }

  mostrarModalFelicidades(indiceHabito: number) {
    this.showModalFelicidades = true;
    this.indiceHabitoEnGrupoActual = indiceHabito;
  }

  mostrarModalPerdida(indiceHabito: number) {
    this.showModalPerdida = true;
    this.indiceHabitoEnGrupoActual = indiceHabito;
  }

  eliminarHabitoEnGrupo() {
    if (this.indiceHabitoEnGrupoActual !== null) {
      this.habitosEnGrupo.splice(this.indiceHabitoEnGrupoActual, 1);
      this.showModalFelicidades = false;
      this.showModalPerdida = false;
      this.indiceHabitoEnGrupoActual = null;
    }
  }


  habitoPersonal2: HTMLFormElement | null;
  formuPersonal2: HTMLFormElement | null;
  habitoPersonal3: HTMLFormElement | null;
  formuPersonal3: HTMLFormElement | null;

  constructor() {
    this.habitoPersonal2 = null;
    this.formuPersonal2 = null;
    this.habitoPersonal3 = null;
    this.formuPersonal3 = null;
  }

  ngOnInit(): void {
    this.habitoPersonal2 = document.querySelector('#habitoPersonal2') as HTMLFormElement;
    this.formuPersonal2 = document.querySelector('#formuPersonal2') as HTMLFormElement;
    this.habitoPersonal3 = document.querySelector('#habitoPersonal3') as HTMLFormElement;
    this.formuPersonal3 = document.querySelector('#formuPersonal3') as HTMLFormElement;
  }

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

  onSubmitPersonal2(): void {
    // Lógica para procesar el formulario del minicontenedor 2
    if (this.habitoPersonal2 && this.formuPersonal2) {
      const habitoPersonal2Value = this.habitoPersonal2['value'] as string;
      const transaction: TransactionInterface = {
        habitoPersonal: habitoPersonal2Value,
      };
      this.renderTransaction(transaction);
    }
  }

  onSubmitPersonal3(): void {
    // Lógica para procesar el formulario del minicontenedor 3
    if (this.habitoPersonal3 && this.formuPersonal3) {
      const habitoPersonal3Value = this.habitoPersonal3['value'] as string;
      const transaction: TransactionInterface = {
        habitoPersonal: habitoPersonal3Value,
      };
      this.renderTransaction(transaction);
    }
  }


  renderTransaction(transaction: TransactionInterface): void {
    const tableRow = document.createElement('tr');
    const tableDataHabito = document.createElement('td');
    tableDataHabito.textContent = transaction.habitoPersonal;
    tableRow.appendChild(tableDataHabito);
    const tBody = document.querySelector('tbody');
    if (tBody) {
      tBody.prepend(tableRow);
    }
  }
}

interface TransactionInterface {
  habitoPersonal: string;
}
