import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { Venta } from './entities/venta.entity';
import { AsientosService } from 'src/asientos/asientos.service';
import { FuncionesService } from 'src/funciones/funciones.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { Asiento } from 'src/asientos/entities/asiento.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Funcion } from 'src/funciones/entities/funcion.entity';

@Injectable()
export class VentasService {
  ventas: Venta[] = [];
  idContador: number = 1;

  constructor(
    private readonly asientosSer: AsientosService,
    private readonly funcionesSer: FuncionesService,
    private readonly usuariosSer: UsuariosService,
  ) {}

  create(createVentaDto: CreateVentaDto) {
    const funcion = this.funcionesSer.findOne(createVentaDto.funcionId);

    const asientos: Asiento[] = [];

    for (const i of createVentaDto.asientosIds) {
      const asiento = this.asientosSer.findOne(i);

      if (this.asientoDisponible(asiento, funcion)) asientos.push(asiento);
      else
        throw new BadRequestException(
          `El asiento ${asiento.asientoId} ya no está disponible para esta función`,
        );
    }

    let usuario: Usuario;

    if (createVentaDto.usuarioId)
      usuario = this.usuariosSer.findOne(createVentaDto.usuarioId);
    createVentaDto.nombreUsuario = usuario.nombre;

    const venta = new Venta(
      this.idContador++,
      funcion,
      asientos,
      createVentaDto.nombreUsuario,
      usuario,
    );

    this.ventas.push(venta);

    return venta;
  }

  findAll(funcionId?: number) {
    if (funcionId) {
      const funcion = this.funcionesSer.findOne(funcionId);

      return this.ventas.filter((e) => e.funcion === funcion);
    }

    return this.ventas;
  }

  findOne(id: number) {
    const venta = this.ventas.find((e) => e.id === id);

    if (!venta) throw new NotFoundException('Venta no encontrada');

    return venta;
  }

  private asientoDisponible(asiento: Asiento, funcion: Funcion): boolean {
    const venta = this.ventas.find(
      (e) => e.funcion === funcion && e.asientos.includes(asiento),
    );

    if (venta) return false;

    return true;
  }
}
