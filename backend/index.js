const express = require("express")
const mongoose = require("mongoose")
const userRoutes = require("./routes/users.routes")
const bookRoutes = require("./routes/books.routes")
const cors = require('cors')


const app = express()

app.use(cors())

app.use(express.json())

mongoose.connect("mongodb+srv://aurzarcas:VHfe8ASy0ZrhDSsU@cluster0.nlps2cm.mongodb.net/biblioteca")
.then(()=>{
    console.log(`Conexión con base de datos exitosa`)
})

.catch((error)=>{
    console.log(`Error al conectar con la base de datos: ${error}`)
})


app.use("/api/users",userRoutes)
app.use("/api/books",bookRoutes)

app.listen(3000, ()=>{
    console.log(`API funcionado... en puerto 3000`)
})
