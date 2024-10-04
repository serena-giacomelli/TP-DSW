import {ObjectId} from 'mongodb';
import crypo from 'node:crypto';
export class TipoProducto {
    constructor(
      public nombre: string,
      public descripcion: string,
      public _id?: ObjectId
    ) {}
  }