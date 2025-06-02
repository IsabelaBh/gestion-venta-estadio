import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncionDto } from './dto/create-funcion.dto';
import { UpdateFuncionDto } from './dto/update-funcion.dto';
import { Funcion } from './entities/funcion.entity';

@Injectable()
export class FuncionesService {
  funciones: Funcion[] = [
    new Funcion(1, 'Concierto', false),
    new Funcion(2, 'Concierto', true),
  ];
  idContador: number = 3;

  create(createFuncionDto: CreateFuncionDto) {
    const funcion = new Funcion(
      this.idContador++,
      createFuncionDto.nombre,
      createFuncionDto.segundoDia,
      createFuncionDto.descuento,
    );

    this.funciones.push(funcion);

    return funcion;
  }

  findAll() {
    return this.funciones;
  }

  findOne(id: number) {
    const funcion = this.funciones.find((e) => e.id === id);

    if (!funcion) throw new NotFoundException('Funcion no encotrada');

    return funcion;
  }

  update(id: number, updateFuncionDto: UpdateFuncionDto) {
    const funcion = this.findOne(id);

    funcion.nombre = updateFuncionDto.nombre || funcion.nombre;
    funcion.segundoDia = updateFuncionDto.segundoDia || funcion.segundoDia;
    funcion.descuento = updateFuncionDto.descuento || funcion.descuento;

    return 'Funcion actualizada';
  }

  remove(id: number) {
    this.funciones = this.funciones.filter((e) => e.id !== id);

    return 'Funcion eliminada';
  }
}
