import { Controller, Get, Param } from '@nestjs/common';
import { AsientosService } from './asientos.service';

@Controller('asientos')
export class AsientosController {
  constructor(private readonly asientosService: AsientosService) {}

  @Get()
  findAll() {
    return this.asientosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asientosService.findOne(+id);
  }
}
