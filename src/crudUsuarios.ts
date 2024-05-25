import express, { Request, Response, NextFunction } from 'express';
import { Usuario } from './usuarios.js';

const app = express();
app.use(express.json());

//Date format: YYYY-MM-DD

const usuarios = [
  new Usuario(
    'Serena',
    'Giacomelli',
    '45638062',
    'sere@gmail.com',
    new Date('2004-05-23')
  ),
  new Usuario(
    'Chiara',
    'Leonnardi',
    '2058365',
    'chiara@gmail.com',
    new Date('2000-07-04')
  ),
];

// Middleware para sanitizar la entrada de los usuarios

function sanitizeUsuarioInput(req: Request, res: Response, next: NextFunction) {
  req.body.sanitizedInput = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    dni: req.body.dni,
    email: req.body.email,
    fechaNacimiento: req.body.fechaNacimiento,
  };

  // Eliminar propiedades indefinidas
  Object.keys(req.body.sanitizedInput).forEach((key) => {
    if (req.body.sanitizedInput[key] === undefined) {
      delete req.body.sanitizedInput[key];
    }
  });

  next();
}

// OBTENER TODOS LOS USUARIOS

app.get('/api/usuarios', (req, res) => {
  res.json({ data: usuarios });
});

// OBTENER UN USUARIO

app.get('/api/usuarios/:dni', (req, res) => {
  const usuario = usuarios.find((c) => c.dni === req.params.dni);
  if (!usuario) {
    res.status(404).send({ message: 'usuario not found' });
  } else {
    res.json({ data: usuario });
  }
});

// CREAR UN USUARIO

app.post('/api/usuarios', sanitizeUsuarioInput, (req, res) => {
  const input = req.body.sanitizedInput;

  const newUsuario = new Usuario(
    input.nombre,
    input.apellido,
    input.dni,
    input.email,
    input.fechaNacimiento
  );

  usuarios.push(newUsuario);
  res.status(201).json({ message: 'usuario created', data: newUsuario });
});

// MODIFICAR UN USUARIO COMPLETAMENTE

app.put('/api/usuarios/:dni', sanitizeUsuarioInput, (req, res) => {
  const indexC = usuarios.findIndex((c) => c.dni === req.params.dni);
  if (indexC === -1) {
    res.status(404).send({ message: 'Usuario not found' });
  }

  usuarios[indexC] = { ...usuarios[indexC], ...req.body.sanitizedInput };
  res
    .status(200)
    .json({ message: 'Usuario updated', data: usuarios[indexC] });
});

// MODIFICAR UN USUARIO PARCIALMENTE

app.patch('/api/usuarios/:dni', sanitizeUsuarioInput, (req, res) => {
  const indexC = usuarios.findIndex((c) => c.dni === req.params.dni);
  if (indexC === -1) {
    res.status(404).send({ message: 'usuario not found' });
  }

  usuarios[indexC] = { ...usuarios[indexC], ...req.body.sanitizedInput };
  res
    .status(200)
    .json({ message: 'usuario updated', data: usuarios[indexC] });
});

// BORRAR UN USUARIO

app.delete('/api/usuarios/:dni', (req, res) => {
  const indexC = usuarios.findIndex((c) => c.dni === req.params.dni);
  if (indexC === -1) {
    res.status(404).send({ message: 'usuario not found' });
  }

  usuarios.splice(indexC, 1);
  res.status(200).json({ message: 'usuario deleted' });
});

// LISTEN

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});