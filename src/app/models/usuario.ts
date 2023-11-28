import {Habito} from "./habito";

export interface Usuario {
    id_usuario: number;
    usuario: String;
    contrasena: String;
    correo: String;
    puntos: number;
    usuariohabi: Habito[];
}
