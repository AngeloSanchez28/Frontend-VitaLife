import {Habito} from "./habito";
import {Usuario} from "./usuario";

export interface Marcaje {
  estado: boolean;
  habitosmar: Habito;
  usuariomar: Usuario;
}
