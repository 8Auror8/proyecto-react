const BooksModel = require("../models/book.model")

async function findAllBooks(req, res){
    try{
        books = await BooksModel.find()
        res.json(books)
    }
    catch(error){
        console.log(error)
        return res.status(500).json({msg:"Error al buscar los libros"})
    }
}

async function insertBook(req, res){
    try{
        const bookToBeInserted = new BooksModel({
            title: req.body.title,
            author: req.body.author,
            pages: req.body.pages,
            image: req.body.image,
            editorial: req.body.editorial
        })

        await bookToBeInserted.save()
        return res.json({msg:"Libro guardado correctamente"})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({msg:"Error al guardar el libro"})
    }
}

async function removeBook(req, res){
    try{
        await BooksModel.findByIdAndDelete(req.params.id)
        return res.json({msg:"Libro eliminado correctamente"})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({msg:"Error al eliminar el libro"})
    }
}

module.exports = {
    findAllBooks,
    insertBook,
    removeBook
}