// routes/users.js
const express = require('express');
const router = express.Router();

let users = []; // Banco de dados mockado

// GET: Receber um usuário
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('Usuário não encontrado');
    }
});

// GET: Receber todos os usuários
router.get('/', (req, res) => {
    res.json(users);
});

// POST: Cadastrar um novo usuário
router.post('/', (req, res) => {
    const newUser  = { id: Date.now().toString(), ...req.body };
    users.push(newUser );
    res.status(201).json(newUser );
});

module.exports = router;
