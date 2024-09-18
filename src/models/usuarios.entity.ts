import { ObjectId } from "mongodb";
import {Pedido} from "../models/pedido.entity";

export class Usuario {
  constructor(
    public nombre: string, 
    public apellido: string, 
    public dni:string, 
    public fechaNacimiento:string, 
    public mail:string,
    public _id?: ObjectId,
    public pedidos?: Pedido[]
)   {}
}