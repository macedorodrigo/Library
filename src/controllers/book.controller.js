const { BookService } = require('../services');
const errorMessage = { message: 'Algo de errado não está certo' }

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books)
  } catch (err) {
    res.status(500).json({ errorMessage })
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.status(200).json(book)
  } catch (err) {
    res.status(500).json({ errorMessage })
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity  } = req.body;
    const newBook = await BookService.createBook(title, author, pageQuantity);
    return res.status(201).json(newBook)
  } catch (err) {
    res.status(500).json({ errorMessage })
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity  } = req.body;
    const { id } = req.params;
    const updateBook = await BookService.updateBook(id, title, author, pageQuantity);
    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json(updateBook)
  } catch (err) {
    res.status(500).json({ errorMessage })
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);
    return res.status(200).json({ message: 'Livro removido' });
  } catch (err) {
    res.status(500).json({ errorMessage })
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};