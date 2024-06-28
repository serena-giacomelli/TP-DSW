import { Router } from "express";
import { sanitizeProdInput, findAll, findOne, add, update, delet } from "../controllers/prod.controler";

export const ProdRouter = Router()
ProdRouter.get('/', findAll)
ProdRouter.get('/:codigo', findOne)
ProdRouter.post('/', sanitizeProdInput, add)
ProdRouter.put('/:codigo', sanitizeProdInput, update)
ProdRouter.patch('/:codigo', sanitizeProdInput, update)
ProdRouter.delete('/:codigo', sanitizeProdInput, delet)