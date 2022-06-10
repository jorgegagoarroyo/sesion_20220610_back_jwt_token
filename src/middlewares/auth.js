const jwt = require("jsonwebtoken")
const m_usuario = require("../modelos/m_usuarios")
require("dotenv").config()

const auth = async (req,res, next)=>{
    var token = req.headers.authorization
    token = token.split(" ")[1]
    //console.log("pasamos por auth  token", token)
    try{
        var datos = jwt.verify(token, process.env.SECRETO).data
        //console.log(datos.roles)
        const usuarioEncontardo = await m_usuario.findById(datos.userID)
        console.log(usuarioEncontardo)

        
    }catch(error){
        res.json({mensaje: "token no valido",
    error})
    }
}

module.exports = auth

