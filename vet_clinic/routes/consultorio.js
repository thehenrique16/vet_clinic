// routes/consultorios.js
const express = require('express');
const router = express.Router();

let consultorios = []; // Banco de dados mockado

// GET: Receber um consultório
router.get('/:id', (req, res) => {
    const consultorio = consultorios.find(c => c.id === req.params.id);
    if (consultorio) {
        res.json(consultorio);
    } else {
        res.status(404).send('Consultório não encontrado');
    }
});

// GET: Receber todos os consultórios
router.get('/', (req, res) => {
    res.json(consultorios);
});

// POST: Cadastrar um novo consultório
router.post('/', (req, res) => {
    const newConsultorio = { id: Date.now().toString(), ...req.body };
    consultorios.push(newConsultorio);
    res.status(201).json(newConsultorio);
});

// PUT: Editar um consultório já existente
router.put('/:id', (req, res) => {
    const index = consultorios.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        consultorios[index] = { id: req.params.id, ...req.body };
        res.json(consultorios[index]);
    } else {
        res.status(404).send('Consultório não encontrado');
    }
});

// DELETE: Deletar um consultório já existente
router.delete('/:id', (req, res) => {
    const index = consultorios.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        const deletedConsultorio = consultorios.splice(index, 1);
        res.json(deletedConsultorio);
    } else {
        res.status(404).send('Consultório não encontrado');
    }
});

module.exports = router;
