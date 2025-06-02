import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { VentasController } from './ventas.controller';
import { AsientosModule } from 'src/asientos/asientos.module';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { FuncionesModule } from 'src/funciones/funciones.module';

@Module({
  imports: [AsientosModule, FuncionesModule, UsuariosModule],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
