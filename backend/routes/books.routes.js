const express = require('express')
const router = express.Router()
const { findAllBooks, insertBook, removeBook} = require('../controllers/books.controllers')
const { isAdmin, isAuthenticated } = require('../middlewares/auth.middleware')

router.get('/', isAuthenticated,findAllBooks) //get localhost:3000/api/books/
router.post('/', isAdmin, insertBook) //post localhost:3000/api/books/id
router.delete('/:id', isAdmin, removeBook) //delete localhost:3000/api/books/:id

module.exports = router