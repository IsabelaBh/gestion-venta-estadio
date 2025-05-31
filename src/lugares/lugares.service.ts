import { Injectable, NotFoundException } from '@nestjs/common';
import { Lugar } from './entities/lugar.entity';

@Injectable()
export class LugaresService {
  lugares: Lugar[] = [
    new Lugar(1, 'Estadio Central', 2500000),
    new Lugar(2, 'Tribuna Norte', 1500000),
    new Lugar(3, 'Tribuna Sur', 1500000),
    new Lugar(4, 'Palco VIP', 5000000),
    new Lugar(5, 'Zona Familiar', 1000000),
    new Lugar(6, 'Zona General', 750000),
  ];
  contadorId: number = 7;

  findAll() {
    return this.lugares;
  }

  findOne(id: number) {
    const lugar = this.lugares.find((e) => e.id === id);

    if (!lugar) throw new NotFoundException('Lugar no encontrado');

    return lugar;
  }
}
