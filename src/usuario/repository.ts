export interface Repository <T> {
    findAll(): Promise<T[] | undefined>
    findOne(item: {dni:string;}): Promise<T | undefined> 
    add(item: T): Promise<T | undefined>
    update(item: T) : Promise<T | undefined>
    delete(item: {dni:string}): Promise<T | undefined>
   // findAll(): T[] | undefined
   // findOne(item: {id: string}): T | undefined
   // add(item: T): T | undefined
   // update(item: T): T | undefined
   // delet(item: {id: string}): T | undefined
}
//borrar cuando pase a base
