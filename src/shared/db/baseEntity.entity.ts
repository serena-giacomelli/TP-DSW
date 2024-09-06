import { PrimaryKey } from '@mikro-orm/core';

export abstract class BaseEntity {
    @PrimaryKey()
    id_pedido!:number
/*
@Property({type: DateTimeType})
createdAt = new Date();

@Property({
type: DateTimeType,,
onUpdate: () => new Date()
})
updatedAt? = new Date();
*/
//no olvidar de importar DateTimeType y Property
}