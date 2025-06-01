import { Injectable, NotFoundException } from '@nestjs/common';
import { Asiento } from './entities/asiento.entity';
import { LugaresService } from 'src/lugares/lugares.service';

@Injectable()
export class AsientosService {
  asientos: Asiento[] = [
    new Asiento(1, '1-1', this.lugaresSer.findOne(1)), // Estadio Central
    new Asiento(2, '1-2', this.lugaresSer.findOne(1)),
    new Asiento(3, '1-3', this.lugaresSer.findOne(1)),
    new Asiento(4, '1-4', this.lugaresSer.findOne(1)),
    new Asiento(5, '1-5', this.lugaresSer.findOne(1)),
    new Asiento(6, '1-6', this.lugaresSer.findOne(1)),
    new Asiento(7, '1-7', this.lugaresSer.findOne(1)),
    new Asiento(8, '1-8', this.lugaresSer.findOne(1)),
    new Asiento(9, '1-9', this.lugaresSer.findOne(1)),
    new Asiento(10, '1-10', this.lugaresSer.findOne(1)),
    new Asiento(11, '2-1', this.lugaresSer.findOne(2)), // Tribuna Norte
    new Asiento(12, '2-2', this.lugaresSer.findOne(2)),
    new Asiento(13, '2-3', this.lugaresSer.findOne(2)),
    new Asiento(14, '2-4', this.lugaresSer.findOne(2)),
    new Asiento(15, '2-5', this.lugaresSer.findOne(2)),
    new Asiento(16, '2-6', this.lugaresSer.findOne(2)),
    new Asiento(17, '2-7', this.lugaresSer.findOne(2)),
    new Asiento(18, '2-8', this.lugaresSer.findOne(2)),
    new Asiento(19, '2-9', this.lugaresSer.findOne(2)),
    new Asiento(20, '2-10', this.lugaresSer.findOne(2)),
    new Asiento(21, '3-1', this.lugaresSer.findOne(3)), // Tribuna Sur
    new Asiento(22, '3-2', this.lugaresSer.findOne(3)),
    new Asiento(23, '3-3', this.lugaresSer.findOne(3)),
    new Asiento(24, '3-4', this.lugaresSer.findOne(3)),
    new Asiento(25, '3-5', this.lugaresSer.findOne(3)),
    new Asiento(26, '3-6', this.lugaresSer.findOne(3)),
    new Asiento(27, '3-7', this.lugaresSer.findOne(3)),
    new Asiento(28, '3-8', this.lugaresSer.findOne(3)),
    new Asiento(29, '3-9', this.lugaresSer.findOne(3)),
    new Asiento(30, '3-10', this.lugaresSer.findOne(3)),
    new Asiento(31, '4-1', this.lugaresSer.findOne(4)), // Palco VIP
    new Asiento(32, '4-2', this.lugaresSer.findOne(4)),
    new Asiento(33, '4-3', this.lugaresSer.findOne(4)),
    new Asiento(34, '4-4', this.lugaresSer.findOne(4)),
    new Asiento(35, '4-5', this.lugaresSer.findOne(4)),
    new Asiento(36, '4-6', this.lugaresSer.findOne(4)),
    new Asiento(37, '4-7', this.lugaresSer.findOne(4)),
    new Asiento(38, '4-8', this.lugaresSer.findOne(4)),
    new Asiento(39, '4-9', this.lugaresSer.findOne(4)),
    new Asiento(40, '4-10', this.lugaresSer.findOne(4)),
    new Asiento(41, '5-1', this.lugaresSer.findOne(5)), // Zona Familiar
    new Asiento(42, '5-2', this.lugaresSer.findOne(5)),
    new Asiento(43, '5-3', this.lugaresSer.findOne(5)),
    new Asiento(44, '5-4', this.lugaresSer.findOne(5)),
    new Asiento(45, '5-5', this.lugaresSer.findOne(5)),
    new Asiento(46, '5-6', this.lugaresSer.findOne(5)),
    new Asiento(47, '5-7', this.lugaresSer.findOne(5)),
    new Asiento(48, '5-8', this.lugaresSer.findOne(5)),
    new Asiento(49, '5-9', this.lugaresSer.findOne(5)),
    new Asiento(50, '5-10', this.lugaresSer.findOne(5)),
    new Asiento(51, '6-1', this.lugaresSer.findOne(6)), // Zona General
    new Asiento(52, '6-2', this.lugaresSer.findOne(6)),
    new Asiento(53, '6-3', this.lugaresSer.findOne(6)),
    new Asiento(54, '6-4', this.lugaresSer.findOne(6)),
    new Asiento(55, '6-5', this.lugaresSer.findOne(6)),
    new Asiento(56, '6-6', this.lugaresSer.findOne(6)),
    new Asiento(57, '6-7', this.lugaresSer.findOne(6)),
    new Asiento(58, '6-8', this.lugaresSer.findOne(6)),
    new Asiento(59, '6-9', this.lugaresSer.findOne(6)),
    new Asiento(60, '6-10', this.lugaresSer.findOne(6)),
  ];

  constructor(private readonly lugaresSer: LugaresService) {}

  findAll() {
    return this.asientos;
  }

  findOne(id: number) {
    const asiento = this.asientos.find((e) => e.id === id);

    if (!asiento) throw new NotFoundException('Asiento no encontrado');

    return asiento;
  }
}
