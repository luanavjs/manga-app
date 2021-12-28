const express = require('express')
const Book = require('../models/Book')
const router = express.Router()

//GET -> display all books
router.get('/', async (req,res) => {
    const books = await Book.find()
    try{
        return res.status(200).json(books)
    }
    catch(error){
        return res.status(500).json({message: 'error al mostrar libros'})
    }
})

//GET /book/:id -> singleBook
router.get('/book/:id', async (req,res) => {
    const {id} = req.params
    const singleBook = await Book.findById(id)
    try{
        return res.status(200).json(singleBook)
    }
    catch(error){
        return res.status(500).json({message: 'no se pudo encontrar el libro'})
    }
})

//POST/book
router.post('/book', async (req,res) => {
    const bookToCreate = await Book.create(req.body)
    try{
        return res.status(201).json(bookToCreate) //res.status(201) -> successful create (creacion exitosa)
    }
    catch(error){
        return res.status(500).json({message: 'error al añadir libro'})
    }
})

//PUT/book -> update
router.put('/book/:id', async (req,res)=>{
    const {id} = req.params
    const bookToUpdate = await Book.findByIdAndUpdate(id,req.body,{new: true})
    try{
        return res.status(202).json(bookToUpdate) //res.status(202) -> successful update
    }
    catch(error){
        return res.status(500).json({message: 'error al actualizar libro'})
    }
})

//DELETE/book/Id
router.delete('/book/:id', async (req,res) =>{
    const {id} = req.params
    const bookToDelete = await Book.findByIdAndDelete(id)
    try{
        return res.status(203).json({message: 'se elimino el libro'}) //res.status(203) -> successful delete
    }
    catch(error){
        return res.status(500).json({message: 'error al eliminar libro'})
    }
})


module.exports= router