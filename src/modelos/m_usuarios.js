const mongoose = require("mongoose")

var Schema = mongoose.Schema

//instancia del esquema
var esquemaUsuario = new Schema({
    user: {type: String, required: true},
    pass: {type: String, required: true},
    roles: [String]
})

const m_usuarios = mongoose.model("users", esquemaUsuario)

module.exports = m_usuarios