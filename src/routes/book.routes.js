const express = require('express');

const { BookController } = require('../controllers')

const router = express.Router();

router.get('/', BookController.getAll);
router.get('/:id', BookController.getById);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

module.exports = router;