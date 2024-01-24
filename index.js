const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//conectar mongo
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/restapi')

//servidor
const app = express()

//habilitar bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//rutas
app.use('/', routes())

//puerto
app.listen(5000)