 import { Router } from "express";
import { findAll, findOne} from "../controllers/tipo.controler";
/*
import { sanitizeTipoInput, findAll, findOne, add, update, delet } from "../controllers/tipo.controler";
*/
export const tipoRouter = Router()
tipoRouter.get('/', findAll)
tipoRouter.get('/:id', findOne)
/*
tipoRouter.post('/', sanitizeTipoInput, add)
tipoRouter.put('/:id', sanitizeTipoInput, update)
tipoRouter.patch('/:id', sanitizeTipoInput, update)
tipoRouter.delete('/:id', sanitizeTipoInput, delet)
*/