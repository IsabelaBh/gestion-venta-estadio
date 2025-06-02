import { Injectable } from '@nestjs/common';
import { AsientosService } from 'src/asientos/asientos.service';
import { FuncionesService } from 'src/funciones/funciones.service';
import { VentasService } from 'src/ventas/ventas.service';

@Injectable()
export class SistemaCentralizadoService {
  constructor(
    private readonly asientosSer: AsientosService,
    private readonly ventasSer: VentasService,
    private readonly funcionesSer: FuncionesService,
  ) {}

  obtenerAsientosDisponibles(funcionId: number) {
    let asientos = this.asientosSer.findAll();

    const ventas = this.ventasSer.findAll(funcionId);

    for (const i of ventas) {
      for (const j of i.asientos) {
        asientos = asientos.filter((e) => e !== j);
      }
    }

    return asientos;
  }

  obtenerAsientosVendidos(funcionId: number) {
    const asientos = [];

    const ventas = this.ventasSer.findAll(funcionId);

    for (const i of ventas) {
      for (const j of i.asientos) {
        if (!asientos.includes(j)) asientos.push(j);
      }
    }

    return asientos;
  }

  obtenerGananciasTotales(funcionId?: number) {
    const ventas = this.ventasSer.findAll(funcionId);

    let total: number = 0;
    for (const i of ventas) total += i.total;

    return total;
  }
}
