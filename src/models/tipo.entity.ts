import crypo from 'node:crypto';
export class TipoProducto {
    constructor(
      public nombre: string,
      public descripcion: string,
      public id = crypo.randomUUID()
    ) {}
  }