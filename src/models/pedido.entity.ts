import {Cascade, Entity, OneToMany, PrimaryKey, Property, Collection} from '@mikro-orm/core'
import { Usuario } from "./usuarios.entity.js"
import { BaseEntity } from '../shared/db/baseEntity.entity.js'

@Entity()
export class Pedido extends BaseEntity {

    @Property({nullable: false})
    fecha_pedido!:string

    @Property()
    total?:string

    @Property()
    tipo_entrega!: string
    
    @Property()
    estado!: string
   //! obligatorio ?opcional

    @OneToMany (() => Usuario, usuario => usuario.pedidos, {cascade: [Cascade.ALL]})
    pedidos = new Collection<Usuario>(this)

}