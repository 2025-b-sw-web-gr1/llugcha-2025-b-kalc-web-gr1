// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// --------------------------------------------------
// Middleware
// --------------------------------------------------
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());                 // Para poder leer JSON en POST/PUT

// --------------------------------------------------
// Base de datos falsa (en memoria)
// --------------------------------------------------
let cachorros = [
  {
    id: 1,
    nombre: "Max",
    edad: "3 meses",
    raza: "Pinscher Miniatura",
    vacunado: true
  },
  {
    id: 2,
    nombre: "Luna",
    edad: "5 meses",
    raza: "Pinscher Miniatura",
    vacunado: false
  },
  {
    id: 3,
    nombre: "Rocky",
    edad: "7 meses",
    raza: "Pinscher Miniatura",
    vacunado: true
  }
];

// --------------------------------------------------
// Ruta principal - Renderiza la vista Pug
// --------------------------------------------------
app.get('/', (req, res) => {
  res.render('index', { cachorros });
});

// --------------------------------------------------
// API REST completa para cachorros
// --------------------------------------------------

// GET - Todos los cachorros
app.get('/api/cachorros', (req, res) => {
  res.json(cachorros);
});

// GET - Un cachorro por ID (también útil para la vista detalle si la haces)
app.get('/api/cachorros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cachorro = cachorros.find(c => c.id === id);

  if (!cachorro) {
    return res.status(404).json({ error: 'Cachorro no encontrado' });
  }
  res.json(cachorro);
});

// POST - Crear nuevo cachorro
app.post('/api/cachorros', (req, res) => {
  const { nombre, edad, raza, vacunado } = req.body;

  if (!nombre || !edad || !raza) {
    return res.status(400).json({ error: 'Faltan datos obligatorios (nombre, edad, raza)' });
  }

  const nuevo = {
    id: cachorros.length ? Math.max(...cachorros.map(c => c.id)) + 1 : 1,
    nombre,
    edad,
    raza,
    vacunado: vacunado === true || vacunado === 'true' // permite boolean o string
  };

  cachorros.push(nuevo);
  res.status(201).json({ mensaje: 'Cachorro creado', data: nuevo });
});

// PUT - Actualizar cachorro existente
app.put('/api/cachorros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cachorros.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Cachorro no encontrado' });
  }

  const { nombre, edad, raza, vacunado } = req.body;

  if (!nombre || !edad || !raza) {
    return res.status(400).json({ error: 'Faltan datos obligatorios (nombre, edad, raza)' });
  }

  cachorros[index] = {
    id,
    nombre,
    edad,
    raza,
    vacunado: vacunado === true || vacunado === 'true'
  };

  res.json({ mensaje: 'Cachorro actualizado', data: cachorros[index] });
});

// DELETE - Eliminar cachorro
app.delete('/api/cachorros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cachorros.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Cachorro no encontrado' });
  }

  const eliminado = cachorros.splice(index, 1);
  res.json({ mensaje: 'Cachorro eliminado', data: eliminado[0] });
});

// --------------------------------------------------
// Ruta 404 (debe ir después de todas las rutas)
// --------------------------------------------------
app.use((req, res) => {
  res.status(404).render('404', { mensaje: 'Página no encontrada' });
});

// --------------------------------------------------
// Iniciar servidor
// --------------------------------------------------
app.listen(port, () => {
  console.log('============================================');
  console.log('  Servidor corriendo correctamente');
  console.log(`  http://localhost:${port}`);
  console.log('============================================');
});