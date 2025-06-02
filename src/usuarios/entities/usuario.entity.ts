export class Usuario {
  id: number;
  nombre: string;
  cedula: string;

  constructor(id: number, nombre: string, cedula: string) {
    this.id = id;
    this.nombre = nombre;
    this.cedula = cedula;
  }
}
