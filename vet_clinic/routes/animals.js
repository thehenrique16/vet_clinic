// routes/animals.js
const express = require('express');
const router = express.Router();

let animals = []; // Banco de dados mockado

// GET: Receber um animal específico
router.get('/:id', (req, res) => {
    const animal = animals.find(a => a.id === req.params.id);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).send('Animal não encontrado');
    }
});

// GET: Receber todos os animais
router.get('/', (req, res) => {
    res.json(animals);
});

// POST: Cadastrar um novo animal
router.post('/', (req, res) => {
    const newAnimal = { id: Date.now().toString(), ...req.body };
    animals.push(newAnimal);
    res.status(201).json(newAnimal);
});

// PUT: Editar um animal já existente
router.put('/:id', (req, res) => {
    const index = animals.findIndex(a => a.id === req.params.id);
    if (index !== -1) {
        animals[index] = { id: req.params.id, ...req.body };
        res.json(animals[index]);
    } else {
        res.status(404).send('Animal não encontrado');
    }
});

// DELETE: Deletar um animal já existente
router.delete('/:id', (req, res) => {
    const index = animals.findIndex(a => a.id === req.params.id);
    if (index !== -1) {
        const deletedAnimal = animals.splice(index, 1);
        res.json(deletedAnimal);
    } else {
        res.status(404).send('Animal não encontrado');
    }
});

module.exports = router;
