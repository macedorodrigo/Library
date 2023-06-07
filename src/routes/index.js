const express = require('express');

const router = express.Router();

const book = require('./book.routes');

router.get('/', (_req, res) => res.json({ message: 'Aplicação rodando'}));

router.use('/books', book);

module.exports = router;