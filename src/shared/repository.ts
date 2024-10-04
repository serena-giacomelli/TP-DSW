/*de mysql */
export interface Repository <T> {
    findAll(): Promise<T[] | undefined>
    findOne(item: {id: string}): Promise<T | undefined>
    /*add(item: T): Promise<T | undefined>
    update(id:string, item: T): Promise<T | undefined>
    delet(item: {id: string}): Promise<T | undefined>*/
}