// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Importando rotas
const animalRoutes = require('./routes/animals');
const userRoutes = require('./routes/users');
const consultorioRoutes = require('./routes/consultorios');
const doutorRoutes = require('./routes/doutores');

// Usando rotas
app.use('/api/animals', animalRoutes);
app.use('/api/users', userRoutes);
app.use('/api/consultorios', consultorioRoutes);
app.use('/api/doutores', doutorRoutes);

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
