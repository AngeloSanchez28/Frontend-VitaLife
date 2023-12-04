export interface LoginResponse {
  token: string; // El token JWT generado por el servidor
  usuario: string; // El nombre de usuario del usuario que inició sesión
  // Otras propiedades relevantes de la respuesta
}
