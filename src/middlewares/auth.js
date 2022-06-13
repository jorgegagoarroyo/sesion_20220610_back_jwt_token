const jwt = require("jsonwebtoken")
const m_usuario = require("../modelos/m_usuarios")
require("dotenv").config()

const auth = async (req,res, next)=>{
    if(req.headers.authorization){
        var token = req.headers.authorization
        token = token.split(" ")[1]
        //console.log("pasamos por auth  token", token)
    }else{
        res.status(400).json({mensaje: "no tienes permisos"})
    }

    try{
        var datos = jwt.verify(token, process.env.SECRETO).data
        //console.log(datos.roles)
        const usuarioEncontardo = await m_usuario.findById(datos.userID)
        req.query.roles = usuarioEncontardo.roles
        //console.log(usuarioEncontardo.roles)
        //console.log(req.query.roles)
        next()

        
    }catch(error){
        res.json({mensaje: "token no valido",
    error})
    }
}

module.exports = auth
 
