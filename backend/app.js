 //importo las librerias
 const express = require('express')
 const mongoose = require('mongoose')
 const cors = require('cors')

 const app = express()

 require('dotenv').config()


 //configuro conexiones
mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("BDD conectada"))
    .catch(()=> console.log("BDD no se pudo conectar"))


 //configuro middlewares
app.use(cors()) // CORS -> Cross origin resourse sharing / frontend <=> backend
app.use(express.json())

 //configuro rutas
app.use('/api/auth', require('./routes/user'))
app.use('/api/books', require('./routes/book'))
app.use('/api/rentals', require('./routes/rental'))


 //configuro el listening al puerto

const port = process.env.PORT

app.listen(port,() =>{
    console.log('servidor corriendo en el puerto...')
})


