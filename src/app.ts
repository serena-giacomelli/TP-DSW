import express from 'express';
import { usuarioRouter } from './usuario/usuario.route.js';

const app = express()
app.use(express.json()) //callback que maneja todas las rutas
app.use('/api/usuarios', usuarioRouter);

app.use((_, res) => {

    res.status(404).send({message: 'Resource not found'})
})

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000/');
})