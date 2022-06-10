//requires
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const db = require("./database")
require("dotenv").config()



const r_registro = require("./rutas/r_registro")
const r_login = require("./rutas/r_login")
const r_mascotas = require("./rutas/r_mascotas")
//const r_usuarios = require("./rutas/r_usuarios")

const app = express()

//conectamos la base de datos
db.on("error", (err)=>{
    console.log("error en la conexion a la base de datos ", err)
})

db.on("connected", ()=>{
    console.log("estas conectado a la base de datos !!!")
})

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan("tiny"))




//rutas genericas
//app.use("/api/usuarios", r_usuarios)
app.use("/api/mascotas", r_mascotas)
app.use("/api/registro", r_registro)
app.use("/api/login", r_login)


app.get("/", (req, res)=>{
    res.send("<h1> API mascotas </h1>")
})

app.listen(process.env.PORT, ()=>{
    console.log("estas escuchando el puerto ", process.env.PORT)
})


