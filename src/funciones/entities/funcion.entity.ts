export enum EstadosEnum {
  EN_PROCESO_VENTA = 'En Proceso de Venta',
  FUNCION_INICIADA = 'Funcion Iniciada',
  FUNCION_FINALIZADA = 'Funcion Finalizada',
}

export class Funcion {
  id: number;
  nombre: string;
  segundoDia: boolean;
  descuento?: number;
  estado: EstadosEnum;

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
    this.estado = EstadosEnum.EN_PROCESO_VENTA;
  }

  empezarFuncion(): void {
    this.estado = EstadosEnum.FUNCION_INICIADA;
  }

  finalizarFuncion(): void {
    this.estado = EstadosEnum.FUNCION_FINALIZADA;
  }
}
