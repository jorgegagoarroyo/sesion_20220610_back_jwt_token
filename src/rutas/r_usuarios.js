const express = require("express")
const router = express.Router()
const{ usuarios } = require("../controladores/c_usuarios")
const auth = require("../middlewares/auth")
const rol = require("../middlewares/rol")

router.get("/", auth, rol(["admin", "gestorUsuarios"]), usuarios)


module.exports = router