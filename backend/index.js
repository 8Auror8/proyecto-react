const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://aurzarcas:VHfe8ASy0ZrhDSsU@cluster0.nlps2cm.mongodb.net/biblioteca")
.then(()=>{
    console.log(`Conexión con base de datos exitosa`)
})

.catch((error)=>{
    console.log(`Error al conectar con la base de datos: ${error}`)
})

app.listen(3000,()=>{
    console.log(`API funcionando en puerto 3000`)
})