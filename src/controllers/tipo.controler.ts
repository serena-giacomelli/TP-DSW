// Middleware para sanitizar la entrada de los tipo pruducto
import {Request, Response, NextFunction} from "express"
import { TipoProductoRepository } from "../repositories/tipoProd.repository";
/*import { TipoProducto } from "../models/tipo.entity";*/

const repository = new TipoProductoRepository()

// OBTENER TODOS LOS TIPOS PRODUCTO
async function findAll(req:Request, res:Response){
  const tipoP = await
  repository.findAll(); 
  res.json (tipoP);
}

// OBTENER UN TIPO PRODUCTO
async function findOne(req:Request, res:Response) {
  try {
    const { id } = req.params;
    const tipo = await repository.findOne({ id }); 
    if (tipo) {
        res.json(tipo);
    } else {
        res.status(404).json({ message: 'Tipo  producto no encontrado' });

    }
} catch (error) {
    res.status(500).json({ message: 'Error al obtener el tipo producto', error });
}

  };
export (findAll, findOne)
  
// AGREGAR UN TIPO PRODUCTO
/*
async function add(req:Request, res:Response){
    const input = req.body.sanitizedInput;
    const newTipo = new TipoProducto(
      input.nombre, 
      input.descripcion
    );
    const tipo = await repository.add(newTipo);
    return res.status(201).json({ message: 'tipo producto created', data: tipo });
};

// MODIFICAR UN TIPO PRODUCTO
async function update(req:Request, res:Response){
  const tipo = await repository.update(req.params.id, req.body.sanitizedInput);
  if (!tipo) {
    return res.status(404).send({ message: 'Tipo Producto not found' });
  }
  return res.status(200).json({ message: 'Tipo Producto updated', data: tipo});
};

  // BORRAR UN TIPO PRODUCTO
  
async function delet(req:Request, res:Response){
    const id = req.params.id
    const tipo = await repository.delet({id});  
    if (!tipo) {
      return res.status(404).send({ message: 'tipo producto not found' });
    } else{
      return res.status(200).json({ message: 'tipo producto deleted' });
    }
};

export {sanitizeTipoInput, findAll, findOne, add, update, delet}
*/
