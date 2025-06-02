import { Asiento } from 'src/asientos/entities/asiento.entity';
import { Funcion } from 'src/funciones/entities/funcion.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

export class Venta {
  id: number;
  funcion: Funcion;
  asientos: Asiento[];
  nombreUsuario: string;
  total: number;
  usuario?: Usuario;

  constructor(
    id: number,
    funcion: Funcion,
    asientos: Asiento[],
    nombreUsuario: string,
    usuario?: Usuario,
  ) {
    this.id = id;
    this.funcion = funcion;
    this.asientos = asientos;
    this.nombreUsuario = nombreUsuario;
    this.total = this.calcularTotal(funcion, asientos, usuario);
    this.usuario = usuario;
  }

  calcularTotal(
    funcion: Funcion,
    asientos: Asiento[],
    usuario?: Usuario,
  ): number {
    let total = 0;

    for (const i of asientos) {
      total += i.lugar.precioBase;
    }

    if (funcion.descuento) total -= (total * funcion.descuento) / 100;
    if (usuario && usuario.descuento)
      total -= (total * usuario.descuento) / 100;

    return total;
  }
}
