import { Repository } from "../shared/repository";
import { TipoProducto } from "../models/tipo.entity";
import { pool } from "../shared/conn.js";
import { RowDataPacket } from "mysql2";

export class TipoProductoRepository implements Repository <TipoProducto>{
    public async findAll(): Promise<TipoProducto[] | undefined> {
        const [tipoP] = await pool.query ('SELECT * FROM tipoP')
        return tipoP as TipoProducto[]
    }

    public async findOne(item: { id: string; }): Promise<TipoProducto | undefined> {
        const id = Number.parseInt(item.id)
        const [tipoP] = await pool.query<RowDataPacket[]>('SELECT * FROM tipoP where id = ?', [id])
        if (tipoP.length == 0) {
            return undefined
        }
        const tipo = tipoP[0] as TipoProducto
        return tipo
    }
/*
    public async add(item: TipoProducto): Promise<TipoProducto | undefined> {
        item._id = (await (tipoProd.insertOne(item))).insertedId
        return item
    }
    
    public async update(id:string, item: TipoProducto): Promise<TipoProducto | undefined> {
        const _id = new ObjectId(id)
        return (
            (await tipoProd.findOneAndUpdate({_id}, {$set: item}, {returnDocument: 'after'})) || undefined)
    }
    
    public async delet(item: { id: string }): Promise<TipoProducto | undefined> {
        const _id = new ObjectId(item.id)
        return (await tipoProd.findOneAndDelete({_id})) || undefined
      }
*/
      }