const express = require('express')
const Rental = require('../models/Rental')
const router = express.Router()

router.get('/', async (req,res) =>{
    const rentals = await Rental.find()
        .populate('user', ['name','email'])   //me van a mostrar el objeto al cual pertenece el id
        .populate('book', ['title','author'])
    try {
        return res.status(200).json(rentals)
    } catch (error) {
        return res.status(500).json({message:'error al mostrar alquileres'})
    }
})

router.get('/rental/:id', async (req,res) =>{
    const {id} = req.params
    const singleRental = Rental.findById(id)
    try{
        return res.status(200).json(singleRental)
    }
    catch(error){
        return res.status(500).json({message: 'no se pudo encontrar el alquiler'})
    }
})

router.post('/rental', async (req,res) => {
    const rentalToCreate = await Rental.create(req.body)
    try {
        return res.status(201).json(rentalToCreate)
    } catch (error) {
        return res.status(500).json({message: 'error al alquilar libro'})
    }
})

router.put('/rental/:id', async (req,res) => {
    const {id} = req.params
    const rentalToUpdate = await Rental.findByIdAndUpdate(id)
    try {
        return res.status(202).json(rentalToUpdate)
    } catch (error) {
        return res.status(500).json({message: 'error al actualizar el alquiler'})
    }
})

router.delete('/rental/:id', async (req,res) => {
    const {id} = req.params
    const rentalToDelete = await Rental.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: 'se elimino el alquiler'})
    } catch (error) {
        return res.status(500).json({message: 'error al eliminar alquiler'})
    }
})


module.exports= router