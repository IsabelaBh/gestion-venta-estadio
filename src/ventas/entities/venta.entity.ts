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
    this.total = this.calcularTotal(funcion, asientos);
    this.usuario = usuario;
  }

  calcularTotal(funcion: Funcion, asientos: Asiento[]): number {
    let total = 0;

    for (const i of asientos) {
      if (funcion.descuento && !i.lugar.nombre.includes('VIP'))
        total += (total * funcion.descuento) / 100;
      total += i.lugar.precioBase;
    }

    return total;
  }
}
