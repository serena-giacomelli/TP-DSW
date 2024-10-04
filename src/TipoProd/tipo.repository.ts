import { Repository } from "../shared/repository"
import { TipoProducto } from "./tipo.entity.js"
import { db } from "../shared/conn" 
import { ObjectId } from "mongodb"

const tipoProd =db.collection<TipoProducto>('tipoproductos')

export class TipoProductoRepository implements Repository <TipoProducto>{
    public async findAll(): Promise<TipoProducto[] | undefined> {
        return await tipoProd.find().toArray()
    }

    public async findOne(item: { id: string; }): Promise<TipoProducto | undefined> {
        const _id = new ObjectId(item.id)
        return (await tipoProd.findOne({ _id })) || undefined
    }

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
}