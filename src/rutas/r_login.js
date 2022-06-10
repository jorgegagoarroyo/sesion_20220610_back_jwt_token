const express = require("express")
const router = express.Router()
const { c_login }= require("../controladores/c_login")

router.post("/", c_login)

module.exports = router