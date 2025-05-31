import { Controller, Get, Param } from '@nestjs/common';
import { LugaresService } from './lugares.service';

@Controller('lugares')
export class LugaresController {
  constructor(private readonly lugaresService: LugaresService) {}

  @Get()
  findAll() {
    return this.lugaresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lugaresService.findOne(+id);
  }
}
