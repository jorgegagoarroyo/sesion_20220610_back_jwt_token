const express = require("express")
const router = express.Router()
const { c_registro }= require("../controladores/c_registro")

router.post("/", c_registro)

module.exports = router