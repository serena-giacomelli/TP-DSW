import { Repository } from "../shared/repository.js";
import { Usuario } from "../models/usuarios.entity.js";
import { db } from "../shared/db/conn.js";
import { ObjectId } from "mongodb";

const usuarios = db.collection<Usuario>('usuarios')

export class UsuarioRepository implements Repository<Usuario> {
    public async findAll(): Promise<Usuario[] | undefined> {
        return await usuarios.find().toArray()

    }

    public async findOne(item: {dni:string; }): Promise<Usuario | undefined> {
        const _id = new ObjectId(item.dni);
        return (await usuarios.findOne({_id}))|| undefined
    }

    public async add(item: Usuario): Promise<Usuario | undefined> {
        item._id = (await usuarios.insertOne(item)).insertedId
        return item
    }

    public async update(item: Usuario): Promise<Usuario | undefined> {
        const {dni, ...usuarioInput} = item
        const _id = new ObjectId(dni)
        return (await usuarios.findOneAndUpdate({_id}, {$set: usuarioInput}, {returnDocument: 'after'})) || undefined
}

public async delete(item: { dni:string; }): Promise<Usuario | undefined> {
    const _id = new ObjectId(item.dni)
    return (await usuarios.findOneAndDelete({_id})) || undefined
}

}