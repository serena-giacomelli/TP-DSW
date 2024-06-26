//archivo independiente donde se guardan las rutas
import { Router } from 'express'
import { add, findAll, findOne, remove, sanitizeUsuarioInput, update } from '../controllers/usuario.controler.js';

export const usuarioRouter = Router()

usuarioRouter.get('/', findAll)
usuarioRouter.get('/:dni', findOne)
usuarioRouter.post('/',sanitizeUsuarioInput, add)
usuarioRouter.put('/:dni',sanitizeUsuarioInput, update)
usuarioRouter.patch('/:dni',sanitizeUsuarioInput, update)
usuarioRouter.delete('/:dni',remove)
