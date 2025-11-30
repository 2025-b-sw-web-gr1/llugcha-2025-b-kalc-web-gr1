// server.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 1. Configurar Pug como motor de plantillas
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 2. Definir la ruta principal
app.get('/', (req, res) => {
    // Datos actualizados para Cachorros Pinscher Miniatura
    const datosCachorros = {
        titulo: '¡Bienvenido al Mundo de los Cachorros Pinscher Miniatura!',
        subtitulo: 'Pequeños, valientes y llenos de energía: Guía para tus primeros meses.',
        raza: 'Pinscher Miniatura',
        etapa: 'Cachorro (2 a 12 meses)',
        cuidadosPrincipales: [
            { nombre: 'Alimentación', detalle: 'Pienso de alta calidad específico para cachorros pequeños.' },
            { nombre: 'Socialización', detalle: 'Exposición temprana y positiva a personas y ambientes.' },
            { nombre: 'Entrenamiento', detalle: 'Comenzar con comandos básicos (sentarse, quedarse) y control de esfínteres.' },
            { nombre: 'Salud', detalle: 'Visitas frecuentes al veterinario y plan de vacunas completo.' }
        ],
        consejo: '¡La etapa de cachorro es crucial! La disciplina y el afecto deben ir de la mano.'
    };

    // Renderizar la vista 'index.pug' pasando los datos
    res.render('index', datosCachorros);
});

// 3. Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log('Abre esta URL en tu navegador.');
});