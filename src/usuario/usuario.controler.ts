import { Request, Response, NextFunction} from 'express';
import { UsuarioRepository } from './usuario.repository.js';
import { Usuario } from './usuarios.entity.js'


const repository = new UsuarioRepository()

function sanitizeUsuarioInput(req: Request, res: Response, next: NextFunction){
    req.body.sanitizedInput = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        fechaNacimiento: req.body.fechaNacimiento,
        mail: req.body.mail
    }
    //more checks here
   
    Object.keys(req.body.sanitizedInput).forEach((key) => {
        if(req.body.sanitizedInput[key] === undefined)
        delete req.body.sanitizedInput[key]
    })
    next()
}

//obtener todos
function findAll(req: Request, res: Response){
    res.json({data:repository.findAll()})
}

//obtener uno mediante dni
function findOne(req:Request, res:Response){
    const usuario = repository.findOne({dni: req.params.dni})   
    if(!usuario){
       return res.status(404).send({message: 'Usuario not found'})
    }
    res.json({data:usuario})
}

//agregar un usuario nuevo

function add(req: Request, res: Response){
    const input = req.body.sanitizedInput
   
    const usuarioInput = new Usuario(
        input.nombre, 
        input.apellido, 
        input.dni, 
        input.fechaNacimiento,
        input.mail
    )
    
    const usuario = repository.add(usuarioInput)
    return res.status(201).send({ message: 'Usuario created', data: usuario })
}

//modificar un recurso en su totalidad
function update(req: Request, res: Response){
    req.body.sanitizedInput.dni = req.params.dni
    const usuario = repository.update(req.body.sanitizedInput)
    if(!usuario){
        return res.status(404).send({message: 'Usuario not found'})
    } 
    return res.status(200).send({message: 'Usuario updated', data: usuario})

}

//elmiminar un recurso
function remove(req: Request, res: Response){
    const dni = req.params.dni
    const usuario = repository.delete({dni})

    if(!usuario){
        res.status(404).send({message: 'Usuario not found'})
    }else{
        res.status(200).send({message: 'Usuario deleted'})  
    }
      
}

export {sanitizeUsuarioInput, findAll, findOne, update, remove, add}
