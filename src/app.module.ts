import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { AsientosModule } from './asientos/asientos.module';

@Module({
  imports: [LugaresModule, AsientosModule]
})
export class AppModule {}
