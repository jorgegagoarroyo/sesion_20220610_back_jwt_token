const bcrypt = require("bcrypt")
const m_usuario = require("../modelos/m_usuarios")
const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = {

    c_login: async (req, res)=>{
        let user = req.body.user
        let pass = req.body.pass
        try{
            const usuarioEncontrado = await m_usuario.findOne({"user":user})
            // console.log("compare ",bcrypt.compareSync(pass, {usuarioEncontrado.pass}"`))
            // console.log("pre compare",usuarioEncontrado.pass)
            // console.log("compare ", bcrypt.compareSync( usuarioEncontrado.pass, pass))


            if(bcrypt.compare(pass, usuarioEncontrado.pass)){

                //generamos un token
                const token = await jwt.sign({
                    data:{
                        userID : usuarioEncontrado._id,
                        roles : usuarioEncontrado.roles,
                        user: usuarioEncontrado.user
                    }
                }, 
                process.env.SECRETO,
                {expiresIn: 60*60}
                )

                return res.status(200).json({
                    token: token,
                    userId: usuarioEncontrado._id,
                    user: usuarioEncontrado.user,
                    mensaje: "token ok"
                })
            }else{
                return res.status(400).json({mensaje: "la contraseña no es correcta"})
            }
        }catch(err){
            return res.status(500).json({error:err, mensaje: "usuario null"})
        }
    } 
}