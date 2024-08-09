import { Repository } from "../shared/repository2";
import { Producto } from "../models/prod.entity";

const producto = [new Producto(
    'Mueble living',
    '25',
    'Todo mueble que se usa en el living',
    '2f8f74cf-48d9-484e-9d82-234c30dee7cb'),
]

export class ProductoRepository implements Repository <Producto>{
    public findAll():Producto[] | undefined {
        return producto
    }

    public findOne(item: { codigo: string; }): Producto | undefined {
        return producto.find((producto) => producto.codigo === item.codigo)
    }

    public add(item: Producto): Producto | undefined {
        producto.push(item);
        return item
    }
    
    public update(item: Producto): Producto | undefined {
        const ProdIdx = producto.findIndex((producto) => producto.codigo === producto.codigo)

    if (ProdIdx !== -1) {
      producto[ProdIdx] = { ...producto[ProdIdx], ...item }
    }
    return producto[ProdIdx]
    }
    
    public delet(item: { codigo: string }): Producto | undefined {
        const prodIdx = producto.findIndex((producto) => producto.codigo === item.codigo)
    
        if (prodIdx !== -1) {
          const deletedProd = producto[prodIdx]
          producto.splice(prodIdx, 1)
          return deletedProd
        }
      }
}