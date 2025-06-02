import { Module } from '@nestjs/common';
import { LugaresModule } from './lugares/lugares.module';
import { AsientosModule } from './asientos/asientos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FuncionesModule } from './funciones/funciones.module';
import { VentasModule } from './ventas/ventas.module';
import { SistemaCentralizadoModule } from './sistema-centralizado/sistema-centralizado.module';

@Module({
  imports: [LugaresModule, AsientosModule, UsuariosModule, FuncionesModule, VentasModule, SistemaCentralizadoModule]
})
export class AppModule {}
