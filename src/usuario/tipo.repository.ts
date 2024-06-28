import { Repository } from "./repository";
import { TipoProducto } from "../models/tipo.entity.js";

const tipoproducto = [new TipoProducto(
    'Mueble living',
    'Todo mueble que se usa en el living',
    '2f8f74cf-48d9-484e-9d82-234c30dee7cb'),
]

export class TipoProductoRepository implements Repository <TipoProducto>{
    public findAll():TipoProducto[] | undefined {
        return tipoproducto
    }

    public findOne(item: { id: string; }): TipoProducto | undefined {
        return tipoproducto.find((tipo) => tipo.id === item.id)
    }

    public add(item: TipoProducto): TipoProducto | undefined {
        tipoproducto.push(item);
        return item
    }
    
    public update(item: TipoProducto): TipoProducto | undefined {
        const TipoIdx = tipoproducto.findIndex((tipo) => tipo.id === tipo.id)

    if (TipoIdx !== -1) {
      tipoproducto[TipoIdx] = { ...tipoproducto[TipoIdx], ...item }
    }
    return tipoproducto[TipoIdx]
    }
    
    public delet(item: { id: string }): TipoProducto | undefined {
        const tipoIdx = tipoproducto.findIndex((tipo) => tipo.id === item.id)
    
        if (tipoIdx !== -1) {
          const deletedTipo = tipoproducto[tipoIdx]
          tipoproducto.splice(tipoIdx, 1)
          return deletedTipo
        }
      }
}