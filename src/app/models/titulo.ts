import {Habito} from "./habito";

export interface Titulo {
    id_titulo: number;
    nombretitulo: String;
    puntosrequeridostitulo: number;
    niveltitulo: String;
    progresotitulo: number;
    obtenidotitulo: Boolean;
    usuariohabi: Habito[];
}
