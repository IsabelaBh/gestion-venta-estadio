export class Usuario {
  id: number;
  nombre: string;
  cedula: string;
  descuento?: number;

  constructor(id: number, nombre: string, cedula: string, descuento?: number) {
    this.id = id;
    this.nombre = nombre;
    this.cedula = cedula;
    this.descuento = descuento;
  }
}
