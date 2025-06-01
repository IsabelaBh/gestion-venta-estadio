import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { AsientosModule } from './asientos/asientos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [LugaresModule, AsientosModule, UsuariosModule]
})
export class AppModule {}
