// routes/doutores.js
const express = require('express');
const router = express.Router();

let doutores = []; // Banco de dados mockado

// GET: Receber um doutor
router.get('/:id', (req, res) => {
    const doutor = doutores.find(d => d.id === req.params.id);
    if (doutor) {
        res.json(doutor);
    } else {
        res.status(404).send('Doutor não encontrado');
    }
});

// GET: Receber todos os doutores
router.get('/', (req, res) => {
    res.json(doutores);
});

// POST: Cadastrar um novo doutor
router.post('/', (req, res) => {
    const newDoutor = { id: Date.now().toString(), ...req.body };
    doutores.push(newDoutor);
    res.status(201).json(newDoutor);
});

// PUT: Editar um doutor já existente
router.put('/:id', (req, res) => {
    const index = doutores.findIndex(d => d.id === req.params.id);
    if (index !== -1) {
        doutores[index] = { id: req.params.id, ...req.body };
        res.json(doutores[index]);
    } else {
        res.status(404).send('Doutor não encontrado');
    }
});

// DELETE: Deletar um doutor já existente
router.delete('/:id', (req, res) => {
    const index = doutores.findIndex(d => d.id === req.params.id);
    if (index !== -1) {
        const deletedDoutor = doutores.splice(index, 1);
        res.json(deletedDoutor);
    } else {
        res.status(404).send('Doutor não encontrado');
    }
});

module.exports = router;
