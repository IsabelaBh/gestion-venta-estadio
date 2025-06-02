import { Module } from '@nestjs/common';
import { AsientosService } from './asientos.service';
import { AsientosController } from './asientos.controller';
import { LugaresModule } from 'src/lugares/lugares.module';

@Module({
  imports: [LugaresModule],
  controllers: [AsientosController],
  providers: [AsientosService],
  exports: [AsientosService],
})
export class AsientosModule {}
