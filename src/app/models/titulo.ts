import {Habito} from "./habito";

export interface Titulo {
    id_titulo: number;
    descripcion: null;
    nombretitulo: string;
    puntosrequeridostitulo: number;
    niveltitulo: string;
    progresotitulo: number;
    obtenidotitulo: boolean;
    usuariohabi: Habito[];

}
