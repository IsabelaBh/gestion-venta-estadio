import { Lugar } from 'src/lugares/entities/lugar.entity';

export class Asiento {
  id: number;
  asientoId: string;
  lugar: Lugar;

  constructor(id: number, asientoId: string, lugar: Lugar) {
    this.id = id;
    this.asientoId = asientoId;
    this.lugar = lugar;
  }
}
