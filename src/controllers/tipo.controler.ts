// Middleware para sanitizar la entrada de los tipo pruducto
import {Request, Response, NextFunction} from "express"
import { TipoProductoRepository } from "../usuario/tipo.repository.js";
import { TipoProducto } from "../models/tipo.entity.js";

const repository = new TipoProductoRepository()


function sanitizeTipoInput(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedInput = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
    };
  
    // Eliminar propiedades indefinidas
    Object.keys(req.body.sanitizedInput).forEach((key) => {
      if (req.body.sanitizedInput[key] === undefined) {
        delete req.body.sanitizedInput[key];
      }
    });
  
    next();
}
// OBTENER TODOS LOS TIPOS PRODUCTO
function findAll(req:Request, res:Response){
    res.json ({data: repository.findAll()})
}

// OBTENER UN TIPO PRODUCTO
function findOne(req:Request, res:Response) {
    const idtipo = repository.findOne({id: req.params.id});
    if (!idtipo) {
      return res.status(404).send({ message: 'tipo producto not found' });
    } else {
      res.json({ id: idtipo });
    }
  };
  
// AGREGAR UN TIPO PRODUCTO

function add(req:Request, res:Response){
    const input = req.body.sanitizedInput;
    const newTipo = new TipoProducto(
      input.nombre, 
      input.descripcion
    );
    const tipo = repository.add(newTipo);
    return res.status(201).json({ message: 'tipo producto created', data: tipo });
};

// MODIFICAR UN TIPO PRODUCTO
function update(req:Request, res:Response){
    req.body.sanitizedInput.id = req.params.id;
  const tipo = repository.update(req.body.sanitizedInput);
  if (!tipo) {
    return res.status(404).send({ message: 'Tipo Producto not found' });
  }
  return res.status(200).json({ message: 'Tipo Producto updated', data: tipo});
};

  // BORRAR UN TIPO PRODUCTO
  
function delet(req:Request, res:Response){
    const id = req.params.id
    const tipo = repository.delet({id});  
    if (!tipo) {
      return res.status(404).send({ message: 'tipo producto not found' });
    } else{
      return res.status(200).json({ message: 'tipo producto deleted' });
    }
};

export {sanitizeTipoInput, findAll, findOne, add, update, delet}
