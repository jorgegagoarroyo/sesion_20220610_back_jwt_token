const m_usuarios = require("../modelos/m_usuarios")
const bcrypt = require("bcrypt")

module.exports = {
    
    c_registro: async (req,res)=>{

        let rol = ["registrado"]
        if(req.body.roles){
            rol = rol.concat(req.body.roles)
        }
        console.log("roles del user ", rol)


        const contrasenaEncriptada = await bcrypt.hash( req.body.pass, 10)

        //instacia del modelo
        usuario = new m_usuarios({
            user : req.body.user,
            pass : contrasenaEncriptada,
            roles : rol//["registrado"]
        })

                               
        try{
            const usuarioGuardado = await usuario.save()
            res.status(200).json({usuarioGuardado, mensaje: "se ha creado usuario"})
        }catch(err){
            res.status(400).json({error : err})
        }
    }  

}