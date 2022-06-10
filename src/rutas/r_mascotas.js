const express = require("express")
const router = express.Router()
const auth = require("../middlewares/auth")

const { c_mascotas } = require("../controladores/c_mascotas")

router.get("/", auth, c_mascotas)

module.exports = router