import express from 'express';
import { usuarioRouter } from './routes/usuario.route.js';
import { tipoRouter } from './routes/tipo.routes.js';

const app = express()
app.use(express.json()) //callback que maneja todas las rutas
app.use('/api/usuarios', usuarioRouter);
app.use('/api/tipoprod', tipoRouter);

app.use((_, res) => {

    res.status(404).send({message: 'Resource not found'})
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/');
})