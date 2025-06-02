import { Controller, Get, Query } from '@nestjs/common';
import { SistemaCentralizadoService } from './sistema-centralizado.service';

@Controller('sistema-centralizado')
export class SistemaCentralizadoController {
  constructor(
    private readonly sistemaCentralizadoService: SistemaCentralizadoService,
  ) {}

  @Get('asientos-disponibles')
  obtenerAsientosDisponibles(@Query('funcionId') funcionId: number) {
    return this.sistemaCentralizadoService.obtenerAsientosDisponibles(
      funcionId,
    );
  }

  @Get('asientos-vendidos')
  obtenerAsientosVendidos(@Query('funcionId') funcionId: number) {
    return this.sistemaCentralizadoService.obtenerAsientosVendidos(funcionId);
  }

  @Get('ganancias-totales')
  obtenerGananciasTotales(@Query('funcionId') funcionId?: number) {
    return this.sistemaCentralizadoService.obtenerGananciasTotales(funcionId);
  }
}
