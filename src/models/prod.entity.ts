import crypo from 'node:crypto';
export class Producto {
    constructor(
      public nombre: string,
      public cantidad: string,
      public descripcion: string,
      public codigo = crypo.randomUUID()
    ) {}
  }