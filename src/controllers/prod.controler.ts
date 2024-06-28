// Middleware para sanitizar la entrada de los tipo pruducto
import {Request, Response, NextFunction} from "express"
import { ProductoRepository } from "../usuario/prod.repository";
import { Producto } from "../models/prod.entity.js";

const repository = new ProductoRepository()


function sanitizeProdInput(req: Request, res: Response, next: NextFunction) {
    req.body.sanitizedInput = {
      nombre: req.body.nombre,
      cantidad: req.body.cantidad,
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
    res.json ({data:  repository.findAll()})
}

// OBTENER UN TIPO PRODUCTO
 function findOne(req:Request, res:Response) {
    const codigoproducto = repository.findOne({codigo: req.params.codigo});
    if (!codigoproducto) {
      return res.status(404).send({ message: ' producto not found' });
    } else {
      res.json({ codigo: codigoproducto });
    }
  };
  
// AGREGAR UN TIPO PRODUCTO

function add(req:Request, res:Response){
    const input = req.body.sanitizedInput;
    const newProd = new Producto(
      input.nombre, 
      input.cantidad,
      input.descripcion
    );
    const prod = repository.add(newProd);
    return res.status(201).json({ message: ' producto created', data: prod });
};

// MODIFICAR UN TIPO PRODUCTO
function update(req:Request, res:Response){
    req.body.sanitizedInput.codigo = req.params.codigo;
  const codigo = repository.update(req.body.sanitizedInput);
  if (!codigo) {
    return res.status(404).send({ message: ' Producto not found' });
  }
  return res.status(200).json({ message: ' Producto updated', data: codigo});
};

  // BORRAR UN TIPO PRODUCTO
  
function delet(req:Request, res:Response){
    const codigo = req.params.codigo
    const prod = repository.delet({codigo});  
    if (!prod) {
      return res.status(404).send({ message: ' producto not found' });
    } else{
      return res.status(200).json({ message: ' producto deleted' });
    }
};

export {sanitizeProdInput, findAll, findOne, add, update, delet}
