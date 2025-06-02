import { Module } from '@nestjs/common';
import { SistemaCentralizadoService } from './sistema-centralizado.service';
import { SistemaCentralizadoController } from './sistema-centralizado.controller';
import { VentasModule } from 'src/ventas/ventas.module';
import { AsientosModule } from 'src/asientos/asientos.module';
import { FuncionesModule } from 'src/funciones/funciones.module';

@Module({
  imports: [VentasModule, AsientosModule, FuncionesModule],
  controllers: [SistemaCentralizadoController],
  providers: [SistemaCentralizadoService],
})
export class SistemaCentralizadoModule {}
