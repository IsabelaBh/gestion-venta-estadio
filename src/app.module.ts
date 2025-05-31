import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';

@Module({
  imports: [LugaresModule]
})
export class AppModule {}
