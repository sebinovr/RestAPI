const express = require('express')
const routes = require('./routes')


//servidor
const app = express()

//rutas
app.use('/', routes())

//puerto
app.listen(5000)