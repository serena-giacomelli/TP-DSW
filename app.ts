import 'reflect-metadata';
import express from 'express';
import { usuarioRouter } from './src/routes/usuario.route.js';
import { tipoRouter } from './src/TipoProd/tipo.route.js';
import { ProdRouter } from './src/routes/prod.route.js';
import { orm, syncSchema } from './src/shared/db/orm.js';
import { RequestContext } from '@mikro-orm/core';

const app = express()
app.use(express.json()) //callback que maneja todas las rutas
app.use('/api/usuarios', usuarioRouter);
app.use('/api/tipoprod', tipoRouter);
app.use('/api/prod', ProdRouter)


//luego de los middleware base
app.use((req, res, next) => {
    RequestContext.create(orm.em, next) //em= entity manager    
})

//antes de las rutas y middleware de negocio
app.use((_, res) => {

    res.status(404).send({message: 'Resource not found'})
})

await syncSchema()

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/');
})