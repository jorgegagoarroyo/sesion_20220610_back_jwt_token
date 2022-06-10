require("dotenv").config()
const mongoose = require("mongoose")

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.h7qef.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection



module.exports = db