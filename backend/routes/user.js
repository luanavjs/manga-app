const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')


router.get('/', async (req,res) => {
    const users = await User.find()
    try {
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message: 'error al mostrar usuarios'})
    }
})

router.post('/signup', async (req,res) => {
    const {email} = req.body
    const testEmail = await User.findOne({email})
    if(testEmail) {
        return res.status(500).json({message:'No se pudo registrar, intente de nuevo'})
    }
    const user = new User(req.body)
    try {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(req.body.password, salt)
        user.save()
        return res.status(500).json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'No se pudo crear el usuario'})
    }
})

router.post('/login', async (req,res) => {
    const { email,password } = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.status(500).json({message: 'Error de autenticacion'})
    }
    const validPassword = bcrypt.compareSync(password,user.password)
    if(!validPassword){
        return res.status(500).json({message: 'Error de autenticacion'})
    }
    return res.status(200).json(user)
})

module.exports = router