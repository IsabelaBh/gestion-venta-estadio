import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  usuarios: Usuario[] = [
    new Usuario(1, 'Juan Felipe', '1234567890'),
    new Usuario(2, 'Sarah', '0987654321'),
  ];
  idContador: number = 3;

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new Usuario(
      this.idContador++,
      createUsuarioDto.nombre,
      createUsuarioDto.cedula,
    );

    this.usuarios.push(usuario);

    return usuario;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    const usuario = this.usuarios.find((e) => e.id === id);

    if (!usuario) throw new NotFoundException('Usuario no encontrado');

    return usuario;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.findOne(id);

    usuario.nombre = updateUsuarioDto.nombre || usuario.nombre;
    usuario.cedula = updateUsuarioDto.cedula || usuario.cedula;

    return 'Usuario actualizado';
  }

  remove(id: number) {
    this.usuarios = this.usuarios.filter((e) => e.id !== id);

    return 'Usuario eliminado';
  }
}
