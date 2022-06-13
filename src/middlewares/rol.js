
const rol = (arrayRoles)=>{
    //arrayRoles.contains("admin"||"gestorUsuarios")
    return (req, res, next)=>{
        console.log(req.query.roles)
        console.log(arrayRoles)

        var permiso = false
        
        req.query.roles.forEach(element => {
            console.log("elemento: ",element)
            if(arrayRoles.includes(element)){
                permiso = true
                return
            }  
        })
        if(permiso){
            console.log("pasaste")
            next()
        }else{
            res.json({mensaje: "you shall not pass"})
        }
    }
}

module.exports = rol