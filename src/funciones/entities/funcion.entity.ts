export class Funcion {
  id: number;
  nombre: string;
  segundoDia: boolean;
  descuento?: number;

  constructor(
    id: number,
    nombre: string,
    segundoDia: boolean,
    descuento?: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.segundoDia = segundoDia;
    this.descuento = descuento;
  }
}
