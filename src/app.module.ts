import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { AsientosModule } from './asientos/asientos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FuncionesModule } from './funciones/funciones.module';
import { VentasModule } from './ventas/ventas.module';

@Module({
  imports: [LugaresModule, AsientosModule, UsuariosModule, FuncionesModule, VentasModule]
})
export class AppModule {}
